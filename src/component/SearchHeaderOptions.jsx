"use client";

import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { AiOutlineCamera, AiOutlineSearch } from "react-icons/ai";

export default function SearchHeaderOptions() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const pathname = usePathname();
  const selectTab = (tab) => {
    router.push(
      `/search/${tab === "Images" ? "image" : "web"}?searchTerm=${searchTerm}`
    );
  };
  return (
    <div className="flex space-x-2 gap-2 select-none border-b w-full justify-center lg:justify-start lg:pl-52 text-gray-700 text-sm">
      <div
        onClick={() => selectTab("All")}
        className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 ${
          pathname === "/search/web" && "!text-blue-500 !border-blue-500"
        }`}>
        <AiOutlineSearch />
        <p>All</p>
      </div>
      <div
        onClick={() => selectTab("Images")}
        className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 ${
          pathname === "/search/image" && "!text-blue-500 !border-blue-500"
        }`}>
        <AiOutlineCamera />
        <p>Images</p>
      </div>
    </div>
  );
}
