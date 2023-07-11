import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const layout = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  if (!session) {
    redirect("/login");
  }
  return (
    <div className="bg-slate-100 w-full h-screen">
      <Header />
      <div className="flex flex-row">
        <Sidebar />
        <h1>fsdf</h1>
      </div>
    </div>
  );
};

export default layout;
