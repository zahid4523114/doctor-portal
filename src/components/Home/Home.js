import React from "react";
import Address from "../Address/Address";
import Appointment from "../Appointment/Appointment";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import ExceptionalCare from "../ExceptionalCare/ExceptionalCare";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Address></Address>
      <Services></Services>
      <ExceptionalCare></ExceptionalCare>
      <Appointment></Appointment>
      <Testimonial></Testimonial>
      <Contact></Contact>
    </div>
  );
};

export default Home;
