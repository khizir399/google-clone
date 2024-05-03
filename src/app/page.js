import HomeHeader from "@/component/HomeHeader";
import React from "react";
import myImage from "../app/resources/google.png";
import Image from "next/image";
import HomeSearch from "@/component/HomeSearch";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className="flex flex-col items-center mt-2">
        <Image
          src={myImage}
          alt="Google logo"
          width={300}
          height={100}
          priority
          style={{ width: "auto", height: "auto" }}
        />
        <HomeSearch />
      </div>
    </>
  );
}
