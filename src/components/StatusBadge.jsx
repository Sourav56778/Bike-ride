import React from 'react'

const StatusBadge = ({ status }) => {
    const styles = {
    Completed: "bg-green-100 text-green-700",
    Ongoing: "bg-yellow-100 text-yellow-700",
    Cancelled: "bg-red-100 text-red-700",
  };
  return (
    <div>
         <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        styles[status]
      }`}
    >
      {status}
    </span>
      
    </div>
  )
}

export default StatusBadge
