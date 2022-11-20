import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import AdminEmail from "../components/AdminEmail/AdminEmail";
import { AuthContext } from "../components/AuthProvider/AuthProvider";
import Header from "../components/Header/Header";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [adminEmail] = AdminEmail(user?.email);
  console.log(adminEmail);
  return (
    <div>
      <Header></Header>
      <div className="drawer drawer-mobile">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashBoard">My appointment</Link>
            </li>
            {adminEmail && (
              <li>
                <Link to="/dashBoard/allUsers">All users</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
