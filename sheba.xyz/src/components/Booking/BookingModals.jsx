import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";

export default function BookingModal({ isOpen, onClose, children }) {
  const { user, slots, service, staff, slot, setSlot } = useAuth();
  const [bookingError, setBookingError] = useState("");

  function formatTime(timeString) {
    const [hours, minutes] = timeString.split(":");
    const formattedHours = hours % 12 || 12; // convert to 12 hour format
    const period = hours < 12 ? "AM" : "PM";
    return `${formattedHours}:${minutes} ${period}`;
  }

  const bookNow = async () => {
    console.log("We will be doing SSLCommerz Payment Gateway Later");
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-10 transition-opacity duration-300 ease-in-out"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="relative bg-white rounded-lg w-96 mx-auto mt-20 max-h-[80vh] flex flex-col">
        {children}
        
        <div className="p-4 md:p-5 overflow-y-auto">
          <h3 className="text-lg font-semibold mb-4">Select a Time Slot</h3>
          
          <ul className="space-y-2">
            {slots?.map((slot) => (
              <li key={slot._id}>
                <input
                  onChangeCapture={() => setBookingError("")}
                  id={slot._id}
                  type="radio"
                  name="slot"
                  value={slot.label}
                  className="hidden peer"
                  required
                />
                <label
                  htmlFor={slot._id}
                  className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100"
                >
                  <div className="block">
                    <div className="w-full text-lg font-semibold">
                      {slot.label}
                    </div>
                    <div className="w-full text-gray-500 dark:text-gray-400">
                      {formatTime(slot.start_time)} -{" "}
                      {formatTime(slot.end_time)}
                    </div>
                  </div>
                  <svg
                    className="w-4 h-4 ms-3 rtl:rotate-180 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </label>
              </li>
            ))}
          </ul>

          {bookingError && (
            <p className="text-red-500 text-sm mt-2">{bookingError}</p>
          )}
        </div>
        
        <div className="p-4 md:p-5 pt-0 border-t mt-2">
          <button
            id="pay_now"
            onClick={bookNow}
            className="text-white inline-flex w-full justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
}