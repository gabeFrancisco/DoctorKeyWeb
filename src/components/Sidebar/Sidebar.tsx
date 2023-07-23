"use client";

import React from "react";
import SidebarItem from "./SidebarItem";
import { signOut, useSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDashboard, faKey } from "@fortawesome/free-solid-svg-icons";

const links = [
  {
    title: "Painel",
    url: "/dashboard",
    icon: faDashboard
  },
  {
    title: "Chaves",
    url: "/dashboard/keys",
    icon: faKey
  },
];

const Sidebar = () => {
  const { data, status } = useSession();
  console.log(data);
  return (
    <aside className="bg-green-400 w-1/5 h-screen sticky text-slate-100">
      <div className="flex flex-col items-center m-5">
        {status === "authenticated" && data !== null && (
          <div className="flex flex-col items-center">
            <p>
              Bem vindo <i>{data.user.name}</i>
            </p>
            <a
              onClick={async () => {
                signOut({ callbackUrl: "/login" });
              }}
              className="cursor-pointer hover:text-green-200 font-semibold"
            >
              Sair
            </a>
          </div>
        )}
      </div>
      {links.map((link, key) => (
        <SidebarItem key={key} title={link.title} url={link.url} icon={link.icon}/>
      ))}
    </aside>
  );
};

export default Sidebar;
