"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import React from "react";
import Item from "./item";

interface DocumentListProps {
  parentDocumentId?: Id<"document">;
  level?: number;
}

const DocumentList = ({ level, parentDocumentId }: DocumentListProps) => {
  const document = useQuery(api.document.getDocuments, {
    parentDocument: parentDocumentId,
  });

  console.log(document);

  return (
    <div>
      {document?.map((document) => (
        <div key={document._id} className="">
          <Item label={document.title} id={document._id} level={level} />
          <DocumentList parentDocumentId={document._id} level={level + 1} />
        </div>
      ))}
    </div>
  );
};

export default DocumentList;
