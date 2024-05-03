import React from "react";
import Link from "next/link";
import { TbGridDots } from "react-icons/tb";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import tailwindConfig from "../../tailwind.config";

export default function HomeHeader() {
  return (
    <header className="flex justify-end p-5 text-sm">
      <div className="flex gap-2 items-center">
        <Link href={"https://gmail.google.com"} className="hover:underline">
          Gmail
        </Link>
        <Link href={"https://image.google.com"} className="hover:underline">
          Images
        </Link>
        <TbGridDots className="bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2" />
        <button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow">
          Sign in
        </button>
      </div>
    </header>
  );
}
