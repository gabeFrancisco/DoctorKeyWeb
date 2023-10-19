"use client";

import { getAllKeys } from "@/store/features/keySlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import React, { useEffect, useState } from "react";
import LoadingSkeleton from "../LoadingSkeleton/LoadingSkeleton";
import KeyRow from "./KeyRow";

import { motion } from "framer-motion";

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
        <div className="overflow-x-auto shadow-md rounded-lg w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <table className="w-full text-sm text-left text-gray-500 rounded-md">
              <thead className="border-0 rounded-md text-md text-gray-100 bg-green-500">
                <tr>
                  <th className="px-2 lg:px-6 py-3 m-1">Modelo</th>
                  <th className="px-2 lg:px-6 py-3 m-1">Marca</th>
                  <th className="hidden lg:table-cell px-2 lg:px-6 py-3 m-1">Botões</th>
                  <th className="hidden lg:table-cell px-2 lg:px-6 py-3 m-1">Ano</th>
                  <th className="hidden lg:table-cell px-2 lg:px-6 py-3 m-1">Tipo</th>
                  <th className="hidden lg:table-cell px-2 lg:px-6 py-3 m-1">Lâmina</th>
                  <th className="px-2 lg:px-6 py-3 m-1">Preço</th>
                  <th className="px-2 lg:px-6 py-3 m-1">Ações</th>
                </tr>
              </thead>
              <tbody>
                {keys.map((el, key) => (
                  <KeyRow _key={el} />
                )).reverse()}
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
