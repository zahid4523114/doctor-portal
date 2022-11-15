import React, { useState } from "react";
import chair from "../../assets/images/chair.png";
import { format } from "date-fns";

import { DayPicker } from "react-day-picker";

const AppointmentBanner = ({ selected, setSelected }) => {
  return (
    <div className="hero my-10 bg-base-100">
      <div className="hero-content lg:p-16 p-0 lg:flex-row-reverse flex-col">
        <img
          alt=""
          src={chair}
          className="lg:w-1/2 w-full rounded-lg shadow-2xl"
        />
        <div className="rounded-lg shadow-lg mt-4 lg:mt-0 lg:p-4">
          {
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
            />
          }
          {/* <p className="text-xl font-bold">{format(selected, "PP")}</p> */}
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
