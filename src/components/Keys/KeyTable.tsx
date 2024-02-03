"use client";

import { getAllKeys, searchKey } from "@/store/features/keySlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import React, { useEffect, useState } from "react";
import LoadingSkeleton from "../LoadingSkeleton/LoadingSkeleton";
import KeyRow from "./KeyRow";
import { faPlus, faSearch, faSync } from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import KeyToolbar from "./KeyToolbar";

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


  return (
    <div className="flex flex-col items-center">
      <KeyToolbar/>
      {isLoaded ? (
        <div className="overflow-x-auto shadow-md rounded-sm w-full">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <table className="w-full text-sm text-left text-gray-500 rounded-sm">
              <thead className="border-0 rounded-sm text-md text-white bg-green-500">
                <tr>
                  <th className="px-2 lg:px-6 py-2 m-1">Modelo</th>
                  <th className="px-2 lg:px-6 py-2 m-1">Marca</th>
                  <th className="hidden lg:table-cell px-2 lg:px-6 py-2 m-1">
                    Botões
                  </th>
                  <th className="hidden lg:table-cell px-2 lg:px-6 py-2 m-1">
                    Ano
                  </th>
                  <th className="hidden lg:table-cell px-2 lg:px-6 py-2 m-1">
                    Tipo
                  </th>
                  <th className="hidden lg:table-cell px-2 lg:px-6 py-2 m-1">
                    Lâmina
                  </th>
                  <th className="px-2 lg:px-6 py-2 m-1">Preço</th>
                  <th className="px-2 lg:px-6 py-2 m-1">Ações</th>
                </tr>
              </thead>
              <tbody>
                {keys.map((el, key) => (
                  <KeyRow _key={el} />
                ))}
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
