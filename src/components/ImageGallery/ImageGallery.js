import React from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import { v4 as id } from "uuid";

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
