"use client";

import React, { useEffect } from "react";
import SidebarItem from "./SidebarItem";
import { signOut, useSession } from "next-auth/react";
import {
  faChartBar,
  faChartColumn,
  faKey,
} from "@fortawesome/free-solid-svg-icons";
import User from "../../../public/user.png";
import Image from "next/image";

const links = [
  {
    title: "Painel",
    url: "/dashboard",
    icon: faChartColumn,
  },
  {
    title: "Chaves",
    url: "/dashboard/keys",
    icon: faKey,
  },
];

const Sidebar = () => {
  const { data, status } = useSession();
  // useEffect(() => {
  //   if (status !== "authenticated") {
  //     window.location.href = "/login";
  //   }
  // }, []);
  return (
    <aside className="bg-green-500 w-1/4 h-screen sticky top-0 text-white shadow-2x">
      <div className="flex flex-col items-center m-5">
        {status === "authenticated" && data !== null && (
          <div className="flex flex-col items-center">
            <div className="w-28 mb-5">
              <Image
                className="rounded-full border-2 border-white"
                src={User}
                alt="User image"
              />
            </div>
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
      <div className="flex flex-col">
        {links.map((link, key) => (
          <SidebarItem
            key={key}
            title={link.title}
            url={link.url}
            icon={link.icon}
          />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
