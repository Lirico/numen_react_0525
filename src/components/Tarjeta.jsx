import Boton from "./Boton";

const Tarjeta = (props) => {

  return (
    <>
      <div className="card">
        <img src={props.destino.image} alt="" />
        <div className="description">
          <h3>{props.destino.title}</h3>
          <p>{props.destino.description}</p>
        </div>
        <Boton bgColor={props.destino.bgColor} />
      </div>

      <style jsx>{`
        .card {
          align-items: center;
          border-radius: 20px;
          box-shadow: 0px 3px 8px -3px gray;
          display: flex;
          flex-direction: column;
          width: 275px;
          padding-bottom: 10px;
        }
        img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        .description {
          padding: 5%;
        }
        h3 {
          font-size: 2rem;
        }
        h3,
        p {
          text-align: center;
          line-height: 1;
        }
      `}</style>
    </>
  );
};

export default Tarjeta;
