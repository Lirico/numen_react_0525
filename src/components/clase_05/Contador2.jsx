import { useReducer } from "react";
import { TYPES } from "@/reducer/actions/actions";
import { reducer } from "@/reducer/reducer/reducer";
import { initialState } from "@/reducer/initial_state/initialState";

const Contandor2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const incrementar = () => dispatch({type: TYPES.INCREMENTAR})
  const resetear = () => dispatch({type: TYPES.RESETEAR})
  const decrementar = () => dispatch({type: TYPES.DECREMENTAR})
  const handleVisibility = () => dispatch({type: TYPES.MOSTRAR})

  return (
    <>
      <div style={estilos}>
        <div>
          <button onClick={decrementar}>-</button>
          <button onClick={resetear}>0</button>
          <button onClick={incrementar}>+</button>
          <button onClick={handleVisibility}>Mostrar</button>
        </div>
        {state.isVisible && <h3>{state.contador}</h3>}
      </div>
    </>
  );
};

export default Contandor2;

const estilos = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};
