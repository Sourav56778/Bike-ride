import { useMemo, useState } from "react";
import ridesData from "../../public/data/rides.js";

import SearchBar from "../components/SearchBar";
import StatusFilter from "../components/StatusFilter";
import RideTable from "../components/RideTable";
import RideDetails from "../components/RideDetails";

const Ridename = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [selectedRide, setSelectedRide] = useState(null);

  const filteredRides = useMemo(() => {
    return ridesData.filter((ride) => {
      // Search Rider Name OR Status
      const searchText = search.toLowerCase();

      const matchesSearch =
        ride.riderName.toLowerCase().includes(searchText) ||
        ride.status.toLowerCase().includes(searchText);

      // Dropdown filter
      const matchesStatus =
        status === "All" || ride.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [search, status]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 px-6 py-5 text-white shadow">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-2xl font-bold">
            Ride Management
          </h1>

          <p className="text-sm text-blue-100">
            Manage all ride records
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        {/* Title */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Ride Records
          </h2>

          <p className="mt-1 text-gray-500">
            Showing {filteredRides.length} rides
          </p>
        </div>

        {/* Search + Status */}
        <div className="mb-6 flex flex-col gap-4 rounded-xl bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
          
          <div className="w-full md:w-96">
            <input
              type="text"
              placeholder="Search rider name or status..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3
                         text-gray-700 outline-none
                         transition focus:border-blue-500
                         focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="rounded-lg border border-gray-300 bg-white
                       px-4 py-3 text-gray-700 outline-none
                       focus:border-blue-500
                       focus:ring-2 focus:ring-blue-200"
          >
            <option value="All">All Status</option>
            <option value="Completed">Completed</option>
            <option value="Ongoing">Ongoing</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>

        {/* Table */}
        <RideTable
          rides={filteredRides}
          onSelectRide={setSelectedRide}
        />

        {/* Details */}
        <RideDetails
          ride={selectedRide}
          onClose={() => setSelectedRide(null)}
        />
      </main>
    </div>
  );
};

export default Ridename;