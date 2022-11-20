import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllUsers = () => {
  const { data: userInfo = [], refetch } = useQuery({
    queryKey: ["userInfo"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/userInfo`);
      const data = res.json();
      return data;
    },
  });
  // console.log(userInfo);

  const handleAdminAdding = (id) => {
    fetch(`http://localhost:5000/userInfo/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("user-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Admin  make successfully");
          refetch();
        }
      });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Admin</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {userInfo &&
            userInfo?.map((user, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user?.role !== "admin" && (
                    <button
                      onClick={() => handleAdminAdding(user._id)}
                      className="btn btn-success btn-xs text-white"
                    >
                      Make admin
                    </button>
                  )}
                </td>
                <td>
                  <button className="btn text-white btn-xs btn-warning">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
