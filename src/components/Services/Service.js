import React from "react";

const Service = ({ service }) => {
  const { title, img, info } = service;
  return (
    <div className="card m-5 lg:m-0  bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-2xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{info}</p>
      </div>
    </div>
  );
};

export default Service;
