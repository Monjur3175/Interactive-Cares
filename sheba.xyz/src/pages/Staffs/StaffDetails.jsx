import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import StaffAbout from "../../components/Staffs/StaffAbout";
import StaffReview from "../../components/Staffs/StaffReview";

export default function StaffDetails() {
  const { id } = useParams();
  const { staff, setstaff } = useAuth();
  useEffect(() => {
    if (!staff.name) {
      const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:3000/staffs/${id}`);
          const result = await response.json();
          setstaff(result);
        } catch (error) {
          console.error("Error fetching staff details:", error);
        }
      };
      fetchData();
    }
  }, [id, setstaff, staff.name]);
  const [toggle, setToggle] = useState(false);
  const [tab, setTab] = useState("about");
  const handleToggle = (tabName) => {
    if (tab !== tabName) {
      setToggle(true);
      setTab(tabName);
    }
  };

  useEffect(() => console.log(tab,toggle));

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-20">
        <div className="flex gap-5 items-center justify-center border rounded-md shadow-md p-5">
          <div className="">
            <img
              src={staff.image}
              alt={staff.name}
              className="w-24 rounded-full shadow"
            />
          </div>
          <div className="">
            <h1 className="text-2xl font-bold">{staff.name}</h1>
            <p className="text-sm text-gray-600">{staff.email}</p>
            <p className="text-sm text-gray-700 mt-2">{staff.bio}</p>
            <p className="text-sm text-gray-700 mt-2">{staff.location}</p>
            <p className="text-sm text-gray-700 mt-2">
              {Number(staff.rate).toLocaleString()}
            </p>
          </div>
        </div>

        <div className="mt-5 pt-5 md:pt-0 gap-5 flex items-center justify-center ">
          <button
            onClick={() => handleToggle("about")}
            className={`text-lg font-bold tracking-wide border-b-2 ${toggle && tab === "about" ? "text-amber-500" : "hover:border-red-700"}`}
          >
            About
          </button>
          <button
            onClick={() => handleToggle("reviews")}
            className={`text-lg font-bold tracking-wide border-b-2 ${toggle && tab === "reviews" ? "text-amber-500" : "hover:border-red-700"}`}
          >
            Ratings and Reviews
          </button>
        </div>
        {
          staff.name && ( tab === "about"  && <StaffAbout staff={staff} />  )
        }
        {
          staff.name && ( tab === "reviews"  && <StaffReview staff={staff} />  )
        }
      </div>
    </div>
  );
}
