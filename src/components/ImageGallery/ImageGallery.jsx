import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

import { Ul } from './ImageGllery.styled';
const ImageGllery = ({ pictures, openModal }) => {
  return (
    <div>
      <Ul className="gallery">
        {pictures.map(picture => {
          return (
            <ImageGalleryItem
              key={picture.id}
              pitureUrl={picture.webformatURL}
              largeImageURL={picture.largeImageURL}
              hendleImgClik={openModal}
            ></ImageGalleryItem>
          );
        })}
      </Ul>
    </div>
  );
};
export default ImageGllery;
