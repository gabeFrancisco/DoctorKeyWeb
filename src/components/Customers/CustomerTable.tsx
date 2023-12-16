"use client";

import { useAppDispatch, useAppSelector } from "@/store/store";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import LoadingSkeleton from "../LoadingSkeleton/LoadingSkeleton";
import { motion } from "framer-motion";
import { getAllCustomers } from "@/store/features/customerSlice";
import CustomerRow from "./CustomerRow";

const CustomerTable = () => {
  const customers = useAppSelector((state) => state.customers.customerList);
  const dispatch = useAppDispatch();
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    dispatch(getAllCustomers()).then(() => setLoaded(true));
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex flex-row justify-between items-center my-1 py-2">
        <div>
          <Link
            href="clientes/adicionar"
            className="rounded-sm shadow-lg bg-green-500 py-2 px-3 text-md text-white hover:bg-green-600"
          >
            <FontAwesomeIcon icon={faPlus} className="mx-2" height={25} />
            <span className="hidden md:inline-block">Novo cliente!</span>
          </Link>
        </div>
      </div>
      {isLoaded ? (
        <div className="overflow-x-auto shadow-md rounded-sm w-full my-2">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <table className="w-full text-sm text-left text-gray-500 rounded-md">
              <thead className="border-0 rounded-md text-md text-white bg-green-500">
                <tr>
                  <th className="px-2 lg:px-6 py-3 m-1">Nome</th>
                  <th className="px-2 lg:px-6 py-3 m-1">Telefone</th>
                  <th className="hidden lg:table-cell px-2 lg:px-6 py-3 m-1">
                    Email
                  </th>
                  <th className="px-2 lg:px-6 py-3 m-1">Endereço</th>
                  <th className="px-2 lg:px-6 py-3 m-1">Ações</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((el, key) => (
                  <CustomerRow customer={el} />
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

export default CustomerTable;
