// import components
import Header from "./components/Header";
import Cards from "./components/Cards";

// import styles
import './App.css';
import './reset.css';

// import datas
import citiesData from "../src/data/cities";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Cards cities={citiesData}/>
    </div>
  );
}

