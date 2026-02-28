import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
export default function SignUp() {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const { user, setUser } = useAuth();
  useEffect(() => {
    user?.email && navigate(from, { replace: true });
  }, [from, navigate, user?.email]);
  const [SignUpError, setSignUpError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => processSignUp(data);
  const processSignUp = (FormData) => {
    const UserData = {
      name: FormData.name,
      email: FormData.email,
      password: FormData.password,
      role: "user",
    };

    const signUpbtn = document.getElementById("SignUpbtn");
    signUpbtn.disabled = true;
    signUpbtn.innerText = "Processing Registration...";

    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(UserData),
        });
        const result = await response.json();
        if (response.status) {
          setUser(result.user);
          setSignUpError("");
          localStorage.setItem("uId", result.user._id);
          result.user.role === "user" && navigate("/services");
          result.user.role === "admin" && navigate("/admin");
        } else {
          setSignUpError(result.message);
          document.getElementById("SignUpForm").reset();
          signUpbtn.disabled = false;
          signUpbtn.innerText = "Sign Up";
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
    console.log(setUser);
  };
  function handleError() {
    setSignUpError("");
  }
  return (
    <div className="">
      <Navbar />
      <div className="mx-auto d-block border-2 w-1/3 mt-5 p-3">
        <form onSubmit={handleSubmit(onSubmit)} id="SignUpForm">
          <div className="my-2">
            <input
              onChangeCapture={handleError}
              type="text"
              autoComplete={`name`}
              className="w-full p-2 border border-emerald-600 focus:border-emerald-800 rounded"
              placeholder="Enter Your Name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-800">Name is required</span>
            )}
          </div>
          <div className="my-2">
            <input
              onChangeCapture={handleError}
              type="text"
              autoComplete={`email`}
              className="w-full p-2 border border-emerald-600 focus:border-emerald-800 rounded"
              placeholder="Enter Your Email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-800">Email is required</span>
            )}
          </div>
          <div className="my-2">
            <input
              onChangeCapture={handleError}
              type="password"
              className="w-full p-2 border border-emerald-600 focus:border-emerald-800 rounded"
              placeholder="Enter Your Password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-red-800">Password is required</span>
            )}
          </div>

          <button
            className="bg-green-400 hover:bg-green-800 text-white w-full rounded-md py-2"
            type="submit"
            id="SignUpbtn"
          >
            Register
          </button>
        </form>
        <p className="text-rose-700 mt-2 font-bold">{SignUpError}</p>
        <p>
          Have an Account{" "}
          <Link to="/login" className="underline">
            Login as User
          </Link>
        </p>
      </div>
    </div>
  );
}
