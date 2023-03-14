import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
// importo el api desde mi carpeta data
import data from "./data/quotes.json";

function App() {
  // definimos las variables de estado
  // todos los datos del API
  const [phrases, setPhrases] = useState(data);
  // almacenamos lo que el usuario va a filtrar
  const [searchByPhrase, setSearchByPhrase] = useState("");
  const [searchByCharacter, setSearchByCharacter] = useState("ALL");
  // guardo lo que retorna el map
  const htmlData = phrases
    .filter((eachPhrase) =>
      eachPhrase.quote
        .toLocaleLowerCase()
        .includes(searchByPhrase.toLocaleLowerCase())
    )
    .filter((eachPhrase) => {
      if (eachPhrase.character === "all") {
        return true;
      } else {
        return eachPhrase.character === eachPhrase;
      }
    })
    .map((eachPhrase, index) => (
      <li key={index}>
        {eachPhrase.character}: {eachPhrase.quote}
      </li>
    ));

  const handleSearchByPhrase = (evt) => {
    setSearchByPhrase(evt.target.value);
  };
  const handleChangecharacter = (evt) => {
    setSearchByCharacter(evt.target.value);
  };

  return (
    <div>
      <h4>Frases de friends</h4>
      <form>
        <label htmlFor='filter-phrase'>Filtrar por frase</label>
        <input
          name='filter-phrase'
          type={Text}
          value={searchByPhrase}
          // asigno el manejador del evento
          onChange={handleSearchByPhrase}></input>
        <label htmlFor='filter-character'>Filtrar por personaje</label>
        <select
          onChange={handleChangecharacter}
          value={searchByCharacter}
          name='filter-character'
          type={Text}>
          <option value='ALL'>TODOS</option>
          <option value='ross'>Ross</option>
          <option value='Monica'>Monica</option>
          <option value='Joey'>Joey</option>
          <option value='Phoebe'>Phoebe</option>
          <option value='Chandler'>Chandler</option>
          <option value='Rachel'>Rachel</option>
        </select>
      </form>
      <ul>{htmlData}</ul>
      <h4>Añadir una nueva frase</h4>
    </div>
  );
}

export default App;
