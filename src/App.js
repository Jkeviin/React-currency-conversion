import "./App.css";
import { useState } from "react";

const App = () => {
  const cambios=[
    {
      moneda: "Euro",
      cambio:1,
    },{
      moneda: "Peso argentino",
      cambio:122.687,
    },{
      moneda: "Peso colombiano",
      cambio:4024.63,
    },{
      moneda: "Peso mexicano",
      cambio:21.43,
    },{
      moneda: "Dólar",
      cambio:1.08
    }
  ]
  const [cantidad, setCantidad] = useState(0);
  const [resultado1, setResultado1] = useState(0);
  const [resultado2, setResultado2] = useState(0);
  const [resultado3, setResultado3] = useState(0);
  const [resultado4, setResultado4] = useState(0);

  const modificar = (e) => {
    setCantidad(e.target.value);
    setResultado1(cambios[1].cambio * e.target.value);
    setResultado2(cambios[2].cambio * e.target.value);
    setResultado3(cambios[3].cambio * e.target.value);
    setResultado4(cambios[4].cambio * e.target.value);
  }

  return (
  <div className="container">
            <label htmlFor="u0">{cambios[0].moneda}</label>
            <input id="u0" type="number" value={cantidad} onChange={modificar}/> 
          
            <label htmlFor="u1">{cambios[1].moneda}</label>
            <input id="u1" type="number" value={resultado1} readOnly/> 
    
            <label htmlFor="u2">{cambios[2].moneda}</label>
            <input id="u2" type="number" value={resultado2} readOnly/> 
    
            <label htmlFor="u3">{cambios[3].moneda}</label>
            <input id="u3" type="number" value={resultado3} readOnly/> 
    
            <label htmlFor="u4">{cambios[4].moneda}</label>
            <input id="u4" type="number" value={resultado4} readOnly/> 
  </div>
  )
}

export default App;