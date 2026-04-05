
export default function StaffReview({staff}) {

  return (
    <div className="mt-5">
      <h2 className="text-xl font-bold mb-3">Reviews for {staff.name}</h2>
      <p className="text-gray-700">No reviews available yet.</p>
    </div>
  )
}
