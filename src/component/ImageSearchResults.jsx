import React from "react";
import Link from "next/link";
import PaginationButtons from "./PaginationButtons";

export default function ImageSearchResults({ results }) {
  return (
    <div className="sm:pb-24 pb-40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
      {results.items.map((result) => (
        <div className="mb-8" key={result.link}>
          <div className="group">
            <Link href={result.image.contextLink}>
              <img
                src={result.link}
                alt={result.title}
                className="h-60 group-hover:shadow-xl w-full object-contain transition-shadow duration-300"
              />
            </Link>
            <Link href={result.image.contextLink}>
              <h2 className="group-hover:underline text-xl truncate">
                {result.title}
              </h2>
            </Link>
            <Link href={result.image.contextLink}>
              <p className="group-hover:underline text-gray-600 truncate">
                {result.displayLink}
              </p>
            </Link>
          </div>
        </div>
      ))}
      <PaginationButtons className="sm:pb-24 pb-40 ml-16" />
    </div>
  );
}
