import { useState, useEffect } from "react";

const initialState = 0;

const Contandor = () => {
  const [contador, setContador] = useState(initialState);

  // "DOMContentLoaded" -> Cuando se cargue el contenido del dom
  //window.addEventListener("DOMContentLoaded", console.log("DOM Cargando..."))

  // useEffect(() => {
  //       if(contador){ 
  //           console.log("El contador ha sido incrementado.")
  //       }
  // }, [contador])
  // useEffect(() => {
  //       console.log("Dom recargandose...")
  // }, [])
  

  const incrementar = () => 
    setContador((contador) => contador + 1)
  
  const resetear = () => setContador(initialState)

  const decrementar = () => 
    setContador((contador) => contador - 1)

  return (
    <>
      <div style={estilos}>
        <div>
          <button onClick={decrementar}>-</button>
          <button onClick={resetear}>0</button>
          <button onClick={incrementar}>+</button>
        </div>
        <h3>{contador}</h3>
      </div>
    </>
  );
};

export default Contandor;



const estilos = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }