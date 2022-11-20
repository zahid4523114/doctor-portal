import { format } from "date-fns/esm";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../AuthProvider/AuthProvider";

const BookingModal = ({ treatment, setTreatment, selected, refetch }) => {
  const { user } = useContext(AuthContext);
  const { name, slots } = treatment;
  const date = format(selected, "PP");
  const treatmentName = name;
  const handleModalInput = (event) => {
    event.preventDefault();
    const form = event.target;
    const date = form.date.value;
    const name = form.name.value;
    const email = form.email.value;
    const slot = form.slot.value;
    const phone = form.phone.value;
    const patientData = {
      treatmentName,
      patient: name,
      date,
      email,
      phone,
      slot,
    };
    console.log(slot);
    //
    fetch(`http://localhost:5000/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(patientData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Booking added..!");
          setTreatment(null);
          refetch();
        } else {
          toast.error(data.message);
        }
      });
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
            <select name="slot" className="select select-bordered w-full ">
              {slots.map((slot) => (
                <option value={slot} selected>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              defaultValue={user?.displayName}
              type="text"
              placeholder="Full name"
              className=" input-bordered my-3 input w-full "
            />
            <input
              disabled
              name="email"
              defaultValue={user?.email}
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
