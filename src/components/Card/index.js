import PropTypes from 'prop-types';

export default function Card( {
    city,
    country,
    id,
    img,
    summary
} ) {
    return (
        <div className="card">
            <h3 className="card__title">
                {city}
            </h3>
            <h4 className="card__subtitle">
                {country}
            </h4>
            <p className="card__description">
                {summary}
            </p>
            <button className="card__button">Explore More</button>
            </div>
    );
}

Card.propTypes = {
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
};
