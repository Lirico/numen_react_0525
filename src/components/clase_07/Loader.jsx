import React from "react";

const Loader = () => {
  return (
    <>
      <div className="lol-spinner-container">
        <div className="lol-spinner"></div>
      </div>

      <style jsx>{`
        .lol-spinner-container {
            align-self: center;
            padding: 1.5rem 0;
        }
      `}</style>
    </>
  );
};

export default Loader;
