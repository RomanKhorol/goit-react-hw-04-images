import React, { useState, useEffect } from 'react';
import Notiflix from 'notiflix';

import { fetchPictures } from './PicturesAPI';
import Button from 'components/Button/Button';
import { BallTriangle } from 'react-loader-spinner';
import Modal from 'components/Modal/Modal';
import Serchbar from './Searchbar/Serchbar';
import ImageGllery from './ImageGallery/ImageGallery';

export default function App() {
  const [pictures, setPictures] = useState([]);
  const [button, setButton] = useState(false);
  const [loading, setLoading] = useState(false);
  const [shownModal, setShownModal] = useState(false);
  const [urlLargeImg, setUrlLargeImg] = useState('');
  const [text, setText] = useState('');
  const [numberPage, setNumberPaget] = useState(1);

  useEffect(() => {
    if (text === '') {
      return;
    }
    window.addEventListener('keydown', handleKeyDown);
    async function getPictures() {
      try {
        setPictures([]);
        setButton(false);
        setLoading(true);
        const fetchedPictures = await fetchPictures(text, numberPage);
        setPictures(prevPictures => [...prevPictures, ...fetchedPictures.hits]);
        console.log(fetchedPictures);
        if (fetchPictures.hits.length === 0) {
          Notiflix.Notify.warning('No picture are found');
          setButton(false);
        } else setButton(true);
      } catch (error) {
        setButton(false);
        Notiflix.Notify.warning(
          'Were sorry, but youve reached the end of search results.'
        );
      } finally {
        setLoading(false);
      }
    }
    getPictures();
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [text, numberPage]);

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      setShownModal(false);
    }
  };
  const openModal = url => {
    setShownModal(true);
    setUrlLargeImg(url);
  };

  const closeModalByClickOverlay = event => {
    if (event.currentTarget === event.target) {
      setShownModal(false);
    }
  };

  const hadleFormsubmit = text => {
    setText(text);
    setNumberPaget(1);
  };
  const onBtnClick = () => {
    setNumberPaget(prevNumberPaget => prevNumberPaget + 1);
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          borderRadius: '4px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          backgroundColor: 'blue',
          gap: '10px',
          alignItems: 'center',
          height: '65px',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Serchbar onSubmit={hadleFormsubmit} />
      </div>
      <div>
        <ImageGllery pictures={pictures} openModal={openModal} />
        {shownModal && (
          <Modal closeModal={closeModalByClickOverlay}>
            <img src={urlLargeImg} alt="" width="100%" height="100%" />
          </Modal>
        )}
        {loading && (
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
          />
        )}
        {button && <Button addPictures={onBtnClick} />}
      </div>
    </div>
  );
}
