import React from "react";
import PropTypes from "prop-types";

const ImageGalleryItem = ({ src, source, openModal }) => {
  return (
    <li onClick={() => openModal(source)} className="ImageGalleryItem">
      <img src={src} alt="img" className="ImageGalleryItem-image" />
    </li>
  );
};
export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};
