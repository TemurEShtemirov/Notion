"use client";

import React from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  Plus,
  Trash,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Id } from "@/convex/_generated/dataModel";
import { useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Skeleton } from "@/components/ui/skeleton";

interface ItemProps {
  id?: Id<"document">;
  label: string;
  level?: number;
  expanded?: boolean;
  onExpand?: () => void;
}

const Item = ({ label, id, level, expanded, onExpand }: ItemProps) => {
  const { user } = useUser();
  const createDocument = useMutation(api.document.createDocument);

  const onCreateDocument = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();

    if (!id) return;
    createDocument({
      title: "Untitled",
      parentDocument: id,
    }).then((document) => {
      if (!expanded) {
        onExpand?.();
      }
    });
  };

  // const handleExpand = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  //   event.stopPropagation();
  //   onExpand?.();
  // };

  const handleExpand = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    event.stopPropagation();
    if (onExpand) {
      onExpand();
    }
  };

  const ChevronIcon = expanded ? ChevronDown : ChevronRight;

  return (
    <div
      style={{ paddingLeft: level ? `${level * 12 + 12}px` : "12px" }}
      className={
        "group min-h-[27px] text-sm py-1 pr-3 w-full hover:bg-primary/5 flex items-center text-muted-foreground font-medium"
      }
    >
      {!!id && (
        <div
          className="h-full rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 mr-1"
          role="button"
          onClick={handleExpand}
        >
          <ChevronIcon />
        </div>
      )}
      <span className="truncate">{label}</span>
      {!!id && (
        <div className="ml-auto flex items-center gap-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger onClick={(e) => e.stopPropagation()} asChild>
              <div className="opacity-0 group-hover:opacity-100 h-full ml-auto rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600">
                <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-60"
              align="start"
              side="right"
              forceMount
            >
              <DropdownMenuItem>
                <Trash className="h-4 w-4 mr-2" />
                Delete
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <div className="text-xs text-muted-foreground p-2">
                Last Edited By {user?.fullName}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          <div
            className="opacity-0 group-hover:opacity-100 h-full ml-auto rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600"
            role="button"
            onClick={onCreateDocument}
          >
            <Plus className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      )}
    </div>
  );
};


export default Item;

Item.Skeleton = function ItemSkeleton({level}:{level?:number}){
return (
  <div style={{ paddingLeft: level ? `${level * 12 + 12}px` : "12px" }} className="flex gap-x-2 py-[3px]">
    <Skeleton className="h-4 w-4"/>
    <Skeleton className="h-4 w-[30%]"/>
  </div>
);
}