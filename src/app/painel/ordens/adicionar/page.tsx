"use client";

import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { useAppDispatch } from "@/store/store";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const dispatch = useAppDispatch();
  const navigate = useRouter();

  return (
    <>
      <SectionTitle
        title="Nova O.S."
        subtitle="Abra uma nova ordem de serviço nessa seção."
      />
      <div className="border-gray-300 border-2 border-dashed rounded-lg mt-5 mx-5"></div>
    </>
  );
};

export default page;
