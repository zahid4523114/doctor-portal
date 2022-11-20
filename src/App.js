import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppointmentHome from "./components/AppointmentHome/AppointmentHome";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Main from "./layout/Main";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AdminRoute from "./components/AdminRoute/AdminRoute";
import DashBoard from "./components/DashBoard/DashBoard";
import DashboardLayout from "./layout/DashboardLayout";
import AllUsers from "./components/AllUsers/AllUsers";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/appointmentHome",
          element: <AppointmentHome></AppointmentHome>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
      ],
    },
    {
      path: "/dashBoard",
      element: (
        <PrivateRoute>
          <DashboardLayout></DashboardLayout>
        </PrivateRoute>
      ),
      children: [
        {
          path: "/dashBoard",
          element: <DashBoard></DashBoard>,
        },
        {
          path: "/dashBoard/allUsers",
          element: (
            <AdminRoute>
              <AllUsers></AllUsers>
            </AdminRoute>
          ),
        },
      ],
    },
  ]);
  return (
    <div className="max-w-screen-xl	mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
