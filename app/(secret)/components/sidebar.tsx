import { ChevronsLeft } from "lucide-react";
import React from "react";

export const Sidebar = () => {
  return (
    <>
      <div className="group h-screen bg-secondary overflow-y-auto relative flex w-60 flex-col z-50">
        <div className="h-6 w-6 text-muted-foreground rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 absolute top-3 right-2 opacity-0 group-hover:opacity-100 transition">
          <ChevronsLeft className="h-6 w-6" />
        </div>
        <div className="absolute right-0 top-0 w-1 h-full cursor-ew-resize bg-primary/10 opacity-0 group-hover:opacity-100 transition"></div>
      </div>
    </>
  );
};
