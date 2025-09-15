





const Boton = (props) => {
  return (
    <>
        <button>{props.text ? props.text : "Agregar"}</button>

        <style jsx>{`
            button {
                background-color: ${props.bgColor};
                border: none;
                border-radius: 5px;
                box-shadow: 0px 4px 3px -3px gray;
                color: white;
                font-weight: bold;
                padding: 10px 20px;
                text-transform: uppercase;
            }
        `}</style>
    </>
  )
}

export default Boton