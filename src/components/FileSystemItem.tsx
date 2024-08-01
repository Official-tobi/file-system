"use client"
import { ChevronRightIcon, FileIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { Node } from "~/types/node";

export const FileSystemItem = ({ node }: { node: Node }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li key={node.name} className="hover:cursor-pointer select-none ">
      <span
        className="flex gap-1.5 items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {node.nodes ? (
          <ChevronRightIcon
            className={`${isOpen ? "rotate-90" : "rotate-0"}`}
          />
        ) : (
          <FileIcon />
        )}

        {node.name}
      </span>
      {node.nodes && isOpen && (
        <ul className=" translate-x-4">
          {node.nodes.map((node) => (
            <FileSystemItem node={node} key={node.name} />
          ))}
        </ul>
      )}
    </li>
  );
};
