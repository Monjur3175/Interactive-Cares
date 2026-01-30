import React from "react";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4">
      <h1 className="text-9xl">404</h1>
      <h2 className="text-7xl">Page Not Found</h2>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      <Link to="/">
        Go Home
      </Link>
      </button>
    </div>
  );
}
