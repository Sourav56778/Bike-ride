import React from 'react'
import StatusBadge from './StatusBadge'

const RideTable = ({ rides, onSelectRide }) => {
  return (
    <div className="overflow-x-auto rounded-xl bg-white shadow-md">
      <table className="w-full min-w-[900px] text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-4 text-sm font-semibold text-gray-600">
              Rider Name
            </th>

            <th className="px-6 py-4 text-sm font-semibold text-gray-600">
              Driver Name
            </th>

            <th className="px-6 py-4 text-sm font-semibold text-gray-600">
              Vehicle Number
            </th>

            <th className="px-6 py-4 text-sm font-semibold text-gray-600">
              Status
            </th>

            <th className="px-6 py-4 text-sm font-semibold text-gray-600">
              Fare
            </th>

            <th className="px-6 py-4 text-sm font-semibold text-gray-600">
              Date
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100">
          {rides.map((ride) => (
            <tr
              key={ride.id}
              onClick={() => onSelectRide(ride)}
              className="cursor-pointer transition hover:bg-blue-50"
            >
              <td className="px-6 py-4 font-medium text-gray-800">
                {ride.riderName}
              </td>

              <td className="px-6 py-4 text-gray-600">
                {ride.driverName}
              </td>

              <td className="px-6 py-4 text-gray-600">
                {ride.vehicleNumber}
              </td>

              <td className="px-6 py-4">
                <StatusBadge status={ride.status} />
              </td>

              <td className="px-6 py-4 font-semibold text-gray-800">
                ₹{ride.fare}
              </td>

              <td className="px-6 py-4 text-gray-600">
                {ride.date}
              </td>
            </tr>
          ))}

          {rides.length === 0 && (
            <tr>
              <td
                colSpan="6"
                className="px-6 py-10 text-center text-gray-500"
              >
                No rides found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default RideTable
