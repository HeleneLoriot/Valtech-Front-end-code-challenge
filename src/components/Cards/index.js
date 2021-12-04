import PropTypes from 'prop-types';

// import component
import Card from "../Card";

// import style
import './index.css'

export default function Cards({ cities }) {
    // map cities array to display a JSX array 
    // it provide the proper amount of Card according the cities array's length
    const cardsList = cities.map( item => <Card key={item.id} {...item}/>)

    return (
        <main className="cards-container">
            {cardsList}
        </main>
    );
}

Cards.propTypes = {
    cities: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.number.isRequired,
        }),
    ).isRequired,
};

