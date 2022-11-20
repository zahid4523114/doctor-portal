import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "../BookingModal/BookingModal";
import Button from "../Button/Button";
import { useQuery } from "@tanstack/react-query";

const AppointmentOption = ({ selected }) => {
  // const [options, setOptions] = useState([]);
  const date = format(selected, "PP");
  const { data: appointmentOptions = [], refetch } = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/appointmentOptions?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });

  // useEffect(() => {
  //   fetch(`http://localhost:5000/appointmentOptions`)
  //     .then((res) => res.json())
  //     .then((data) => setOptions(data));
  // }, []);

  const [treatment, setTreatment] = useState(null);
  return (
    <section className="my-10">
      <p className="text-primary my-5 text-center font-bold text-xl">
        Available Appointments on {format(selected, "PP")}
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 ">
        {appointmentOptions.map((option) => (
          <div
            key={option._id}
            className="card text-center bg-base-100 shadow-xl"
          >
            <div className="card-body">
              <h2 className="text-2xl">{option.name}</h2>
              <p>{option.slots ? option.slots[0] : "Try another day..!"}</p>
              <p>
                {option.slots.length > 0
                  ? option.slots.length +
                    ` ${option.slots.length > 0 ? "places" : "place"} available`
                  : option.slots.length +
                    ` ${
                      option.slots.length > 0 ? "places" : "place"
                    } available`}
              </p>
              <div className="card-actions justify-center">
                <Button>
                  <label
                    onClick={() => setTreatment(option)}
                    htmlFor="booking-modal"
                  >
                    Book Appointment
                  </label>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {treatment && (
        <BookingModal
          refetch={refetch}
          selected={selected}
          treatment={treatment}
          setTreatment={setTreatment}
        ></BookingModal>
      )}
    </section>
  );
};

export default AppointmentOption;
