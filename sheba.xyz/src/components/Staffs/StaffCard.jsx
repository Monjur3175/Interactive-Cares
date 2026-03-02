import React from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router";

export default function StaffCard({ staff }) {
  const { setStaff } = useAuth();
    const navigate = useNavigate();
  return (
    <div className="bg-gray-50 border hover:border-sky-800 rounded-md shadow-md p-5">
        <div className="h-96">
            <div className="text-center">
        <h3 className="text-lg font-bold">{staff.name}</h3>
        <p className="text-sm text-gray-600">{staff.email}</p>
        <img
          src={staff.image}
          alt={staff.name}
          className="w-24 mx-auto my-2 rounded-full"
        />
        <div className="md:pl-5 md:m-0 mt-5">
          <h2 className="text-xl font-bold">{staff.name}</h2>
          <p className="text-sm text-gray-700 font-bold">{staff.bio}</p>
          <p className="text-xm text-gray-600">{staff.location}</p>
          <p className="text-sm text-gray-800">{staff.rate}</p>
        </div>
      </div>
      <p className="text-justify text-sm line-clamp-2 text-gray-600">
        {staff.details}
      </p>

      <div className="text-xs my-2 text-gray-600 flex start gap-1 flex-wrap items-center h-32 ">
        {staff.services.length > 3 ? (
          <>
            {staff.services.slice(0, 3).map((service) => (
              <p
                key={service._id}
                className="mr-2 p-2 rounded-full border border-gray-700 text-sm text-gray-700"
              >
                {service}
              </p>
            ))}
            <p className="text-sm text-gray-900">
              and {staff.services.length - 3} more.....
            </p>
          </>
        ) : (
          staff.services.map((service) => (
            <p
              key={service._id}
              className="mr-2 p-2 rounded-full border border-gray-700 text-sm text-gray-700"
            >
              {service}
            </p>
          ))
        )}
      </div>
        </div>
      
      <button
        onClick={() => {
          setStaff(staff);
            navigate(`/staff-details/${staff._id}`);
        }}
        className="mt-2 bg-sky-700 text-white px-4 py-2 rounded-md hover:bg-sky-800"
      >
        See Profile
      </button>
    </div>
  );
}
