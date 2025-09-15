// HOOKS -> Funciones nativas que se inventaron los React para darle a las funciones
// funcionalidades que antes se le eran reservadas a las clases.

import { useState } from "react"

const Estado = () => {

    const [cabello, setCabello] = useState("Morocho") 

  return (
    <>
        <div>Cabello: {cabello}</div>
        <button onClick={() => setCabello("Rubio")}>Actualizar a SSJ 1</button> {/* -> Rubio */}
    </>
  )
}

export default Estado


