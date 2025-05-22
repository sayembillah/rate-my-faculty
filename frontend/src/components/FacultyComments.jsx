import React from "react";
import { FaThumbsUp, FaThumbsDown, FaFlag } from "react-icons/fa";

const FacultyComments = () => {
  // Dummy comment data
  const comments = [
    {
      rating: 5,
      course: "BUS201",
      grade: "A+",
      comment: "Great faculty, explains concepts clearly.",
      tags: ["Tough grader", "Explains Good"],
      date: "2024-06-01",
      likes: 12,
      dislikes: 1,
    },
    {
      rating: 4,
      course: "BUS203",
      grade: "B",
      comment: "Helpful and approachable.",
      tags: ["Helpful", "Clear explanations"],
      date: "2024-05-20",
      likes: 8,
      dislikes: 0,
    },
    {
      rating: 4,
      course: "BUS203",
      grade: "B",
      comment: "Helpful and approachable.",
      tags: ["Helpful", "Clear explanations"],
      date: "2024-05-20",
      likes: 8,
      dislikes: 0,
    },
  ];

  return (
    <div className="space-y-4">
      {comments.map((c, index) => (
        <div
          key={index}
          className="flex justify-between p-4 shadow-md rounded bg-white"
        >
          {/* Left side */}
          <div className="flex flex-col space-y-1 max-w-[70%]">
            <div className="text-xl font-bold">Rating: {c.rating}</div>
            <div className="text-lg font-semibold">
              {c.course}, received grade: {c.grade}
            </div>
            <p>{c.comment}</p>
            <div className="flex space-x-2">
              {c.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right side */}
          <div className="flex flex-col items-end space-y-2 text-gray-600 text-sm">
            <div>{new Date(c.date).toLocaleDateString()}</div>
            <div className="flex space-x-3">
              <button
                aria-label="Like"
                className="flex items-center space-x-1 hover:text-blue-600"
              >
                <FaThumbsUp />
                <span>{c.likes}</span>
              </button>
              <button
                aria-label="Dislike"
                className="flex items-center space-x-1 hover:text-red-600"
              >
                <FaThumbsDown />
                <span>{c.dislikes}</span>
              </button>
              <button
                aria-label="Report"
                className="hover:text-yellow-600"
                title="Report comment"
              >
                <FaFlag />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FacultyComments;
