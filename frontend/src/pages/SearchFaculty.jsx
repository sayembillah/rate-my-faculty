import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const dummyFaculties = [
  { name: "John Doe", initial: "JD", gender: "Male" },
  { name: "Jane Smith", initial: "JS", gender: "Female" },
  { name: "Alice Johnson", initial: "AJ", gender: "Female" },
  { name: "Bob Brown", initial: "BB", gender: "Male" },
  { name: "Charlie Davis", initial: "CD", gender: "Male" },
  { name: "Diana Evans", initial: "DE", gender: "Female" },
];

const SearchFaculty = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const university = location.state?.university || "Unknown University";
  const universityLocation = "Sample City, Country";

  const [facultyNameSearch, setFacultyNameSearch] = useState("");
  const [facultyInitialSearch, setFacultyInitialSearch] = useState("");

  const [nameSuggestions, setNameSuggestions] = useState([]);
  const [initialSuggestions, setInitialSuggestions] = useState([]);

  const [filteredFaculties, setFilteredFaculties] = useState(dummyFaculties);

  useEffect(() => {
    if (facultyNameSearch.trim() === "") {
      setNameSuggestions([]);
    } else {
      const suggestions = dummyFaculties
        .filter((f) =>
          f.name.toLowerCase().includes(facultyNameSearch.toLowerCase())
        )
        .map((f) => f.name);
      setNameSuggestions(suggestions);
    }
  }, [facultyNameSearch]);

  useEffect(() => {
    if (facultyInitialSearch.trim() === "") {
      setInitialSuggestions([]);
    } else {
      const suggestions = dummyFaculties
        .filter((f) =>
          f.initial.toLowerCase().includes(facultyInitialSearch.toLowerCase())
        )
        .map((f) => f.initial);
      setInitialSuggestions(suggestions);
    }
  }, [facultyInitialSearch]);

  useEffect(() => {
    let filtered = dummyFaculties;

    if (facultyNameSearch.trim() !== "") {
      filtered = filtered.filter((f) =>
        f.name.toLowerCase().includes(facultyNameSearch.toLowerCase())
      );
    }

    if (facultyInitialSearch.trim() !== "") {
      filtered = filtered.filter((f) =>
        f.initial.toLowerCase().includes(facultyInitialSearch.toLowerCase())
      );
    }

    setFilteredFaculties(filtered);
  }, [facultyNameSearch, facultyInitialSearch]);

  const handleNameSuggestionClick = (name) => {
    setFacultyNameSearch(name);
    setNameSuggestions([]);
  };

  const handleInitialSuggestionClick = (initial) => {
    setFacultyInitialSearch(initial);
    setInitialSuggestions([]);
  };

  const handleBack = () => {
    navigate("/");
  };

  const handleViewClick = (faculty) => {
    navigate("/facultydetails", { state: { faculty } });
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <button
        onClick={handleBack}
        className="mb-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
      >
        &larr; Back
      </button>

      <h1 className="text-3xl font-bold mb-1">{university}</h1>
      <p className="text-gray-600 mb-6">{universityLocation}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search faculty by name"
            value={facultyNameSearch}
            onChange={(e) => setFacultyNameSearch(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {nameSuggestions.length > 0 && (
            <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded mt-1 max-h-40 overflow-auto shadow-lg">
              {nameSuggestions.map((name, index) => (
                <li
                  key={index}
                  className="px-3 py-2 cursor-pointer hover:bg-blue-100"
                  onMouseDown={() => handleNameSuggestionClick(name)}
                >
                  {name}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Search faculty by initial"
            value={facultyInitialSearch}
            onChange={(e) => setFacultyInitialSearch(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {initialSuggestions.length > 0 && (
            <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded mt-1 max-h-40 overflow-auto shadow-lg">
              {initialSuggestions.map((initial, index) => (
                <li
                  key={index}
                  className="px-3 py-2 cursor-pointer hover:bg-blue-100"
                  onMouseDown={() => handleInitialSuggestionClick(initial)}
                >
                  {initial}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Faculties</h2>
        {filteredFaculties.length === 0 ? (
          <p>No faculties found.</p>
        ) : (
          <ul className="space-y-3">
            {filteredFaculties.map((faculty, index) => (
              <li
                key={index}
                className="border border-gray-300 rounded p-3 flex justify-between items-center"
              >
                <div>
                  <span className="font-medium">{faculty.name}</span>{" "}
                  <span className="text-gray-600 ml-2">{faculty.initial}</span>{" "}
                  <span className="text-gray-600 ml-2">{faculty.gender}</span>
                </div>
                <button
                  onClick={() => handleViewClick(faculty)}
                  className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300"
                >
                  View
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchFaculty;
