"use client";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";

export default function HomeSearch() {
  const [input, setInput] = useState("");
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim) return;
    router.push(`/search/web?searchTerm=${input}`);
  };

  const randomSearch = async (e) => {
    setRandomSearchLoading(true);
    const response = await fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => data[0]);
    if (!response) return;
    router.push(`/search/web?searchTerm=${response}`);
    setRandomSearchLoading(false);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex items-center w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-x1 lg:max-2xl">
        <IoIosSearch className="text-xl text-gray-500 mr-3" />
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow w-full py-2 px-4 border rounded-full text-lg  focus:outline-none "
        />
        <FaMicrophone className="text-lg" />
      </form>
      <div className="flex flex-col space-y-2 sm:space-y-0 justify-center sm:flex-row mt-8">
        <button
          className="bg-[#f8f0fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow"
          onClick={handleSubmit}>
          Google Search
        </button>
        <button
          disabled={randomSearchLoading}
          className="bg-[#f8f0fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow disabled:opacity-80 disabled:shadow-sm"
          onClick={randomSearch}>
          {randomSearchLoading ? "Loading..." : "I amm Feeling Lucky"}
        </button>
      </div>
    </>
  );
}
