import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const DashBoard = () => {
  const { user } = useContext(AuthContext);
  //user query to get data from db
  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/bookings?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("user-token")}`,
          },
        }
      );
      const data = res.json();
      return data;
    },
  });
  console.log(bookings);
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Treatment</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {bookings &&
            bookings?.map((book, i) => (
              <tr className="hover">
                <th>{i + 1}</th>
                <td>{book.patient}</td>
                <td>{book.treatmentName}</td>
                <td>{book.date}</td>
                <td>{book.slot}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashBoard;
