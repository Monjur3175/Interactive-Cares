import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import useAuth from "../../hooks/useAuth";
import Skeleton from "../../components/Skeleton/Skeleton";
import ServiceCard from "../../components/Service/ServiceCard";
export default function Services() {
  const { services, categories } = useAuth();
  console.log(services, categories);
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-2">
        <h1 className="text-3xl font-bold text-center my-5">
          Sheba.xyz Services
        </h1>
        {categories.length > 0 && services.length > 0 ? (
          categories.map((category) => (
            <div key={category._id} className="my-10">
              <div className="w-full">
                <h2 className="text-xl font-semibold my-5">{category.name}</h2>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"></div>
                {services
                  .filter((service) => service.category === category.name)
                  .map((service) => (
                    <ServiceCard key={service._id} service={service} />
                  ))}
              </div>
            </div>
          ))
        ) : (
          <Skeleton />
        )}
      </div>
    </div>
  );
}
