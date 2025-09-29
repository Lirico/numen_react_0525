import {useState, useEffect} from "react";

const initialForm = {
    name: '',
    constellation: '',
    id: null
}

const SantosForm = ({createSanto, updateSanto, dataToEdit}) => { 
    // en dataToEdit viene cargado el caballero a editar

    const [form, setForm] = useState(initialForm)

    useEffect(() => {
        if(dataToEdit) {
            setForm(dataToEdit)
        } else {
            setForm(initialForm)
        }
    }, [dataToEdit]) // El cambio seria que pase de null -> caballero cargado
    

    const handleChange = (event) => {
        setForm((prevForm) => {
            return {
                ...prevForm,
                [event.target.name]: event.target.value
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (!form.name || !form.constellation) {
            alert("Datos incompletos")
            return;
        }
        if(form.id === null) {
            createSanto(form)
        } else {
            updateSanto(form)
        }
        handleReset()
    }

    const handleReset = () => {
        setForm(initialForm)
    }

  return (
    <>
      <h3>Agregar</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nombre" onChange={handleChange} value={form.name}/>
        <input type="text" name="constellation" placeholder="constellation" onChange={handleChange} value={form.constellation} />
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </>
  );
};

export default SantosForm;



