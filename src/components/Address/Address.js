import React from "react";
import logo1 from "../../assets/icons/clock.svg";
import logo2 from "../../assets/icons/marker.svg";
import logo3 from "../../assets/icons/phone.svg";

const Address = () => {
  const address = [
    {
      id: 1,
      title: "Opening Hours",
      info: "Lorem Ipsum is simply dummy text of the pri",
      logo: logo1,
    },
    {
      id: 2,
      title: "Visit our location",
      info: "Brooklyn, NY 10036, United States",
      logo: logo2,
    },
    {
      id: 3,
      title: "Contact us now",
      info: "+000 123 456789",
      logo: logo3,
    },
  ];
  return (
    <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {address.map((add) => (
        <div
          key={add.id}
          className="card text-white lg:flex lg:flex-row flex-col p-3 m-4 card-side bg-gradient-to-r from-cyan-500 to-blue-500 shadow-xl"
        >
          <figure>
            <img className="w-20" src={add.logo} alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{add.title}</h2>
            <p>{add.info}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Address;
