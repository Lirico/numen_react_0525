import { useState, useEffect } from "react";
import SantosForm from "./SantosForm";
import SantosTable from "./SantosTable";
import axios from "axios";

const initialDb = [];

const SantosApp = () => {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);

  const readDb = async () => {
    const ENDPOINT = "http://localhost:8000/santos";
    const response = await axios.get(ENDPOINT);
    const santos = response.data;
    setDb(() => santos);
  };

  useEffect(() => {
    readDb();
  }, []);

  const createSanto = async (santo) => {
    santo.id = String(Date.now());

    const ENDPOINT = "http://localhost:8000/santos";

    const request = {
      method: "POST",
      headers: { "content-type": "application/json" },
      data: JSON.stringify(santo),
    };

    await axios(ENDPOINT, request);

    readDb();
  };

  const updateSanto = async (santo) => {
    const { id } = santo;

    const ENDPOINT = `http://localhost:8000/santos/${id}`;

    const request = {
      method: "PUT",
      headers: { "content-type": "application/json" },
      data: JSON.stringify(santo),
    };

    await axios(ENDPOINT, request);

    readDb();
  };

  const deleteSanto = async (santo) => {
    const { id, name, constellation } = santo;

    const isConfirmed = confirm(`¿Estas seguro de que queres eliminar a ${name} de ${constellation}?`)

    const ENDPOINT = `http://localhost:8000/santos/${id}`;

    const request = {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    };

    if (isConfirmed) {
        await axios(ENDPOINT, request);
        readDb();
    } else {
        return;
    }
  };

  return (
    <div>
      <h2>CRUD App</h2>
      <SantosForm
        createSanto={createSanto}
        updateSanto={updateSanto}
        setDataToEdit={setDataToEdit}
        dataToEdit={dataToEdit}
      />
      <SantosTable
        data={db}
        deleteSanto={deleteSanto}
        setDataToEdit={setDataToEdit}
      />
    </div>
  );
};

export default SantosApp;
