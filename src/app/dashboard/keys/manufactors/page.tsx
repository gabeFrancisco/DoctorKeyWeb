"use client";

import ManufactorRow from "@/components/Manufactor/ManufactorRow";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { getAllManufactors } from "@/store/features/manufactorSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import React, { useEffect } from "react";

const page = () => {
  const dispatch = useAppDispatch();
  const manufactors = useAppSelector(
    (state) => state.manufactors.manufactorList
  );

  useEffect(() => {
    dispatch(getAllManufactors());
  }, []);
  return (
    <div>
      <SectionTitle
        title="Marcas"
        subtitle="O Doctor Key©️ já consta com algumas montadoras pré-definidas. Aqui você pode adicionar alguma marca especifica se quiser."
      />
      {manufactors.map((el) => (
        <ManufactorRow manufactor={el} />
      ))}
    </div>
  );
};

export default page;
