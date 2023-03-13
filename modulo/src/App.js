import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import data from "./data/data.json";

function App() {
  const [phrases, setPhrases] = useState(data);
  // guardo lo que retorna el map
  const htmlData = phrases.map((eachPhrase) => {
    console.log(eachPhrase);
    return (
      <li>
        {eachPhrase.character}: {eachPhrase.quote}
      </li>
    );
  });
  return (
    <div>
      <ul>{htmlData}</ul>
    </div>
  );
}

export default App;
