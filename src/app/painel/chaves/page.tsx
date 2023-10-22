import KeyTable from "@/components/Keys/KeyTable";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import React from "react";

const Keys = () => {
  return (
    <div>
      <SectionTitle title="Chaves" subtitle="Gerencie todas as suas chaves nessa seção" />
      {/* <KeyToolbar/> */}
      <KeyTable/>
    </div>
  );
};

export default Keys;
