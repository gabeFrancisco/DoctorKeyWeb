"use client";

import { getAllKeys } from "@/store/features/keySlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import React, { useEffect, useState } from "react";
import LoadingSkeleton from "../LoadingSkeleton/LoadingSkeleton";
import KeyRow from "./KeyRow";

const KeyTable = () => {
  const keys = useAppSelector((state) => state.keys.keyList);
  const dispatch = useAppDispatch();
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    dispatch(getAllKeys()).then(() => setLoaded(true));
  }, []);
  return (
    <div className="flex flex-col items-center">
      {isLoaded ? (
        <div className="overflow-x-auto shadow-md sm:rounded-lg w-full">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded-md">
            <thead className="border-0 rounded-md text-md text-gray-100 bg-green-500 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-6 py-3 m-1">Modelo</th>
                <th className="px-6 py-3 m-1">Marca</th>
                <th className="px-6 py-3 m-1">Ano</th>
                <th className="px-6 py-3 m-1">Tipo</th>
                <th className="px-6 py-3 m-1">Lâmina</th>
                <th className="px-6 py-3 m-1">Preço</th>
              </tr>
            </thead>
            <tbody>
              {keys.map((el, key) => (
                <KeyRow _key={el} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <LoadingSkeleton />
      )}
    </div>
  );
};

export default KeyTable;
