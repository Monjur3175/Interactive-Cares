import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
export default function Login() {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const { user, setUser } = useAuth();
  useEffect(() => {
    user?.email && navigate(from, { replace: true });
  }, [from, navigate, user?.email]);
  const [LoginError, setLoginError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => processLogin(data);
  const processLogin = async (FormData) => {
    const loginBtn = document.getElementById("loginBtn");
    loginBtn.disabled = true;
    loginBtn.innerText = "Processing Login...";

    try {
      const response = await fetch(
        `http://localhost:3000/users?email=${FormData.email}&password=${FormData.password}`,
      );

      const users = await response.json();

      if (users.length > 0) {
        const loggedUser = users[0];

        setUser(loggedUser);
        setLoginError("");
        localStorage.setItem("uId", loggedUser.id);

        if (loggedUser.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/services");
        }
      } else {
        setLoginError("Invalid email or password");
        document.getElementById("loginForm").reset();
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setLoginError("Something went wrong");
    }

    loginBtn.disabled = false;
    loginBtn.innerText = "Login";
  };

  //THis is for real API
  // const processLogin = (FormData) => {
  //   const loginBtn = document.getElementById("loginBtn");
  //   loginBtn.disabled = true;
  //   loginBtn.innerText = "Processing Login...";

  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(`sheba-xyz-backend.onrender.com/login`, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(FormData),
  //       });
  //       const result = await response.json();
  //       if (response.status) {
  //         setUser(result.user);
  //         setLoginError("");
  //         localStorage.setItem("uId", result.user._id);
  //         result.user.role === "user" && navigate("/services");
  //         result.user.role === "admin" && navigate("/admin");
  //       } else {
  //         setLoginError(result.message);
  //         document.getElementById("loginForm").reset();
  //         loginBtn.disabled = false;
  //         loginBtn.innerText = "Login";
  //       }
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //     }
  //   };
  //   fetchData();
  // };
  function handleError() {
    setLoginError("");
  }
  return (
    <div className="">
      <Navbar />
      <div className="mx-auto d-block border-2 w-1/3 mt-5 p-3">
        <form onSubmit={handleSubmit(onSubmit)} id="loginForm">
          <div className="my-2">
            <input
              onChangeCapture={handleError}
              type="text"
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
            id="loginBtn"
          >
            Login
          </button>
        </form>
        <p className="text-rose-700 mt-2 font-bold">{LoginError}</p>
        <p>
          Don't Have an Account{" "}
          <Link to="/signup" className="underline">
            Register as User
          </Link>
        </p>
      </div>
    </div>
  );
}
