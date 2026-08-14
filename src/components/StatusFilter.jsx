import React from 'react'

const StatusFilter = ({ status, setStatus }) => {
  return (
   
       <select
      value={status}
      onChange={(e) => setStatus(e.target.value)}
      className="rounded-lg border border-gray-300 bg-white px-4 py-2.5
                 outline-none focus:border-blue-500 focus:ring-2 
                 focus:ring-blue-200"
    >
      <option value="All">All Status</option>
      <option value="Completed">Completed</option>
      <option value="Ongoing">Ongoing</option>
      <option value="Cancelled">Cancelled</option>
    </select>
   
  )
}

export default StatusFilter
