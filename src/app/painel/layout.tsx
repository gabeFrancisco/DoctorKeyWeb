"use client";

import Sidebar from "@/components/Sidebar/Sidebar";
import Topbar from "@/components/Topbar/Topbar";
import {
  connectToWebSocket,
  getActualWorkGroup,
  setConnecting,
} from "@/store/features/workGroupSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import * as signalR from "@microsoft/signalr";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { apiUrl } from "@/services/api";
import { AppHubService } from "@/services/appHubService";

// const SignalRContext = createSignalRContext();

const layout = ({ children }: { children: ReactNode }) => {
  const session = useSession();
  const dispatch = useAppDispatch();
  const token = session.data?.user.accessToken;
  const workgroupId = useAppSelector((state) => state.workGroups.workGroup.id);

  if (!session) {
    redirect("/login");
  }

  useEffect(() => {
    dispatch(getActualWorkGroup());
  }, []);

  useEffect(() => {
    session.status === "authenticated" && token && workgroupId
      ? new AppHubService(token!, workgroupId!)
      : null;
  }, [session.status === "authenticated" && workgroupId]);

  return (
    <div className="bg-slate-50 w-full h-full">
      {/* <Header /> */}
      <div className="flex flex-col items-stretch w-full">
        <Topbar />
        <div className="flex flex-col lg:flex-row">
          <Sidebar />
          <div className="px-5 lg:p-5 lg:mx-7 mt-5 rounded shadow w-full bg-white">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default layout;
