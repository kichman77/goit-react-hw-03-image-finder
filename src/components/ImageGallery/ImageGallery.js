import React from "react";
import { v4 as id } from "uuid";
import PropTypes from "prop-types";

import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ galleryItems, openModal }) => {
  return (
    <ul className="ImageGallery">
      {galleryItems.map((item) => {
        // console.log(item);
        const { webformatURL, largeImageURL } = item;
        return (
          <ImageGalleryItem
            openModal={openModal}
            key={id()}
            src={webformatURL}
            source={largeImageURL}
          />
        );
      })}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  galleryItems: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
  openModal: PropTypes.func.isRequired,
};
