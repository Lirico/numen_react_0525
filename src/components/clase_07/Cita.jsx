const Cita = ({ data }) => {
  const { cita, autor, categoria } = data;

  return (
    <>
      <div className="cita">
        <blockquote>
          <i>{cita}</i>
        </blockquote>
        <span>
          - <b>{autor}</b> / {categoria}
        </span>
      </div>
    <style jsx>{`
        .cita {
            padding: 1rem 0;

            & blockquote {
                font-size: 1.2rem;
                padding: 0.5rem 0;
            }
            & span {
                font-size: 1.2rem;
            }
        }
    `}</style>
    </>
  );
};

export default Cita;
