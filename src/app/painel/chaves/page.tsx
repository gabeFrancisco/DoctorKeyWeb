'use client'

import KeyTable from "@/components/Keys/KeyTable";
import KeyToolbar from "@/components/Keys/KeyToolbar";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { getAllKeys } from "@/store/features/keySlice";
import { useAppDispatch } from "@/store/store";
import React, { useEffect } from "react";

const Keys = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllKeys());
  }, [])
  return (
    <div>
      <SectionTitle title="Chaves" subtitle="Gerencie todas as suas chaves nessa seção" />
      {/* <KeyToolbar/> */}
      <KeyTable/>
    </div>
  );
};

export default Keys;
