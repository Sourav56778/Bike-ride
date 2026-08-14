import React from 'react'
import StatusBadge from './StatusBadge';

const RideDetails = ({ ride, onClose }) => {
if (!ride) return null;
  const Detail = ({ label, value }) => (
  <div>
    <p className="text-sm text-gray-500">{label}</p>
    <p className="mt-1 font-semibold text-gray-800">{value}</p>
  </div>
);
  return (
    
       <div
      className="fixed inset-0 z-50 flex items-center justify-center 
                 bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-800">
            Ride Details
          </h2>

          <button
            onClick={onClose}
            className="text-2xl text-gray-400 hover:text-gray-700"
          >
            ×
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Detail label="Rider Name" value={ride.riderName} />
          <Detail label="Driver Name" value={ride.driverName} />
          <Detail label="Vehicle Number" value={ride.vehicleNumber} />

          <div>
            <p className="text-sm text-gray-500">Status</p>
            <div className="mt-1">
              <StatusBadge status={ride.status} />
            </div>
          </div>

          <Detail label="Fare" value={`₹${ride.fare}`} />
          <Detail label="Date" value={ride.date} />
          <Detail label="Pickup" value={ride.pickup} />
          <Detail label="Destination" value={ride.destination} />
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full rounded-lg bg-blue-600 py-3 
                     font-semibold text-white transition hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
    
  )
}

export default RideDetails
