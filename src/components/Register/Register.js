import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import ButtonFull from "../BtnFull/ButtonFull";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import UserToken from "../UseToken/UseToken";

const Register = () => {
  const { userRegister, loginWithGoogle } = useContext(AuthContext);

  const [createdEmail, setCreatedEmail] = useState("");

  const [token] = UserToken(createdEmail);

  const navigate = useNavigate();

  if (token) {
    console.log(token);
    navigate("/");
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    const email = data.email;
    const password = data.password;
    const name = data.name;
    console.log(email);
    //register user
    userRegister(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        createUser(email, name);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //send user data to db
  const createUser = (email, name) => {
    const userData = { email, name };
    fetch("http://localhost:5000/usersInfo", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("user added successfully");
          setCreatedEmail(email);
        }
        console.log(data);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center mb-3">
          <h1 className="text-5xl font-bold">
            Register <span className="text-accent">now!</span>{" "}
          </h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(handleRegister)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="User name"
                className="input input-bordered"
              />
            </div>
            {errors.name && (
              <p className="text-red-600">name is required...!</p>
            )}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            {errors.email && (
              <p className="text-red-600">Email is required...!</p>
            )}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: "Password is required!",
                  minLength: {
                    value: 6,
                    message: "Password should be 6 characters",
                  },
                  pattern: {
                    value: /(?=.*\d)(?=.*[A-Z])(?=.*[a-z])/,

                    message: "Password must be strong..!",
                  },
                })}
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password && (
                <p className="text-red-600 mt-3">{errors.password?.message}</p>
              )}
              <label className="label">
                <Link to="/login" className="label-text-alt link link-hover">
                  Already have an account?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <ButtonFull>Register</ButtonFull>
            </div>
          </form>
        </div>
        <button
          onClick={loginWithGoogle}
          className="btn rounded-lg btn-dark w-full"
        >
          <FcGoogle className="text-4xl mr-2"></FcGoogle>
          Sign Up with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
