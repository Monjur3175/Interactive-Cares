import React from 'react'

export default function StaffAbout({staff}) {
  return (
    <div className="mt-5">
      <h2 className="text-xl font-bold mb-3">About {staff.name}</h2>
      <p className="text-gray-700">{staff.bio}</p>
    </div>
  )
}
