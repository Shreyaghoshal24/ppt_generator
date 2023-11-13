import React from 'react';

const ImageSlide = ({ imageUrl }) => {
  return (
    <div className="text-center py-8">
      <h2 className="text-2xl font-bold text-purple-600">Image Slide</h2>
      <img className="mt-4 mx-auto max-w-full max-h-64" src={imageUrl} alt="Presentation Image" />
    </div>
  );
};

export default ImageSlide;
