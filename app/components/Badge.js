import React from "react";
import { Chip } from "@nextui-org/react";

export default function Badge({ type }) {
  switch (type) {
    case "HTML/CSS":
      return (
        <Chip
          classNames={{
            base: "bg-red-500",
            content: "text-white font-bold",
          }}
        >
          HTML/CSS
        </Chip>
      );
    case "Javascript":
      return (
        <Chip
          classNames={{
            base: "bg-yellow-500",
            content: "text-white font-bold",
          }}
        >
          Javascript
        </Chip>
      );
    case "React":
      return (
        <Chip
          classNames={{
            base: "bg-blue-500",
            content: "text-white font-bold",
          }}
        >
          React
        </Chip>
      );
    case "Next.js":
      return (
        <Chip
          classNames={{
            base: "bg-black",
            content: "text-white font-bold",
          }}
        >
          Next.js
        </Chip>
      );
    case "Tailwind":
      return (
        <Chip
          classNames={{
            base: "bg-teal-500",
            content: "text-white font-bold",
          }}
        >
          Tailwind
        </Chip>
      );
    case "Typescript":
      return (
        <Chip
          classNames={{
            base: "bg-blue-500",
            content: "text-white font-bold",
          }}
        >
          Typescript
        </Chip>
      );
    case "GraphQL":
      return (
        <Chip
          classNames={{
            base: "bg-purple-600",
            content: "text-white font-bold",
          }}
        >
          GraphQL
        </Chip>
      );
    case "ReactQuery":
      return (
        <Chip
          classNames={{
            base: "bg-pink-500",
            content: "text-white font-bold",
          }}
        >
          ReactQuery
        </Chip>
      );
    case "API":
      return (
        <Chip
          classNames={{
            base: "bg-green-500",
            content: "text-white font-bold",
          }}
        >
          API
        </Chip>
      );
    case "Bootstrap":
      return (
        <Chip
          classNames={{
            base: "bg-purple-500",
            content: "text-white font-bold",
          }}
        >
          Bootstrap
        </Chip>
      );
    default:
      return (
        <Chip
          classNames={{
            base: "bg-blue-500",
            content: "text-white font-bold",
          }}
        >
          {type}
        </Chip>
      );
  }
  return <></>;
}
