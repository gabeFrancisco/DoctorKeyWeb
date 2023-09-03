"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faKey,
  faThermometer,
  faCar,
  faSearch,
  faSync,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import React, { HTMLInputTypeAttribute, SyntheticEvent, useState } from "react";
import { useAppDispatch } from "@/store/store";
import { getAllByModel, getAllKeys } from "@/store/features/keySlice";

const KeyToolbar = () => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState("");
  const handleSearch = () => {
    if (search !== "") {
      dispatch(getAllByModel(search));
    } else {
      dispatch(getAllKeys());
    }
  };

  const handleClear = () => {
    dispatch(getAllKeys()).then(() => setSearch(""));
  };
  return (
    <div className="rounded-md  w-full flex flex-row justify-between my-1 py-2">
      <div>
        <Link
          href="chaves/adicionar"
          className="rounded-md shadow-lg bg-green-500 my-1 py-2 px-3 text-md text-white hover:bg-green-600"
        >
          <FontAwesomeIcon icon={faPlus} className="mx-2" height={25} />
          Nova chave!
        </Link>
      </div>

      <div className="flex flex-row items-center">
        <input
          type="text"
          placeholder="Pesquisar por modelo"
          className="rounded-md border-2 block w-full p-1"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="rounded-md shadow-lg bg-green-500 mx-1 py-1 px-3 text-md text-white hover:bg-green-600"
        >
          <FontAwesomeIcon icon={faSearch} height={25} />
        </button>
        {search !== "" ? (
          <button
            onClick={handleClear}
            className="rounded-md shadow-lg bg-blue-500 mx-1 py-1 px-3 text-md text-white hover:bg-blue-600"
          >
            <FontAwesomeIcon icon={faSync} height={25} />
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default KeyToolbar;
