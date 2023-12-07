import Sidebar from "@/components/Sidebar/Sidebar";
import WSComponent from "@/components/WebSocket/WSComponent";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React, { ReactNode, useEffect } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";

const layout = async ({ children }: { children: ReactNode }) => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }

  return (
    <WSComponent>
      <div className="bg-white w-full h-full">
        {/* <Header /> */}
        <div className="flex flex-col lg:flex-row">
          <Sidebar />
          <div className="p-5 lg:p-2 lg:m-7 flex flex-col items-stretch w-full">
            {children}
          </div>
        </div>
      </div>
    </WSComponent>
  );
};

export default layout;
