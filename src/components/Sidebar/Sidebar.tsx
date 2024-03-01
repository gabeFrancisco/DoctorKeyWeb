"use client";

import React, { useEffect, useState } from "react";
import SidebarItem from "./SidebarItem";
import { signOut, useSession } from "next-auth/react";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faChartColumn,
  faKey,
  faList,
  faSheetPlastic,
  faUserFriends,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import User from "../../../public/user.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

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
    url: "/painel/servicos",
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

  const [toggle, setToggle] = useState(false);
  const toggleSidebar = () => {
    toggle ? setToggle(false) : setToggle(true);
  };
  return (
    <aside
      id="sidebar"
      className={`overflow-y-auto overflow-x-hidden flex flex-row-reverse lg:flex-col justify-evenly lg:justify-start bg-white ${
        toggle ? "" : "lg:w-1/4"
      } lg:h-screen sticky top-0 text-slate-700 shadow-2x border-r`}
    >
      {!toggle ? (
        <div className="flex flex-row lg:flex-col items-center justify-center m-0 lg:m-5">
          {status === "authenticated" && data !== null && (
            <div className="relative lg:flex lg:relative flex-row lg:flex-col items-center">
              <div className="hidden lg:flex w-0 lg:w-28 mb-0 lg:mb-5">
                <Image
                  className="rounded-full border-2 border-white"
                  src={User}
                  alt="User image"
                />
              </div>
              <p className="hidden lg:inline-block text-center">
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
      ) : null}

      <ul className="flex flex-row justify-center items-center lg:flex-col lg:items-start bg-white">
        {links.map((link, key) => (
          <SidebarItem
            key={key}
            title={link.title}
            url={link.url}
            icon={link.icon}
            toggle={toggle}
          />
        ))}
        <div
          className="hidden lg:block my-10 ml-5 p-1 cursor-pointer bg-white"
          onClick={toggleSidebar}
        >
          <motion.div whileHover={{ x: 5 }}>
            <FontAwesomeIcon
              className=" mr-3 text-xl text-slate-400"
              icon={toggle ? faArrowAltCircleRight : faArrowAltCircleLeft}
            />
            <span className="text-slate-700">{toggle ? null : "Recolher Menu"}</span>
          </motion.div>
        </div>
      </ul>
    </aside>
  );
};

export default Sidebar;
