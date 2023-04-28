import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Naus = () => {

  const [naus, setNaus] = useState([]);

  const urlNaus = "https://swapi.dev/api/starships/";

  useEffect(() => {
    axios.get(urlNaus).then((response) => setNaus(response.data.results));
  }, []);

  return (
    <>
      {naus.map((nau) => (
        <div key={nau.name} className="nau">
          <h2>{nau.name.toUpperCase()}</h2>
          <p>{nau.model}</p>
        </div>
      ))}
    </>
  );
};

export default Naus;
