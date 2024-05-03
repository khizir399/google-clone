import React from "react";
import Link from "next/link";
import ImageSearchResults from "@/component/ImageSearchResults";
import PaginationButtons from "@/component/PaginationButtons";

export default async function ImageSearchPage({ searchParams }) {
  const startIndex = searchParams.start || "1";
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=AIzaSyDEgKXGFV7hLLzyg4d4Xc38ZwOBkKbZbks&cx=46fb283236bad4a67&q=${searchParams.searchTerm}&searchType=image&start=${startIndex}`
  );
  if (!response.ok) throw new error("Something Went Wrong");
  const data = await response.json();
  const results = data.items;

  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center">
        <h1>No results found for {searchParams.searchTerm}</h1>
        <p>Try Searching the web or Images for something else </p>
        <br />
        <Link href="/" className="text-blue-500">
          Home
        </Link>
      </div>
    );
  }
  return (
    <div>
      {results && <ImageSearchResults results={data} />}
      <PaginationButtons className="" />
    </div>
  );
}
