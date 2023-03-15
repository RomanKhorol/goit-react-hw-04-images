import { Component } from 'react';
import Notiflix from 'notiflix';
import { BallTriangle } from 'react-loader-spinner';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Modal from 'components/Modal/Modal';
import { fetchPictures } from '../PicturesAPI';
import Button from 'components/Button/Button';
import { Ul } from './ImageGllery.styled';
export default class ImageGllery extends Component {
  state = {
    pictures: [],
    numberPage: 1,
    button: false,
    loading: false,
    shownModal: false,
    urlLargeImg: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.text !== this.props.text) {
      this.setState({ pictures: [] });
    }
    if (
      prevProps.text !== this.props.text ||
      prevProps.page !== this.props.page
    ) {
      this.setState({ button: false });
      this.setState({ loading: true });
      fetchPictures(this.props.text, this.props.page)
        .then(pictures => {
          this.setState(prevState => ({
            pictures: [...this.state.pictures, ...pictures.hits],
          }));
          if (pictures.hits.length === 0) {
            Notiflix.Notify.warning('No picture are found');
            this.setState({ button: false });
          } else this.setState({ button: true });
        })
        .catch(error => {
          this.setState({ button: false });
          Notiflix.Notify.warning(
            'Were sorry, but youve reached the end of search results.'
          );
        })
        .finally(() => this.setState({ loading: false }));
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.setState({ shownModal: false });
    }
  };
  openModal = url => {
    this.setState({ shownModal: true });
    this.setState({ urlLargeImg: url });
  };

  closeModalByClickOverlay = event => {
    if (event.currentTarget === event.target) {
      this.setState({ shownModal: false });
    }
  };

  render() {
    const { pictures, button, loading, shownModal } = this.state;

    return (
      <div>
        <Ul className="gallery">
          {pictures.map(hit => {
            return (
              <ImageGalleryItem
                key={hit.id}
                pitureUrl={hit.webformatURL}
                largeImageURL={hit.largeImageURL}
                hendleImgClik={this.openModal}
              ></ImageGalleryItem>
            );
          })}
        </Ul>
        {shownModal && (
          <Modal closeModal={this.closeModalByClickOverlay}>
            <img
              src={this.state.urlLargeImg}
              alt=""
              width="100%"
              height="100%"
            />
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
        {button && <Button addPictures={this.props.onClick} />}
      </div>
    );
  }
}
