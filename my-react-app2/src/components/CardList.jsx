import PropTypes from 'prop-types';
import Card from './Card'; // Adjust the import path based on your file structure

function CardList({ cards }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
      {cards.map((card) => (
        <Card
          key={card.id} // Use a unique ID for each card
          image={card.image}
          title={card.title}
          number={card.number}
        />
      ))}
    </div>
  );
}

CardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default CardList;