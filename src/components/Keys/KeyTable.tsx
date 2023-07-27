"use client";

import { getAllKeys } from "@/store/features/keySlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import React, { useEffect } from "react";

const KeyTable = () => {
  const keys = useAppSelector((state) => state.keys.keyList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllKeys());
  }, []);
  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded-md">
        <thead className="border-0 rounded-md text-md text-gray-100 bg-green-400 dark:bg-gray-700 dark:text-gray-400">
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
            <tr className="dark:bg-gray-800" key={key}>
              <th className="px-6 py-2">{el.model}</th>
              <td className="px-6 py-2">{el.manufactor}</td>
              <td className="px-6 py-2">{el.year}</td>
              <td className="px-6 py-2">{el.keyType?.name}</td>
              <td className="px-6 py-2">{el.bladeType?.name}</td>
              <td className="px-6 py-2 text-green-500 font-bold">R${el.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default KeyTable;
