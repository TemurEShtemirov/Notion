import React from "react";
import { ChildProps } from "@/types";
import Navbar from "./component/navbar";

const HomeLayout = ({ children }: ChildProps) => {
  return (
    <div className="h-full">
      <Navbar />
      <main className="h-full pt-48">
        {children}</main>
    </div>
  );
};

export default HomeLayout;
