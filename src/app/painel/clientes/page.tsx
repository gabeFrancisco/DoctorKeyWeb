import CustomerTable from "@/components/Customers/CustomerTable";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import React from "react";

const page = () => {
  return (
    <div>
      <SectionTitle
        title="Clientes"
        subtitle="Organize todos os seus clientes nessa seção."
      />
      <CustomerTable/>
    </div>
  );
};

export default page;
