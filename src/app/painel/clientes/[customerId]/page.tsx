"use client";

import CustomerCard from "@/components/Customers/CustomerCard";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { getAllCustomers, readCustomer } from "@/store/features/customerSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

const page = () => {
  const params = useParams();
  const customerId = params.customerId as string
  const dispatch = useAppDispatch();
  const customer = useAppSelector((state) => state.customers.customer);

  useEffect(() => {
    dispatch(getAllCustomers()).then(() => dispatch(readCustomer(customerId)));
  }, []);
  return (
    <div>
      <SectionTitle title="Cliente" />
      <CustomerCard customer={customer} />
    </div>
  );
};

export default page;
