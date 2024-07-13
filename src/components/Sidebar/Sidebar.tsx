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
import { usePathname } from "next/navigation";
import path from "path";

const Sidebar = () => {
  const [links, setLinks] = useState([
    {
      title: "Painel",
      url: "/painel",
      icon: faChartColumn,
      selected: false,
    },
    {
      title: "Chaves",
      url: "/painel/chaves",
      icon: faKey,
      selected: false,
    },
    {
      title: "O.S",
      url: "/painel/ordens",
      icon: faSheetPlastic,
      selected: false,
    },
    {
      title: "Checklists",
      url: "/painel/checklists",
      icon: faList,
      selected: false,
    },
    {
      title: "Clientes",
      url: "/painel/clientes",
      icon: faUserFriends,
      selected: false,
    },
    {
      title: "Serviços",
      url: "/painel/servicos",
      icon: faWrench,
      selected: false,
    },
  ]);
  const pathname = usePathname();
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

  useEffect(() => {
    let newLinks = links.map((el) => {
      // el.selected = false
      if (pathname === el.url) {
        el.selected = true;
      } else {
        el.selected = false;
      }
      return el;
    });
    setLinks(newLinks);
  }, [pathname]);
  return (
    <aside
      id="sidebar"
      className={`overflow-x-hidden overflow-y-auto overflow-x-h shadow-none lg:drop-shadow-lg lg:py-10 flex flex-row-reverse lg:flex-col justify-evenly lg:justify-start bg-white ${
        toggle ? "" : "lg:w-1/5"
      } lg:h-screen sticky top-12 lg:top-0 lg:px-3 text-gray-600 shadow-lg lg:shadow-lg border-b border-gray-200 lg:border-0`}
    >
      <ul className="flex flex-row lg:sticky lg:top-4 justify-center items-center lg:flex-col lg:items-start bg-white">
        {links.map((link, key) => (
          <SidebarItem
            key={key}
            title={link.title}
            url={link.url}
            icon={link.icon}
            toggle={toggle}
            selected={link.selected}
          />
        ))}
        <div
          className="hidden lg:block px-5 my-10 cursor-pointer bg-white"
          onClick={toggleSidebar}
        >
          <motion.div whileHover={{ x: 5 }}>
            <FontAwesomeIcon
              className=" mr-3 text-xl text-gray-400"
              icon={toggle ? faArrowAltCircleRight : faArrowAltCircleLeft}
            />
            <span className="text-gray-500">
              {toggle ? null : "Recolher Menu"}
            </span>
          </motion.div>
        </div>
      </ul>
    </aside>
  );
};

export default Sidebar;
