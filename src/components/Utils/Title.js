import React from "react";

export default ({title, desc, color}) => {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-5">
        <div className="main_title">
          <h2 className="mb-3" style={{ color: `${color}`}}>{title}</h2>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};
