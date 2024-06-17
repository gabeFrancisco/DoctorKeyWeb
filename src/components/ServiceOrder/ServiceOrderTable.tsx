"use client";

import { getAllServiceOrders } from "@/store/features/serviceOrderSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import React, { useEffect } from "react";
import ServiceOrderRow from "./ServiceOrderRow";
import Link from "next/link";

const ServiceOrderTable = () => {
  const dispatch = useAppDispatch();
  const serviceOrders = useAppSelector(
    (state) => state.serviceOrders.serviceOrderList
  );
  useEffect(() => {
    dispatch(getAllServiceOrders());
  }, []);
  return (
    <div className=" ">
      <div>
        <Link
          className="rounded-sm shadow-lg bg-green-400  my-1 text-sm text-white hover:bg-green-600 p-0.5 px-3"
          href="ordens/adicionar"
        >
          Nova O.S.
        </Link>
      </div>
      <table className="w-full text-sm text-left text-gray-500 rounded-smborder rounded overflow-x-auto shadow-md">
        <thead className="border-0 rounded-sm text-md text-white bg-green-400">
          <tr>
            <th className="px-2 lg:px-6 py-2 m-1">Titulo</th>
            <th className="px-2 lg:px-6 py-2 m-1">Descrição</th>
            <th className="hidden lg:table-cell px-2 lg:px-6 py-2 m-1">Data</th>
            <th className="px-2 lg:px-6 py-2 m-1">Valor</th>
            {/* <th className="px-2 lg:px-6 py-2 m-1">Status</th> */}
            <th className="px-2 lg:px-6 py-2 m-1">Ações</th>
          </tr>
        </thead>
        <tbody>
          {serviceOrders.map((el, key) => (
            <ServiceOrderRow serviceOrder={el} key={key} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceOrderTable;
