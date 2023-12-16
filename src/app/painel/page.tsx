"use client";

import DataCard from "@/components/DataCard/DataCard";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { useAppDispatch, useAppSelector } from "@/store/store";
import React, { useEffect } from "react";
import { dashboardActions, getAllData } from "@/store/features/dashboardSlice";

const page = () => {
  const data = useAppSelector((state) => state.dashboard.data);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllData()).then(() => console.log(data))
    dispatch(dashboardActions.startConnecting());
  }, []);


  return (
    <div>
      <SectionTitle
        title="Painel"
        subtitle="Visualize todo o seu negócio por aqui"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
        <DataCard
          description="Chaves cadastradas"
          data={data?.keyCount}
          delay={0.4}
          className="bg-gradient-to-tr from-green-600 to-green-400"
        />
        <DataCard
          description="Ordens de serviço"
          data={data?.serviceOrderCount}
          delay={0.8}
          className="bg-gradient-to-tr from-blue-600 to-blue-400"
        />
        <DataCard
          description="Total de clientes"
          data={data?.customerCount}
          delay={1.2}
          className="bg-gradient-to-tr from-yellow-500 to-yellow-300"
        />
        <DataCard
          description="Checklists ativos"
          data={data?.checklistCount}
          delay={1.6}
          className="bg-gradient-to-tr from-red-500 to-red-300"
        />
      </div>
    </div>
  );
};

export default page;
