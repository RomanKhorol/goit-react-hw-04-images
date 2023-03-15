import PropTypes from 'prop-types';
import { Li } from './ImageGalleryItem.styled';
const ImageGalleryItem = ({ pitureUrl, largeImageURL, hendleImgClik }) => (
  <Li className="gallery-item">
    <img
      src={pitureUrl}
      alt=""
      width="100%"
      onClick={() => hendleImgClik(largeImageURL)}
    />
  </Li>
);
ImageGalleryItem.propTypes = {
  pitureUrl: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
export default ImageGalleryItem;
