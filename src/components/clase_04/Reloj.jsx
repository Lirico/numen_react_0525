'use client'
import { useState, useEffect } from "react"


/*
    CICLO DE VIDA DE UN COMPONETE

    NACE -> FASE DE MONTAJE

    CRECE -> FASE DE ACTUALIZACION

    MUERTE -> FASE DE DESMONTAJE
*/


// new Date().toLocalTimeString()

const Reloj = () => {

    const [hora, setHora] = useState(new Date().toLocaleTimeString())
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        let temporizador; // undefined

        if(isVisible){
            // Fase de montaje
            temporizador = setInterval(() => {
                // Fase de actualizacion
                setHora(new Date().toLocaleTimeString())
            }, 1000);
        }

        // Fase de desmontaje
        return () => clearInterval(temporizador) // temporizador -> undefined
    }, [isVisible])
    

  return (
    <>
        <h2>Reloj Con Hooks</h2>
        {isVisible && <h3 suppressHydrationWarning={true}>{hora}</h3>}
        <div>
            <button onClick={() => setIsVisible(!isVisible)}>{isVisible ? "Detener" : "Iniciar"}</button>
        </div>
    </>
  )
}

export default Reloj







