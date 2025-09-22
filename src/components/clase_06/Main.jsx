
// Paso 1 - Importar la nave
import { ThemeContext } from "@/context/ThemeContextProvider";
// Paso 2 - Importar al cartero
import { useContext } from "react";


const Main = () => {

  const { toggleTheme } = useContext(ThemeContext);

  return (
    <>
        <main className={toggleTheme}>
            <h1>Main</h1>
        </main>

        <style jsx>{`
            main {
                height: 100vh;
            }
        `}</style>
    </>

    
  )
}

export default Main