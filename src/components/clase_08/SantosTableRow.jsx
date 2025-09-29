import React from "react";

const SantosTableRow = ({caballero, deleteSanto, setDataToEdit}) => {

    const {name, constellation, id} = caballero;

  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{constellation}</td>
        <td>
          <button onClick={() => setDataToEdit(caballero)}>Editar</button>
          <button onClick={() => deleteSanto(caballero)}>Eliminar</button>
        </td>
      </tr>
    </>
  );
};

export default SantosTableRow;
