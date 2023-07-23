import Sidebar from "@/components/Sidebar/Sidebar";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

const layout = async ({children}: {children: ReactNode}) => {
  const session = await getServerSession(authOptions);
  // console.log(session);
  if (!session) {
    redirect("/login");
  }
  return (
    <div className="bg-slate-100 w-full h-screen">
      {/* <Header /> */}
      <div className="flex flex-row">
        <Sidebar />
        <div className="m-7 block">
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;
