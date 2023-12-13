import React from "react";
import Logo from "./logo";
import { ModeToggle } from "@/components/shared/mode-toggle";

export default function Navbar() {
  return (
    <div className="z-50 bg-background fixed top-0 flex items-center w-full p-6">
      <Logo />
      <div className="flex items-center gap-x-2">
        <ModeToggle />
      </div>
    </div>
  );
}
