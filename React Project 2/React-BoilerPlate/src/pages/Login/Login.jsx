import React from "react";
import Navbar from "../../component/Navbar";
import { useForm } from "react-hook-form";
import userData from "../../Data/user.json";
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => processLogin(data);
  const processLogin = (FormData) => {
    
    const fetchData = async () => {
      try {
        const tempUser = userData.find(user => user.email === FormData.email && user.password === FormData.password)||{};
        console.log("Found user:", tempUser);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  };
  return (
    <div className="">
      <Navbar />
      <div className="mx-auto d-block border-2 w-1/3 mt-5 p-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-2">
            <input
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
            type="password"
              className="w-full p-2 border border-emerald-600 focus:border-emerald-800 rounded"
              placeholder="Enter Your Password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-red-800">Password is required</span>
            )}
          </div>

          <input
            className="bg-green-400 hover:bg-green-800 text-white w-full rounded-md py-2"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
}
