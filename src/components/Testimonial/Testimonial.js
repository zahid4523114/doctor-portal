import React from "react";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import quote from "../../assets/icons/quote.svg";

const Testimonial = () => {
  const testimonial = [
    {
      id: 1,
      img: people1,
      city: "California",
      name: "Winson Herry",
      info: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      id: 2,
      img: people2,
      city: "California",
      name: "Winson Herry",
      info: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      id: 3,
      img: people3,
      city: "California",
      name: "Winson Herry",
      info: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
  ];
  return (
    <section>
      <div className="flex justify-between m-9 items-center">
        <div>
          <h4 className="text-primary font-bold">Testimonial</h4>
          <h1 className="lg:text-4xl text-2xl">What Our Patients Says</h1>
        </div>
        <div>
          <img className="w-24 lg:w-48" src={quote} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:m-0 m-4 gap-6 lg:grid-cols-3 md:grid-cols-2 my-10">
        {testimonial.map((t) => (
          <div key={t.id} className="card bg-base-100 p-3 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{t.name}</h2>
              <p>{t.info}</p>
            </div>
            <figure>
              <img src={t.img} alt="Shoes" />
            </figure>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
