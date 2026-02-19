import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import useAuth from "../../hooks/useAuth";

export default function Home() {
  const { user } = useAuth();
  return (
    <div>
      <Navbar/>
      {user?.email ?
      <h1 className="mt-5">Welcome {user.name}</h1>
      :
      <h1 className="mt-5">Homepage</h1>      
      }
    </div>
  );
}