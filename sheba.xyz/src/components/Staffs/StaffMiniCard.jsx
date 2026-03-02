import React from 'react'

export default function StaffMiniCard({ staff }) {
  return (
    <div className="bg-gray-100 p-4 m-2 rounded shadow">
      <h3 className="text-lg font-bold">{staff.name}</h3>
      <p>{staff.email}</p>
    </div>
  )
}
