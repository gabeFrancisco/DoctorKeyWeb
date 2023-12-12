"use client";

import Sidebar from "@/components/Sidebar/Sidebar";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React, { ReactNode, useEffect, useState } from "react";
import { createSignalRContext } from "react-signalr";
import * as signalR from "@microsoft/signalr";

// const SignalRContext = createSignalRContext();

const layout = async ({ children }: { children: ReactNode }) => {
  const session = useSession();
  if (!session) {
    redirect("/login");
  }

  const [connection, setConnection] = useState<null | signalR.HubConnection>(
    null
  );

  useEffect(() => {
    const connect = new signalR.HubConnectionBuilder()
      .withUrl("http://10.0.10.250:5003/socket/dashboard")
      .configureLogging(signalR.LogLevel.Information)
      .build();

    setConnection(connect);
  }, []);

  useEffect(() => {
    if (connection) {
      connection.start().then(() => {
        connection.invoke("SendMessage");
        console.log("SignalR connection started!");

        connection.on("God", (message) => {
          console.log(message);
        });
      }).catch(error => console.log(error))
    }
  });

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
