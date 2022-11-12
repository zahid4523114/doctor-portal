import React from "react";
import Button from "../Button/Button";

const Contact = () => {
  return (
    <section className="text-center mt-20">
      <div>
        <h4 className="text-primary font-bold">Contact Us</h4>
        <h1 className="text-2xl lg:text-4xl ">Stay connected with us</h1>
      </div>
      <div className="mx-auto flex flex-col items-center my-10 w-9/12">
        <input
          type="text"
          placeholder="Email address"
          className="input  input-bordered input-sm w-full mt-4 "
        />
        <input
          type="text"
          placeholder="Subject"
          className="input  input-bordered input-sm w-full mt-4 "
        />
        <textarea
          className="textarea textarea-bordered w-full my-4 h-24"
          placeholder="Your message"
        ></textarea>
        <Button>Submit</Button>
      </div>
    </section>
  );
};

export default Contact;
