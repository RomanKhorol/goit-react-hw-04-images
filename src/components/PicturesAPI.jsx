import PropTypes from 'prop-types';

export function fetchPictures(text, numberPage) {
  return fetch(
    `https://pixabay.com/api/?q=${text}&page=${numberPage}&key=32890609-fac98cfe2238792085833a9d0&image_type=photo&orientation=horizontal&per_page=12`
  ).then(res => res.json());
}
fetchPictures.propTypes = {
  text: PropTypes.string.isRequired,
  numberPage: PropTypes.number.isRequired,
};
