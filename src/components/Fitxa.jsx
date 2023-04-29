import React from "react";

const Fitxa = ({nau, index ,setMostrarLlista, setMostrarFitxa}) => {

  const mostrarLlista=()=>{
    setMostrarFitxa(false)
    setMostrarLlista(true)
  }

  return (
    <>
      <div className="container" onClick={()=>mostrarLlista()}>
        <h1>{nau[index].name.toUpperCase()}</h1>
        <img src={`https://starwars-visualguide.com/assets/img/starships/${index}.jpg`} alt="" />
        <section className="info">
          <p className="dates">MODEL:<span>{nau[index].model.toUpperCase()}</span></p>
          <p className="dates">STARSHIP CLASS:<span>{nau[index].starship_class.toUpperCase()}</span></p>
          <p className="dates">MANUFACTURER:<span>{nau[index].manufacturer.toUpperCase()}</span></p>
          <p className="dates">COST:<span>{nau[index].cost_in_credits.toUpperCase()} CREDITS</span></p>
        </section>
        <section className="info2">
          <div>
          <p className="dates">CREW:<span>{nau[index].crew}</span></p>
          <p className="dates">PASSANGER CAPACITY:<span>{nau[index].passengers}</span></p>
          <p className="dates">CARGO CAPACITY:<span>{nau[index].cargo_capacity} TONS</span></p>
          <p className="dates">CONSUMABLES:<span>{nau[index].consumables.toUpperCase()}</span></p>
          </div>
          <div>
          <p className="dates">LENGTH:<span>{nau[index].length} METERS</span></p>
          <p className="dates">MAXIMUM ATMOSHPERING SPEED:<span>{nau[index].max_atmosphering_speed} KM/H</span></p>
          <p className="dates">HYPERDRIVE RATING:<span>{nau[index].hyperdrive_rating}</span></p>
          <p className="dates">MAXIMUM SPEED IN REALSPACE:<span>{nau[index].MGLT} MGLT</span></p>
          </div>
        </section>
        <div className="pilots">
            PILOTS:<span></span>
        </div>
      </div>
    </>
  );
};

export default Fitxa;
