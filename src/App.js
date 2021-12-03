// import styles
import './App.css';
import './reset.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="header__title">
          FRONT-END
        </h1>
        <h2 className="header__subtitle">
          valtech_
        </h2>
        <p className="header__content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit dolor tenetur tempora sapiente quo eveniet fuga modi soluta quod
        </p>
      </header>
      <main className="cards-container">
        <div className="card">
          <h3 className="card__title">
            ITALY
          </h3>
          <h4 className="card__subtitle">
            VENICE
          </h4>
          <p className="card__description">
            Venice, the capital of northern Italy’s Veneto region, is built on more than 100 small islands in a lagoon in the Adriatic Sea. It has no roads, just canals.
          </p>
          <button className="card__button">Explore More</button>
        </div>
      </main>
    </div>
  );
}

export default App;
