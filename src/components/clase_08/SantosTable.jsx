import SantosTableRow from "./SantosTableRow";

const SantosTable = ({ data, deleteSanto, setDataToEdit }) => {
  return (
    <>
      <h3>Tabla de Datos</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Constelacion</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((caballero) => (
            <SantosTableRow
              key={caballero.id}
              caballero={caballero}
              deleteSanto={deleteSanto}
              setDataToEdit={setDataToEdit}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default SantosTable;
