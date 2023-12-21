"use client";

import { cn } from "@/lib/utils";
import { ChevronsLeft, MenuIcon } from "lucide-react";
import React, { ElementRef, useRef, useState } from "react";

export const Sidebar = () => {
  const sidebarRef = useRef<ElementRef<"div">>(null);
  const navbarRef = useRef<ElementRef<"div">>(null);

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const collapse = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(true);
      setIsResetting(true);
      sidebarRef.current.style.width = "0";
      navbarRef.current.style.width = "100%";
      navbarRef.current.style.left = "0";
    }
  };

  const reset = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(false);
      setIsResetting(true);

      sidebarRef.current.style.width = "240px";
      navbarRef.current.style.width = "calc(100% -240px)";
      navbarRef.current.style.left = "240px";

    }
  };

  

  return (
    <>
      <div
        className={cn(
          "group/sidebar h-screen bg-secondary overflow-y-auto relative flex w-60 flex-col z-50",
          isResetting && "transition-all ease-in duration-300"
        )}
        ref={sidebarRef}
      >
        <div
          className="h-6 w-6 text-muted-foreground rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 absolute top-3 right-2 opacity-0 group-hover/sidebar:opacity-100 transition"
          onClick={collapse}
        >
          <ChevronsLeft className="h-6 w-6" />
        </div>
        <div className="absolute right-0 top-0 w-1 h-full cursor-ew-resize bg-primary/10 opacity-0 group-hover/sidebar:opacity-100 transition" onClick={handleMouseDown}></div>
      </div>
      <div
        className={cn(
          "absolute top-0 z-50 left-60 w-[calc(100% -240px)]",
          isResetting && "transition-all ease-in duration-300"
        )}
        ref={navbarRef}
      >
        <nav className={cn("bg-transparent px-3 py-2 w-full")}>
          {isCollapsed && (
            <MenuIcon
              className="h-6 w-6 text-muted-foreground"
              role="button"
              onClick={reset}
            />
          )}
        </nav>
      </div>
    </>
  );
};
