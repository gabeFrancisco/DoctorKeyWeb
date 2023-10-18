"use client";

import React, { useEffect } from "react";
import SidebarItem from "./SidebarItem";
import { signOut, useSession } from "next-auth/react";
import {
  faChartBar,
  faChartColumn,
  faKey,
  faList,
  faSheetPlastic,
  faUserFriends,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import User from "../../../public/user.png";
import Image from "next/image";

const links = [
  {
    title: "Painel",
    url: "/painel",
    icon: faChartColumn,
  },
  {
    title: "Chaves",
    url: "/painel/chaves",
    icon: faKey,
  },
  {
    title: "Ordens de Serviço",
    url: "/painel/ordens",
    icon: faSheetPlastic,
  },
  {
    title: "Checklists",
    url: "/painel/checklists",
    icon: faList,
  },
  {
    title: "Clientes",
    url: "/painel/clientes",
    icon: faUserFriends,
  },
  {
    title: "Serviços",
    url: "/painel/serviços",
    icon: faWrench,
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
    <aside className="flex flex-row-reverse lg:flex-col justify-evenly lg:justify-start bg-green-500 lg:w-1/4 lg:h-screen sticky top-0 text-white shadow-2x">
      <div className="flex flex-row lg:flex-col items-center m-0 lg:m-5">
        {status === "authenticated" && data !== null && (
          <div className="relative lg:flex lg:relative flex-row lg:flex-col items-center">
            <div className="hidden lg:flex w-0 lg:w-28 mb-0 lg:mb-5">
              <Image
                className="rounded-full border-2 border-white"
                src={User}
                alt="User image"
              />
            </div>
            <p className="hidden lg:inline-block">
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
      <ul className="flex flex-row justify-center items-center lg:flex-col lg:items-start">
        {links.map((link, key) => (
          <SidebarItem
            key={key}
            title={link.title}
            url={link.url}
            icon={link.icon}
          />
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
