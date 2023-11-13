import React from 'react';

const ContentSlide = ({ text }) => {
  return (
    <div className="text-center py-8">
      <h2 className="text-2xl font-bold text-green-600">Content Slide</h2>
      <p className="mt-4 text-gray-700">{text}</p>
    </div>
  );
};

export default ContentSlide;
