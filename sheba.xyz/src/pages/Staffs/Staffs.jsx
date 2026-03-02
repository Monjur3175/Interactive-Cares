import React from 'react'
import useAuth from '../../hooks/useAuth';
import Navbar from '../../components/Navbar/Navbar';
import StaffCard from '../../components/Staffs/StaffCard';

export default function Staffs() {
  const { staffs } = useAuth();
  return (
    <div className="container mx-auto my-10">
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {staffs.map((staff) => (
          <StaffCard key={staff._id} staff={staff} />
        ))}
      </div>
    </div>
  )
}
