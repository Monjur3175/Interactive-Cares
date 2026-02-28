import React from "react";

export default function ServiceCard({ service }) {
  return (
    <div>
      <h2 className="text-center w-3/4 mx-auto font-bold text-base mt-3">
        {service.name}
      </h2>
      <img
        src={service.image}
        alt={service.name}
        className="w-60 rounded mx-auto shadow"
      />
    </div>
  );
}
