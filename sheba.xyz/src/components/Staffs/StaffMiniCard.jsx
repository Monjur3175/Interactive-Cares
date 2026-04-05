import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import BookingModals from "../Booking/BookingModals";
export default function StaffMiniCard({ staff }) {
  const { setStaff, setSlots } = useAuth();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const OpenModal = () => {
    setIsModalOpen(true);
    setStaff(staff);
  };
  const CloseModal = () => {
    setIsModalOpen(false);
    setStaff(staff);
    setSlots({});
  };
  return (
    <div className="bg-gray-50 border hover:border-sky-800 rounded-md shadow-md p-2">
      <div className="item-center">
        <img
          src={staff.image}
          alt={staff.name}
          className="w-16 mx-auto rounded-full"
        />

        <div className="mt-3">
          <h2 className="text-center font-bold">{staff.name}</h2>
          <h2 className="text-center text-sm py-1 line-clamp-1">{staff.bio}</h2>
          <h3 className="text-center text-sm text-gray-800">
            ${Number(staff.rate).toLocaleString()}
          </h3>
        </div>

        <div className="flex lg:block xl:flex items-center justify-between mt-3">
          <button onClick={OpenModal} className="bg-green-800 hover:bg-green-900 text-white py-2 px-3 rounded-full text-xs my-2">
            Book Now
          </button>
          <button
            onClick={() => {
              setStaff(staff);
              navigate(`/staff-details/${staff._id}`);
            }}
            className="bg-sky-800 hover:bg-sky-900 text-white py-2 px-3 rounded-full text-xs my-2"
          >
            View Full Profile
          </button>
        </div>
      </div>
      <BookingModals isOpen={isModalOpen} onClose={CloseModal}>
        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
          <h3 className="text-lg font-semibold text-gray-900">
            Available Service Slots
          </h3>
        </div>
      </BookingModals>
    </div>
  );
}
