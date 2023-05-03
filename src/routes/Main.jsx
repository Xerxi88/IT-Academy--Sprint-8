import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import Naus from "../components/Naus";
import Fitxa from "../components/Fitxa";

const Main = () => {

  const [naus, setNaus] = useState([]);
  const [index, setIndex] = useState(0);
  const [mostrarLlista, setMostrarLlista] = useState(true);
  const [mostrarFitxa, setMostrarFitxa] = useState(false);
  const [pagina, setPagina] = useState(1);

  const urlNaus = `https://swapi.dev/api/starships/?page=${pagina}`;   

  const mostrarMes=()=>{
    setPagina(pagina+1)
  }


   useEffect(() => {
     axios.get(urlNaus).then((response) => {
       setNaus((prev)=>[...prev,...response.data.results]);
     });
    }, [pagina]);


  // const handleScroll = () => {
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop + 1 >=
  //     document.documentElement.scrollHeight
  //   ) {
  //     setPagina(pagina+1);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
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
            return indice === index ?(
              <Fitxa
                nau={naus}
                index={indice}
                imatge={nau.url.substr(-3,2)}
                setMostrarFitxa={setMostrarFitxa}
                setMostrarLlista={setMostrarLlista}
              />
            ) : (
              ""
            );
          })}

        {mostrarLlista && pagina < 4 && <button onClick={()=>mostrarMes()}>View More</button>}
      </main>
  )
}

export default Main