import SectionTitle from "@/components/SectionTitle/SectionTitle";
import ServiceOrderTable from "@/components/ServiceOrder/ServiceOrderTable";
import React from "react";

const page = () => {
  return (
    <div>
      <SectionTitle
        title="Ordens de Serviço"
        subtitle="Aqui você verá suas ordens de serviços em execução."
      />
      <ServiceOrderTable />
    </div>
  );
};

export default page;
