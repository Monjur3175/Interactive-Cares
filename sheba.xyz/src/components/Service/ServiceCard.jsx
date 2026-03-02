import React from "react";
import { Link } from "react-router";
import useAuth from "../../hooks/useAuth";
export default function ServiceCard({ service }) {
  const { Service, setService } = useAuth();
  return (
    <Link to={`/service-details/${service.id}`} onClick={() => setService(service)} className="service-card">
      <h2 className="text-center w-3/4 mx-auto font-bold text-base mt-3">
        {service.name}
      </h2>
      <img
        src={service.image}
        alt={service.name}
        className="w-60 rounded mx-auto shadow"
      />
    </Link>
  );
}
