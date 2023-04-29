import { useEffect, useState } from "react";
import axios from "axios";
import Naus from "./components/Naus";
import Fitxa from "./components/Fitxa";
import "./App.css";
import logo from "./images/logo.png";

function App() {
  const urlNaus = "https://swapi.dev/api/starships/";

  useEffect(() => {
    axios.get(urlNaus).then((response) => setNaus(response.data.results));
  }, []);

  const [naus, setNaus] = useState([]);
  const [index, setIndex] = useState(0);
  const [mostrarLlista, setMostrarLlista] = useState(true);
  const [mostrarFitxa, setMostrarFitxa] = useState(false);
  console.log(index);

  return (
    <>
      <header>
        <img src={logo} alt="logo" width="200px" />
      </header>
      <main className="llista">
        
        {mostrarLlista &&
          naus.map((nau, indice) => (
            <Naus
              nau={nau}
              indice={indice}
              setIndex={setIndex}
              setMostrarFitxa={setMostrarFitxa}
              setMostrarLlista={setMostrarLlista}
            />
          ))}

        {mostrarFitxa &&
          naus.map((nau, indice) => {
            return indice === index ? 
              <Fitxa
                nau={naus}
                index={indice}
                setMostrarFitxa={setMostrarFitxa}
                setMostrarLlista={setMostrarLlista}
              />
             : 
              ""
            ;
          })}
      </main>
    </>
  );
}

export default App;
