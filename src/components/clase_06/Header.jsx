// Paso 1 - Importar la nave
import { ThemeContext } from "@/context/ThemeContextProvider";
// Paso 2 - Importar al cartero
import { useContext } from "react";

const Header = () => {
  // Paso 3 - Pasar el paquete al cartero
  const { handleTheme, toggleTheme, toggleIcon } = useContext(ThemeContext);
  
  return (
    <>
      <nav className={toggleTheme}>
        <button onClick={handleTheme}>{toggleIcon}</button>
      </nav>

      <style jsx>{`
        button {
            border: none;
            background-color: transparent;
            font-size: 2rem;
            cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default Header;
