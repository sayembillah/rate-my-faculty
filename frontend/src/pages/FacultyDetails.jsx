import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const FacultyDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const faculty = location.state?.faculty;

  if (!faculty) {
    return (
      <div className="max-w-4xl mx-auto p-4">
        <p className="text-red-600">No faculty data available.</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Sticky thin header */}
      <header className="sticky top-0 bg-white border-b border-gray-300 flex items-center justify-between px-4 py-2 z-10">
        <button
          className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300"
          onClick={() => alert("Rate button clicked")}
        >
          Rate
        </button>
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-semibold">{faculty.name}</h1>
          <span className="text-gray-600 font-medium">{faculty.initial}</span>
        </div>
      </header>

      {/* Content below header */}
      <div className="mt-4">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          &larr; Back
        </button>

        <div className="border border-gray-300 rounded p-4">
          <p>
            <strong>Initial:</strong> {faculty.initial}
          </p>
          <p>
            <strong>Gender:</strong> {faculty.gender}
          </p>
          {/* Add more faculty details here as needed */}
        </div>
      </div>
    </div>
  );
};

export default FacultyDetails;
