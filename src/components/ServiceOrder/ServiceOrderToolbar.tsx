import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const ServiceOrderToolbar = () => {
  return (
    <div className="rounded-md my-1 py-2 flex flex-col lg:flex-row justify-between">
      <div className="my-2 lg:my-0 flex flex-wrap flex-row items-center justify-evenly">
        <Link
          href="ordens/adicionar"
          className="rounded-sm shadow-lg bg-green-400 mr-1 py-0.5 h-6 px-3 
            text-sm text-white hover:bg-green-600"
        >
          <FontAwesomeIcon icon={faPlus} className="mx-1" height={25} />
          Nova O.S.
        </Link>
      </div>
    </div>
  );
};

export default ServiceOrderToolbar;
