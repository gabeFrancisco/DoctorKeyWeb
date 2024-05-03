"use client";

import { useAppSelector } from "@/store/store";
import React, { useEffect } from "react";

const ServiceOrderTable = () => {
  const services = useAppSelector((state) => state.serviceOrders);
  useEffect(() => {}, []);
  return <div></div>;
};

export default ServiceOrderTable;
