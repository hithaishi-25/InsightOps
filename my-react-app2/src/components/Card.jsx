import PropTypes from 'prop-types';
import { memo } from 'react';

function Card({ image, title, number }) {
  return (
    <div className="inline-block rounded-lg overflow-hidden shadow-md bg-black hover:shadow-lg transition-shadow duration-200">
      {/* Image Section */}
      <div className="flex justify-center">
        <img
          src={image}
          alt={title}
          className="w-[100px] h-[100px] object-cover"
          // onError={(e) => (e.target.src = 'https://via.placeholder.com/150')} // Fallback image
        />
      </div>
      {/* Content Section */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white truncate">{title}</h3>
        <p className="text-sm text-gray-300 mt-1">Count: {number}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};

export default memo(Card);