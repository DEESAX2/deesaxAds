import React, { useState } from "react";
import axios from "axios";

// Helper to highlight matches
function highlightMatch(text, query) {
  if (!query) return text;
  const regex = new RegExp(`(${query})`, "gi");
  return text.split(regex).map((part, i) =>
    regex.test(part) ? (
      <span key={i} className="bg-yellow-200 font-bold">{part}</span>
    ) : (
      part
    )
  );
}

export default function FilterSearch() {
  const [filters, setFilters] = useState({
    title: "",
    category: "",
    location: "",
  });
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const params = {};
      if (filters.title) params.title = filters.title;
      if (filters.category) params.category = filters.category;
      if (filters.location) params.location = filters.location;

      const response = await axios.get(
        "https://ad-api-y20z.onrender.com/api/v1/filtered/adverts",
        { params }
      );
      setResults(response.data);
    } catch (error) {
      console.error("Search failed", error);
    }
  };

  return (
    <section className="bg-button1 py-8 px-4 md:px-12 shadow-md rounded-xl max-w-5xl mx-auto mt-10">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <input
          type="text"
          name="title"
          placeholder="Search service or keywords"
          value={filters.title}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-button3 focus:outline-none"
        />
        <select
          name="category"
          value={filters.category}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-700 focus:ring-button3 focus:outline-none"
        >
          <option value="">All Categories</option>
          <option value="Tech & Programming">Tech & Programming</option>
          <option value="Artisans">Artisans</option>
          <option value="Education & Training">Education & Training</option>
          <option value="Food & Beverages">Food & Beverages</option>
          <option value="Health & Wellness">Health & Wellness</option>
        </select>
        <input
          type="text"
          name="location"
          placeholder="Enter location"
          value={filters.location}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-button3 focus:outline-none"
        />
        <button
          type="submit"
          className="flex items-center justify-center bg-button3 text-white rounded-md px-4 py-2 text-sm hover:bg-button2 transition"
        >
          🔍 Search
        </button>
      </form>

      {/* Results */}
      <div className="mt-8">
        {results.length === 0 ? (
          <p className="text-gray-500 text-center">No results found.</p>
        ) : (
          <ul className="space-y-4">
            {results.map((ad) => (
              <li key={ad.id} className="border rounded-lg p-4 shadow-sm">
                <h3 className="text-lg font-bold">
                  {highlightMatch(ad.title, filters.title)}
                </h3>
                <p>
                  <span className="font-semibold">Category: </span>
                  {highlightMatch(ad.category, filters.category)}
                </p>
                <p>
                  <span className="font-semibold">Location: </span>
                  {highlightMatch(ad.location, filters.location)}
                </p>
                <p>
                  <span className="font-semibold">Description: </span>
                  {ad.description}
                </p>
                <p>
                  <span className="font-semibold">Contact: </span>
                  {ad.contact}
                </p>
                <p>
                  <span className="font-semibold">Price: </span>
                  {ad.price}
                </p>
                {ad.image && (
                  <img src={ad.image} alt={ad.title} className="w-32 h-24 object-cover mt-2 rounded" />
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}