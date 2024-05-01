"use client";

import Sidebar from "@/components/Sidebar/Sidebar";
import Topbar from "@/components/Topbar/Topbar";
import {
  connectToWebSocket,
  setConnecting,
} from "@/store/features/workGroupSlice";
import { useAppDispatch } from "@/store/store";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import * as signalR from "@microsoft/signalr";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { apiUrl } from "@/services/api";
import { AppHubService } from "@/services/appHubService";

// const SignalRContext = createSignalRContext();

const layout = async ({ children }: { children: ReactNode }) => {
  const session = useSession();
  const dispatch = useAppDispatch();
  const token = session.data?.user.accessToken;
  if (!session) {
    redirect("/login");
  }

  useEffect(() => {
    session.status === "authenticated" && token ? new AppHubService(token!) : null
  }, [session.status === "authenticated"]);

  return (
    <div className="bg-white w-full h-full">
      {/* <Header /> */}
      <div className="flex flex-col items-stretch w-full">
        <Topbar />
        <div className="flex flex-col lg:flex-row">
          <Sidebar />
          <div className="px-5 lg:p-2 lg:mx-7  mt-16 w-full">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default layout;
