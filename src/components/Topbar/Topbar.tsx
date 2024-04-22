"use client";

import React, { useEffect, useState } from "react";
import Logo from "../../../public/logo-white.svg";
import Image from "next/image";
import UserProfile from "../UserProfile/UserProfile";
import ComboBox from "../ComboBox/ComboBox";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { getActualWorkGroup, getAllWorkGroups, selectWorkGroup } from "@/store/features/workGroupSlice";

const Topbar = () => {
  const workGroups = useAppSelector(state => state.workGroups);
  const [selectedWorkGroup, setSelectedWorkGroup] = useState();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllWorkGroups())
  }, [])

  useEffect(() => {
    dispatch(getActualWorkGroup())
  }, [])

  useEffect(() => {
    if(confirm("Tem certeza que deseja mudar o grupo de serviço?")){
      dispatch(selectWorkGroup(workGroups.workGroup.id!))
      window.location.reload();
    }
    else{
      alert("Not now!");
    }
  }, [selectedWorkGroup])

  return (
    <div className="flex flex-row items-center justify-between w-full bg-green-400 shadow px-8 py-1 top-0 fixed z-50 text-white">
      <div>
        <Image src={Logo} alt="Logo" className="w-28 md:w-36" />
      </div>
      <div className="flex flex-row items-center">
        <ComboBox list={workGroups.workGroupList.map(wg => wg.title)} onChange={e => setSelectedWorkGroup(e.target.value) } placeholder="Grupos de trabalho" value={workGroups.workGroup.title} />
        <UserProfile />
      </div>
    </div>
  );
} 

export default Topbar;
