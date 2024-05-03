"use client";
import React, { useState } from "react";
import { useEffect } from "react";

export default function CountryLookup() {
  const [country, setCountry] = useState("United States");

  useEffect(() => {
    const getCountry = async () => {
      const response = await fetch(
        `https://extreme-ip-lookup.com/json/?key=mug5DAJbj2Ww2CYeRBby`
      )
        .then((res) => res.json())
        .then((data) => data.country);
      if (!response) return;
      setCountry(response);
    };
    getCountry();
  }, []);

  return <div className="px-16 py-2">{country}</div>;
}
