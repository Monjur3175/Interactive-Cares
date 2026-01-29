import React from "react";
import Navbar from "../../component/Navbar";
import useAuth from "../../hooks/useAuth";

export default function Dashboard() {
  const { user, logout } = useAuth();
  return (
    <div>
      <Navbar />
      <h1 className="mt-5">Welcome {user.name}</h1>
      <button className="bg-rose-400 hover:bg-rose-800 text-white rounded-md m-1 p-2" onClick={()=>logout()}>Log Out</button>
    </div>
  );
}
