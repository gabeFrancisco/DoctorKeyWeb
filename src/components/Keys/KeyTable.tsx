"use client";

import {
  clearSearch,
  getAllByModel,
  getAllKeys,
  searchKey,
} from "@/store/features/keySlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import React, { useEffect, useState } from "react";
import LoadingSkeleton from "../LoadingSkeleton/LoadingSkeleton";
import KeyRow from "./KeyRow";
import { faPlus, faSearch, faSync } from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const KeyTable = () => {
  const storeKeys = useAppSelector((state) => state.keys);
  // const filteredKeys = useAppSelector((state) => state.keys.filteredList);
  const dispatch = useAppDispatch();
  const [isLoaded, setLoaded] = useState(false);
  const [keys, setKeys] = useState(storeKeys?.keyList);

  useEffect(() => {
    dispatch(getAllKeys());
  }, []);

  useEffect(() => {
    setKeys(storeKeys?.keyList);
    setLoaded(true);
  }, [storeKeys.keyList]);

  useEffect(() => {
    setKeys(storeKeys?.filteredList);
    setLoaded(true);
  }, [storeKeys.filteredList]);

  const [search, setSearch] = useState("");
  const handleSearch = () => {
    if (search !== "") {
      dispatch(searchKey(search));
      setKeys(storeKeys?.filteredList);
    } else {
      setKeys(storeKeys?.keyList);
    }
  };

  const handleClear = () => {
    // dispatch(clearSearch());
    setKeys(storeKeys?.keyList);
    setSearch("");
  };
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-md  w-full flex flex-row justify-between items-center my-1 py-2">
        <div>
          <Link
            href="chaves/adicionar"
            className="rounded-md shadow-lg bg-green-500 py-2 px-3 text-md text-white hover:bg-green-600"
          >
            <FontAwesomeIcon icon={faPlus} className="mx-2" height={25} />
            <span className="hidden md:inline-block">Nova chave!</span>
          </Link>
        </div>

        <div className="flex flex-row items-stretch">
          <input
            type="text"
            placeholder="Pesquisar por modelo"
            className="rounded-md border-2 block w-52 lg:w-full p-1"
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
      {isLoaded ? (
        <div className="overflow-x-auto shadow-md rounded-lg w-full">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <table className="w-full text-sm text-left text-gray-500 rounded-md">
              <thead className="border-0 rounded-md text-md text-white bg-green-500">
                <tr>
                  <th className="px-2 lg:px-6 py-3 m-1">Modelo</th>
                  <th className="px-2 lg:px-6 py-3 m-1">Marca</th>
                  <th className="hidden lg:table-cell px-2 lg:px-6 py-3 m-1">
                    Botões
                  </th>
                  <th className="hidden lg:table-cell px-2 lg:px-6 py-3 m-1">
                    Ano
                  </th>
                  <th className="hidden lg:table-cell px-2 lg:px-6 py-3 m-1">
                    Tipo
                  </th>
                  <th className="hidden lg:table-cell px-2 lg:px-6 py-3 m-1">
                    Lâmina
                  </th>
                  <th className="px-2 lg:px-6 py-3 m-1">Preço</th>
                  <th className="px-2 lg:px-6 py-3 m-1">Ações</th>
                </tr>
              </thead>
              <tbody>
                {keys.map((el, key) => <KeyRow _key={el} />).reverse()}
              </tbody>
            </table>
          </motion.div>
        </div>
      ) : (
        <LoadingSkeleton />
      )}
    </div>
  );
};

export default KeyTable;
