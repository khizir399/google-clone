import SearchHeader from "@/component/SearchHeader";
import React from "react";
import "./../globals.css";

export default function layout({ children }) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  );
}
