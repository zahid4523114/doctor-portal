import { format } from "date-fns/esm";
import React from "react";

const BookingModal = ({ treatment, setTreatment, selected }) => {
  const { name, slots } = treatment;
  const date = format(selected, "PP");
  const handleModalInput = (event) => {
    event.preventDefault();
    const form = event.target;
    const date = form.date.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const patientData = {
      patient: name,
      date,
      email,
      phone,
    };
    console.log(patientData);
    setTreatment(null);
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form onSubmit={handleModalInput}>
            <input
              disabled
              name="date"
              type="text"
              value={date}
              placeholder="Type here"
              className=" input-bordered my-3 input w-full "
            />

            {/* select date option */}
            <select className="select select-bordered w-full ">
              {slots.map((slot) => (
                <option value={slot} selected>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              placeholder="Full name"
              className=" input-bordered my-3 input w-full "
            />
            <input
              name="email"
              type="email"
              placeholder="Email address"
              className=" input-bordered my-3 input w-full "
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone"
              className=" input-bordered my-3 input w-full "
            />
            <button className="btn btn-accent w-full">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
