import PropTypes from 'prop-types';

// import component
import Card from "../Card";

export default function Cards({ cities }) {
    console.log(cities);
  return (
    <main className="cards-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </main>
  );
}

Cards.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      country: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      summary: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

