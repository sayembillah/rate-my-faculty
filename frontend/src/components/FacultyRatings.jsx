import React from "react";
import FacultyComments from "./FacultyComments";

const FacultyRatings = () => {
  // Dummy data for demonstration
  const overallRating = 4;
  const maxRating = 5;
  const universityName = "Sample University";
  const departmentName = "Business Department";
  const taughtCourses = ["BUS202", "BUS203"];
  const wouldTakeAgainPercent = 85; // percentage
  const levelOfDifficulty = "5 out of 4";

  const ratingDistribution = {
    Awesome: 5,
    Great: 2,
    Good: 4,
    Bad: 1,
    Awful: 0,
  };

  return (
    <div className="max-w-4xl mx-auto p-4 border border-gray-300 rounded">
      <div className="flex flex-col md:flex-row justify-between mb-6">
        {/* Left side */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-lg font-semibold mb-2">
            Overall Quality Based on Ratings:
          </h2>
          <div className="text-5xl font-bold mb-2">
            {overallRating}/{maxRating}
          </div>
          <div className="mb-1">
            <strong>University name:</strong> {universityName}
          </div>
          <div className="mb-1">
            <strong>Department name:</strong> {departmentName}
          </div>
          <div className="mb-1">
            <strong>Taught Courses:</strong> {taughtCourses.join(", ")}
          </div>
          <div className="mb-1">
            <strong>Would take again?</strong> {wouldTakeAgainPercent}%
          </div>
          <div className="mb-1">
            <strong>Level of difficulty:</strong> {levelOfDifficulty}
          </div>
        </div>

        {/* Right side */}
        <div className="md:w-1/2">
          <h2 className="text-lg font-semibold mb-2">Rating Distribution:</h2>
          <ul>
            {Object.entries(ratingDistribution).map(([key, value]) => (
              <li key={key} className="mb-1">
                <strong>{key}:</strong> {value}{" "}
                {value === 1 ? "person said" : "people said"}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mount FacultyComments component */}
      <FacultyComments />
    </div>
  );
};

export default FacultyRatings;
