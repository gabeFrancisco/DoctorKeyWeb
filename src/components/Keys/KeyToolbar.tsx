import Link from "next/link";
import React from "react";

const KeyToolbar = () => {
  const handleBlades = () => {
    navigator;
  };
  return (
    <div className="rounded-md border-dashed border-green-300 border-b-2 w-full flex flex-row  my-3 p-2">
      <Link
        href="keys/new"
        className="rounded-md shadow-md bg-green-500 m-1 py-1 px-2 text-sm text-white"
      >
        Nova chave!
      </Link>
      <Link
        href=""
        className="rounded-md shadow-md bg-blue-400 m-1 py-1 px-2 text-sm text-white"
      >
        Tipos
      </Link>
      <Link
        href="keys/blades"
        className="rounded-md shadow-md bg-yellow-500 m-1 py-1 px-2 text-sm text-white"
      >
        Lâminas
      </Link>
    </div>
  );
};

export default KeyToolbar;
