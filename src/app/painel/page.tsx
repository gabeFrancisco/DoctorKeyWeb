"use client";
import DataCard from "@/components/DataCard/DataCard";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { useAppDispatch, useAppSelector } from "@/store/store";
import React, { useEffect } from "react";
import { dashboardActions, getAllData } from "@/store/features/dashboardSlice";

import { Chart } from "react-google-charts";

const page = () => {
  const data = useAppSelector((state) => state.dashboard.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllData());
  }, []);

  return (
    <div>
      <SectionTitle
        title="Painel"
        subtitle="Visualize todo o seu negócio por aqui"
      />
      {data ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
          <DataCard
            description="Chaves cadastradas"
            data={data.keyCount}
            delay={0.4}
            className="bg-gradient-to-tr from-green-400 to-green-200 font-bold"
          />
          <DataCard
            description="Ordens de serviço"
            data={data.serviceOrderCount}
            delay={0.8}
            className="bg-gradient-to-tr from-blue-400 to-blue-200 font-bold"
          />
          <DataCard
            description="Total de clientes"
            data={data.customerCount}
            delay={1.2}
            className="bg-gradient-to-tr from-yellow-400 to-yellow-200 font-bold"
          />
          <DataCard
            description="Checklists ativos"
            data={data.checklistCount}
            delay={1.4}
            className="bg-gradient-to-tr from-red-400 to-red-200 font-bold"
          />

          <Chart
            chartType="ScatterChart"
            data={[
              ["Age", "Weight"],
              [4, 5.5],
              [8, 12],
            ]}
            width="100%"
            height="400px"
            legendToggle
          />
        </div>
      ) : null}
    </div>
  );
};

export default page;
