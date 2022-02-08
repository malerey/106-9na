import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";

// USE EFFECT, EFECTOS EN REACT
const App = () => {
  const [personajes, setPersonajes] = useState([]);
  const [valorDelInput, setValorDelInput] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // nos permite determinar que un codigo se va a ejecutar
    // solo en algunas ocasiones
    setLoading(true);
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${busqueda}`)
      .then((res) => res.json())
      .then((data) => {
        setPersonajes(data.results);
        setLoading(false);
      });
  }, [busqueda]);

  const handleChange = (e) => {
    setValorDelInput(e.target.value);
  };

  const handleClick = () => {
    setBusqueda(valorDelInput);
  };

  console.log("valor del input:", valorDelInput);
  console.log("busqueda:", busqueda);
  return (
    <div className="App">
      <div>
        {loading && <h1>CARGANDO</h1>}
        <h2>Personaje buscado: {valorDelInput}</h2>
        <input type="text" onChange={handleChange}></input>
        <button onClick={handleClick}>Buscar</button>
      </div>
      <div>
        {personajes.map((personaje) => (
          <Card name={personaje.title} img={personaje.thumbnail} />
        ))}
      </div>
    </div>
  );
};

export default App;
