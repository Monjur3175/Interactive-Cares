import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import StaffMiniCard from "../../components/Staffs/StaffMiniCard";

export default function ServiceDetails() {
  const { id } = useParams();
  const { user, staffs, Service, setService } = useAuth();

  useEffect(() => {
    if (!Service.name) {
      const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:3000/services/${id}`);
          const result = await response.json();
          setService(result);
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }
  }, [id, setService, Service.name]);
  return (
    <div>
      <Navbar />
      <div className="container mx-auto my-10">
        <h1 className="text-xl lg:text-3xl my-5 lg:my-10 font-bold text-center">
          {Service.name}
        </h1>
        <img
          src={Service.image}
          alt={Service.name}
          className="w-full max-w-md mx-auto my-5 rounded shadow"
        />
        <h2 className="text-xl font-bold text-center">{Service.category}</h2>
        <p className="text-justify px-12 mt-5">
          {Service.description}
        </p>
        {user.role !== "admin" && user.role !== "staff" && (
          <div className="text-center mt-5">
            <h2 className="text-xl font-bold">Service Providers:</h2>
            {staffs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
                {staffs.map(
                  (staff) =>
                    <StaffMiniCard key={staff._id} staff={staff} />
                )}
              </div>
            ) : (
              <p className="mt-5 text-center text-gray-500">
                No Staffs Found for this service.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
