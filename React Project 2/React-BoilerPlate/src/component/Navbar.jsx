import React from "react";
import { NavLink } from "react-router";

export default function Navbar() {
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
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive ? "text-white bg-green-500 p-2 m-2 rounded" : " p-2 m-2"
        }
      >
        Dashboard
      </NavLink>
    </div>
  );
}
