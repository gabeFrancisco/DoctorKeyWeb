"use client";

import Sidebar from "@/components/Sidebar/Sidebar";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React, { ReactNode, useEffect, useState } from "react";

// const SignalRContext = createSignalRContext();

const layout = async ({ children }: { children: ReactNode }) => {
  const session = useSession();
  if (!session) {
    redirect("/login");
  }

  return (
    <div className="bg-white w-full h-full">
      {/* <Header /> */}
      <div className="flex flex-col lg:flex-row">
        <Sidebar />
        <div className="p-5 lg:p-2 lg:m-7 flex flex-col items-stretch w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;
