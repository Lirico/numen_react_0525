// Paso 1 -> Importar la nave espacial -> createContext()
import { createContext, useState } from "react";

// Paso 2 - Declarar la nave -> Crear el contexto
export const ThemeContext = createContext(); // Es una especie de caja

const ThemeContextProvider = ({children}) => {
  // Paso 3 - Definir el paquete a exportar -> un estado con props
  const [theme, setTheme] = useState(false);

  const handleTheme = () => setTheme(!theme);

  const toggleTheme = theme && "dark"

  const toggleIcon = theme ? '☀️' : '🌙'

  // Paso 4 - Definir al flaco de la gorra (provider)
  // Paso 5 - Ponerle el paquete en la mano al flaco (definir propos en el value del provider)
  // Paso 6 - Definir la lista de elemento que pueden acceder al paquete
  return (
    <ThemeContext.Provider value={{handleTheme, toggleTheme, toggleIcon}}>
        {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
