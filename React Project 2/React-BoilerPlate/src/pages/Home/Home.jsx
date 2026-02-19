import React from "react";
import Navbar from "../../component/Navbar";
import useAuth from "../../hooks/useAuth";

export default function Home() {
  const { user } = useAuth();
  return (
    <div>
      Homepage
    </div>
  );
}