'use client'

import KeyToolbar from "@/components/KeyToolbar/KeyToolbar";
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
      <KeyToolbar/>
      <button className="text-white bg-blue-400 px-2 py-1 rounded-md">Load keys!</button>
    </div>
  );
};

export default Keys;
