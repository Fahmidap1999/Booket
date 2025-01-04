// src/components/Gallery.js
import React from 'react';
import './Gallery.css';

const Gallery = ({ images }) => {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Gallery Image ${index + 1}`} />
      ))}
    </div>
  );
};

export default Gallery;
