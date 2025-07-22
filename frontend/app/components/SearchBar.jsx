"use client";

import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 p-2 border rounded-lg w-full max-w-lg"
    >
      <input
        type="text"
        placeholder="Search restaurants..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Search
      </button>
    </form>
  );
}