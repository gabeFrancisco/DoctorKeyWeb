import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faKey, faThermometer, faCar} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import React from "react";

const KeyToolbar = () => {
  const handleBlades = () => {
    navigator;
  };
  return (
    <div className="rounded-md border-dashed border-green-300 border-b-2 w-full flex flex-row  mt-3 mb-5 p-3">
      
      <Link
        href="keys/new"
        className="rounded-md shadow-md bg-green-500 m-1 py-2 px-3 text-sm text-white hover:bg-green-600"
      >
        <FontAwesomeIcon icon={faPlus} className="mx-2"  height={25}/>
        Nova chave!
      </Link>
      <Link
        href="keys/manufactors"
        className="rounded-md shadow-md bg-red-400 m-1 py-2 px-3 text-sm text-white hover:bg-red-500"
      >
        <FontAwesomeIcon icon={faCar} className="mx-2"  height={25}/>
        Marcas
      </Link>
      <Link
        href="keys/keyTypes"
        className="rounded-md shadow-md bg-blue-500 m-1 py-2 px-3 text-sm text-white hover:bg-blue-600"
      >
          <FontAwesomeIcon icon={faKey}  className="mx-2"  height={25}/>
        Tipos
      </Link>
      <Link
        href="keys/blades"
        className="rounded-md shadow-md bg-yellow-500 m-1 py-2 px-3 text-sm text-white hover:bg-yellow-600"
      >
         <FontAwesomeIcon icon={faThermometer} className="mx-2"  height={25}/>
        Lâminas
      </Link>
    </div>
  );
};

export default KeyToolbar;
