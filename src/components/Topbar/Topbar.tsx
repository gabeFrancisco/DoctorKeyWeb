"use client";

import React, { useEffect, useState } from "react";
import Logo from "../../../public/logo.svg";
import Image from "next/image";
import UserProfile from "../UserProfile/UserProfile";
import ComboBox from "../ComboBox/ComboBox";
import { useAppDispatch, useAppSelector } from "@/store/store";
import {
  getActualWorkGroup,
  getAllWorkGroups,
  selectWorkGroup,
} from "@/store/features/workGroupSlice";
import WorkgroupComboBox from "../WorkgroupComboBox/WorkgroupComboBox";
import NotificationBell from "../Notification/NotificationBell";
import ServiceNotificationBell from "../ServiceNotification/ServiceNotificationBell";
import ChecklistNotificationBell from "../ChecklistNotification/ChecklistNotificationBell";

const Topbar = () => {
  const workGroups = useAppSelector((state) => state.workGroups);
  const [selectedWorkGroup, setSelectedWorkGroup] = useState<string | null>(
    null
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllWorkGroups());
  }, []);

  useEffect(() => {
    dispatch(getActualWorkGroup());
  }, []);

  useEffect(() => {
    if (selectedWorkGroup !== null) {
      if (confirm("Tem certeza que deseja mudar o grupo de serviço?")) {
        dispatch(selectWorkGroup(selectedWorkGroup!));
        window.location.reload();
      }
    }
  }, [selectedWorkGroup]);

  return (
    <div className="flex flex-row items-center justify-between w-full bg-white shadow px-8 py-1 top-0 sticky rounded z-50 text-gray-500">
      <div>
        <Image src={Logo} alt="Logo" className="w-28 md:w-36" />
      </div>
      <div className="flex flex-row items-center">
        <WorkgroupComboBox
          list={workGroups.workGroupList}
          onChange={(e) =>
            setSelectedWorkGroup(e.target.selectedOptions[0].dataset.id)
          }
          placeholder="Grupos de trabalho"
          value={workGroups.workGroup.title}
        />
        <NotificationBell />
        <ServiceNotificationBell />
        <ChecklistNotificationBell />
        <UserProfile />
      </div>
    </div>
  );
};

export default Topbar;
