import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

// Sample list of universities used for search suggestions
const universities = [
  "Harvard University",
  "Stanford University",
  "Massachusetts Institute of Technology",
  "University of California, Berkeley",
  "University of Oxford",
  "University of Cambridge",
  "California Institute of Technology",
  "Princeton University",
  "Yale University",
  "Columbia University",
];

// Navbar component renders the top navigation bar with a search input and sign in/up buttons
const Navbar = () => {
  // State to store the current value of the search input
  const [searchTerm, setSearchTerm] = useState("");
  // State to store the filtered list of university suggestions based on search input
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  // State to control whether the suggestions dropdown is visible
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Handles changes in the search input field
  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value); // Update the search term state with the input value

    if (value.length > 0) {
      // Filter universities that include the search term (case-insensitive)
      const filtered = universities.filter((uni) =>
        uni.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered); // Update suggestions list
      setShowSuggestions(true); // Show the suggestions dropdown
    } else {
      // If input is empty, hide suggestions and clear the list
      setShowSuggestions(false);
      setFilteredSuggestions([]);
    }
  };

  // Handles clicking on a suggestion from the dropdown
  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion); // Set the search input to the clicked suggestion
    setShowSuggestions(false); // Hide the suggestions dropdown
  };

  return (
    <nav className="bg-white shadow-md px-6 py-3 flex flex-col sm:flex-row items-center justify-between flex-wrap">
      {/* Left: Site Title */}
      <div className="flex items-center flex-shrink-0 text-blue-600 mb-3 sm:mb-0 mr-0 sm:mr-6 text-xl font-bold">
        Rate My Faculty
      </div>

      {/* Center: Search Bar */}
      <div className="relative flex-grow max-w-lg mx-0 sm:mx-4 w-full sm:w-auto mb-3 sm:mb-0">
        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
          <input
            type="text"
            className="flex-grow px-4 py-2 focus:outline-none"
            placeholder="Search University"
            value={searchTerm}
            onChange={handleChange} // Update search term and suggestions on input change
            onFocus={() => {
              // Show suggestions dropdown if there are filtered suggestions when input is focused
              if (filteredSuggestions.length > 0) setShowSuggestions(true);
            }}
            onBlur={() => {
              // Delay hiding suggestions to allow click on suggestion before dropdown disappears
              setTimeout(() => setShowSuggestions(false), 100);
            }}
          />
          <div className="px-3 text-gray-500">
            <FaSearch />
          </div>
        </div>
        {/* Suggestions dropdown list */}
        {showSuggestions && filteredSuggestions.length > 0 && (
          <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-48 overflow-auto shadow-lg">
            {filteredSuggestions.map((suggestion, index) => (
              <li
                key={index}
                className="px-4 py-2 cursor-pointer hover:bg-blue-100"
                onMouseDown={() => handleSuggestionClick(suggestion)} // Handle suggestion click
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Right: Sign In / Sign Up buttons */}
      <div className="flex items-center space-x-4 w-full sm:w-auto justify-center sm:justify-start">
        <Link
          to="/signin"
          className="font-semibold px-4 py-2 rounded-md bg-gradient-to-r from-indigo-500 to-blue-500 text-white hover:from-indigo-600 hover:to-blue-600 transition-colors duration-300"
        >
          Sign In
        </Link>
        <Link
          to="/signup"
          className="font-semibold px-4 py-2 rounded-md bg-gradient-to-r from-indigo-500 to-blue-500 text-white hover:from-indigo-600 hover:to-blue-600 transition-colors duration-300"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
