import { useState } from 'react';

// import components
import Header from "./components/Header";
import Cards from "./components/Cards";

// import styles
import './App.css';
import './reset.css';

// import datas
import citiesData from "../src/data/cities";

export default function App() {
  // global state
  const [cities, setCities] = useState(citiesData);

  return (
    <div className="App">
      <Header 
      title="front-end"
      subtitle="valtech"
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit dolor tenetur tempora sapiente quo eveniet fuga modi soluta quod"
      />
      <Cards cities={cities}/>
    </div>
  );
}

