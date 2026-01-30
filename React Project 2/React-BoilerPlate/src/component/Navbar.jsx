import React from "react";
import { NavLink } from "react-router";
import useAuth from "../hooks/useAuth";

export default function Navbar() {
  const { user } = useAuth();
  return (
    <div className="mt-5">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-white bg-green-500 p-2 m-2 rounded" : " p-2 m-2"
        }
      >
        Home
      </NavLink>

      {user.email ? (
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "text-white bg-green-500 p-2 m-2 rounded" : " p-2 m-2"
          }
        >
          Dashboard
        </NavLink>
      ) : (
        <>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "text-white bg-green-500 p-2 m-2 rounded" : " p-2 m-2"
            }
          >
            login
          </NavLink>
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              isActive ? "text-white bg-green-500 p-2 m-2 rounded" : " p-2 m-2"
            }
          >
            Signup
          </NavLink>
        </>
      )}
    </div>
  );
}
