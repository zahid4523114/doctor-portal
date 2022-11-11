import React from "react";
import Address from "../Address/Address";
import Appointment from "../Appointment/Appointment";
import Banner from "../Banner/Banner";
import ExceptionalCare from "../ExceptionalCare/ExceptionalCare";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Address></Address>
      <Services></Services>
      <ExceptionalCare></ExceptionalCare>
      <Appointment></Appointment>
    </div>
  );
};

export default Home;
