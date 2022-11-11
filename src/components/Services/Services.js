import React from "react";
import Fluoride from "../../assets/images/fluoride.png";
import Cavity from "../../assets/images/cavity.png";
import Teeth from "../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
  const services = [
    {
      _id: 1,
      img: Fluoride,
      title: "Fluoride Treatment",
      info: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      _id: 2,
      img: Cavity,
      title: "Cavity Filling",
      info: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      _id: 3,
      img: Teeth,
      title: "Teeth Whitening",
      info: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
  ];
  return (
    <section className="my-10">
      <div className="text-center">
        <h4 className="text-primary font-bold">OUR SERVICES</h4>
        <h1 className="lg:text-4xl md:text-4xl text-3xl">
          Services We Provide
        </h1>
      </div>
      <div className="grid gap-9 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5">
        {services.map((s) => (
          <Service key={s._id} service={s}></Service>
        ))}
      </div>
    </section>
  );
};

export default Services;
