import React from "react";
import doctor from "../../assets/images/doctor-small.png";
import Button from "../Button/Button";

const Appointment = () => {
  return (
    <div className="hero  my-20 bg-base-200 rounded-xl">
      <div className="hero-content flex-col lg:flex-row">
        <img
          alt=""
          src={doctor}
          className="lg:w-1/2 -mt-20 rounded-lg shadow-2xl"
        />
        <div>
          <h4 className="text-primary font-bold">Appointment</h4>
          <h1 className="text-5xl font-bold">Make an appointment Today</h1>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
