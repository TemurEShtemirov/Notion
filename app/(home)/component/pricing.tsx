import Image from "next/image";
import React from "react";

export default function Pricing() {
  return (
    <div className="max-w-7xl mx-auto container">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold max-w-2xl">
        One tool for your whole company. Free for teams to try.
      </h1>
      <p className="uppercase opacity-70">trusted by teams ai</p>
      <div className="flex gap-4 flex-row flex-wrap mt-4">
        {teams.map((team, idx) => (
          <Image src={team} width={50} height={50} key={idx} alt="teams" />
        ))}
      </div>
    </div>
  );
}

const teams = [
  "/teams/1.svg",
  "/teams/2.svg",
  "/teams/3.svg",
  "/teams/4.svg",
  "/teams/5.svg",
];
