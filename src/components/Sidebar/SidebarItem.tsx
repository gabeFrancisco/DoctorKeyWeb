"use client";

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

import { motion } from "framer-motion";

interface SidebarItemProps {
  title: string;
  url: string;
  icon: IconDefinition;
  toggle: boolean;
}

const SidebarItem = (props: SidebarItemProps) => {
  return (
    <li className="my-3 ml-5 p-1 text-gray-500">
      <Link
        className="font-normal tracking-widest text-sm lg:text-md p-0 w-1 hover:text-green-400"
        href={props.url}
      >
        <motion.div whileHover={{ x: 5 }}>
          <FontAwesomeIcon className={`mr-3 ${props.toggle ? 'text-lg' : 'text-md' } text-slate-400`} icon={props.icon} />
          {props.toggle ? null : (
            <span className="hidden lg:inline text-slate-700">{props.title}</span>
          )}
        </motion.div>
      </Link>
    </li>
  );
};

export default SidebarItem;
