import React from "react";

export default function FilterSearch() {
  return (
    <section className="bg-white py-8 px-4 md:px-12 shadow-md rounded-xl max-w-5xl mx-auto mt-10">
      <form action="/search-results" method="GET" className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Keyword Search */}
        <input
          type="text"
          name="title"
          placeholder="Search service or keywords"
          className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-button3 focus:outline-none"
        />

        {/* Category Filter */}
        <select
          name="category"
          className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-700 focus:ring-button3 focus:outline-none"
        >
          <option value="">All Categories</option>
          <option value="Tech & Programming">Tech & Programming</option>
          <option value="Artisans">Artisans</option>
          <option value="Education & Training">Education & Training</option>
          <option value="Food & Beverages">Food & Beverages</option>
          <option value="Health & Wellness ">Health & Wellness </option>
        </select>

        {/* Location Input */}
        <input
          type="text"
          name="location"
          placeholder="Enter location"
          className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-button3 focus:outline-none"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="flex items-center justify-center bg-button3 text-white rounded-md px-4 py-2 text-sm hover:bg-button2 transition"
        >
          🔍 Search
        </button>
      </form>
    </section>
  );
}
