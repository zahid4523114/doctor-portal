import React, { useState } from "react";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import AppointmentOption from "../AppointmentOption/AppointmentOption";

const AppointmentHome = () => {
  const [selected, setSelected] = useState(new Date());

  return (
    <div>
      <AppointmentBanner
        selected={selected}
        setSelected={setSelected}
      ></AppointmentBanner>
      <AppointmentOption selected={selected}></AppointmentOption>
    </div>
  );
};

export default AppointmentHome;
