import PropTypes from 'prop-types';

// import style
import './index.css'

export default function Card( {
    city,
    country,
    id,
    img,
    summary
} ) {
    //style for image in Card background
    const backgroundImg = {
        backgroundImage:`url(${img})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }

    // className to change the size of a Card depending on his place on the row
    // larger cards are: the first card, a card with id multiple of 6 and the one immediatly following her
    const cardClassName = id === 1 || id % 6 === 0 || (id % 6) -1 === 0 ? 'card large-card' : 'card small-card';
    
    return (
        <div  className={cardClassName} style={backgroundImg}>
            <div className="card__container">
                <h3 className="card__title">
                    {country}
                </h3>
                <h4 className="card__subtitle">
                    {city}
                </h4>
                <p className="card__description">
                    {summary}
                </p>
                <button className="card__button">Explore More</button>
            </div>
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
