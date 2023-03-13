import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import data from "./data/data.json";

function App() {
  const [phrases, setPhrases] = useState(data);
  const [searchByPhrase, setSearchByPhrase] = useState("");
  // const [newPhrase, setNewPhrase] = useState({
  //   character: "",
  //   quote: "",
  // });

  // guardo lo que retorna el map
  const htmlData = phrases.map((eachPhrase) => {
    // console.log(eachPhrase);

    return (
      <li>
        {eachPhrase.character}: {eachPhrase.quote}
      </li>
    );
  });

  const handleSearchByPhrase = (evt) => {
    setSearchByPhrase(evt.target.value);
  };

  // const handleNewphrase = (evt) => {
  //   setNewPhrase({
  //     character: "",
  //     quote: "",
  //   });
  // };
  return (
    <div>
      <h4>Frases de friends</h4>
      <form>
        <label htmlFor='filter-phrase'>Filtrar por frase</label>
        <input
          name='filter-phrase'
          type={Text}
          value={searchByPhrase}
          onChange={handleSearchByPhrase}></input>
        <label htmlFor='filter-character'>Filtrar por personaje</label>
        <input name='filter-character' type={Text}></input>
      </form>
      <ul>{htmlData}</ul>
      <h4>Añadir una nueva frase</h4>
    </div>
  );
}

export default App;
