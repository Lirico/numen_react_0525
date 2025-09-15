import { TYPES } from "../actions/actions";

export function reducer(state, action) { // -> action = {type: "INCREMENTAR"}
  switch (action.type) {
    case TYPES.INCREMENTAR: { 
      return {
        ...state, // visible: false
        contador: state.contador + 1,
      };
    }
    case TYPES.DECREMENTAR: {
      return {
        ...state, // visible
        contador: state.contador - 1,
      };
    }
    case TYPES.RESETEAR: {
      return {
        ...state, // visible
        contador: 0,
      };
    }
    case TYPES.MOSTRAR: {
        return {
        ...state, // contador
        isVisible: !state.isVisible,
      };
    }
    default:
      return state
  }
}
