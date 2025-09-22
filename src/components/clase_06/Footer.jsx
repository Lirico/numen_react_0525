// Paso 1 - Importar la nave
import { ThemeContext } from "@/context/ThemeContextProvider";
// Paso 2 - Importar al cartero
import { useContext } from "react";

const Footer = () => {

  const { toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <footer className={toggleTheme}>
        <h1>Footer</h1>
      </footer>

      <style jsx>{`
        footer {
          height: 50vh;
        }
      `}</style>
    </>
  );
};

export default Footer;
