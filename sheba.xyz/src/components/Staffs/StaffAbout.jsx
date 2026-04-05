import React from "react";
import useAuth from "../../hooks/useAuth";

export default function StaffAbout({ staff }) {
  const { services, slots } = useAuth();
  console.log(services, slots, staff);
  const staffCategories = staff.services.map(
    (serviceName) =>
      (services.find((service) => service.name === serviceName) || {})
        .category || "No Category Found",
  );
  console.log(staffCategories);

  const uniquecategories = [...new Set(staffCategories)];

  function formatTime(timeString) {
    const [hours, minutes] = timeString.split(":");
    const formattedHours = hours % 12 || 12;
    const period = hours < 12 ? "AM" : "PM";
    return `${formattedHours}:${minutes}${period}`;
  }

  return (
    <div className="py-10 bg-[#f9f9f8]">
      <div className="container mx-auto p-2">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="">
            <div className="border rounder-md bg-white p-5 w-full md:w-11/12">
              <h2 className="text-xl font-bold">Policies</h2>
              <div className="ms-3 mt-5">
                <p className="text-sm text-gray-500">From</p>
                <p className="mt-1 text-sm">{staff.location}</p>
              </div>
              <div className="ms-3 mt-5">
                <p className="text-sm text-gray-500">Service Rate</p>
                <p className="mt-1 text-sm">${Number(staff.rate).toLocaleString()}</p>
              </div>
            </div>

            <div className="border rounder-md ng-white mt-5 p-5 w-full md:w-11/12">
              <h2 className="text-xl font-bold">Service Slots</h2>
              <div className="divide-y divide-slate-200 mt-5">
                {slots.length > 0 &&
                  slots.map((slot) => (
                    <div
                      key={slot._id}
                      className="grid grid-cols-2 items-center content-between"
                    >
                      <div className="text-sm py-2 text-gray-500">
                        {slot.label}
                      </div>
                      <div className="text-sm py-2 text-gray-500 text-end">
                        {formatTime(slot.start_time)} -{" "}
                        {formatTime(slot.end_time)}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="pt-5 md:pt-0">
            <h2 className="text-xl font-bold">Staff Information</h2>
            <p className="text-justify text-sm leading-6 text-gray-500 mt-3">
              {staff.details}
            </p>
            <div className="border rounded-md bg-white mt-5 p-5">
              <h2 className="text-xl font-bold">Categories</h2>
              <div className="mt-5 flex flex-wrap gap-2"></div>
              {uniquecategories.map((category) => (
                <p className="text-sm mr-2 p-2 rounded-full border border-gray-300">
                  {category}
                </p>
              ))}
            </div>
            <div className="border rounded-md bg-white mt-5 p-5">
              <h2 className="text-xl font-bold">Services</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {staff.services.map((service) => (
                <p key={service} className="text-sm mr-2 p-2 rounded-full border border-gray-300">
                  {service}
                </p>
              ))}
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
