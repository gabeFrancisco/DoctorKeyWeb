import DataCard from "@/components/DataCard/DataCard";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import React from "react";

const page = async () => {
  return (
    <div>
      <SectionTitle
        title="Painel"
        subtitle="Visualize todo o seu negócio por aqui"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
        <DataCard
          description="Chaves cadastradas"
          data={7}
          className="bg-gradient-to-tr from-green-600 to-green-400"
        />
        <DataCard
          description="Ordens de serviço"
          data={7}
          className="bg-gradient-to-tr from-blue-600 to-blue-400"
        />
        <DataCard
          description="Total de clientes"
          data={7}
          className="bg-gradient-to-tr from-yellow-500 to-yellow-300"
        />
         <DataCard
          description="Checklists ativos"
          data={7}
          className="bg-gradient-to-tr from-red-500 to-red-300"
        />
      </div>
    </div>
  );
};

export default page;
