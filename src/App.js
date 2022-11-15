import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppointmentBanner from "./components/AppointmentBanner/AppointmentBanner";
import AppointmentHome from "./components/AppointmentHome/AppointmentHome";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Main from "./layout/Main";

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
  ]);
  return (
    <div className="max-w-screen-xl	mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
