import React from "react";

const ImageGalleryItem = ({ src, source, openModal }) => {
  return (
    <li onClick={() => openModal(source)} className="ImageGalleryItem">
      <img src={src} alt="img" className="ImageGalleryItem-image" />
    </li>
  );
};
export default ImageGalleryItem;
