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
  selected: boolean;
}

const SidebarItem = (props: SidebarItemProps) => {
  return (
    <li
      className={`lg:my-1 py-2 lg:py-1 px-5 w-full text-white ${
        props.selected ? "bg-white text-green-400" : "font-normal text-white"
      }`}
    >
      <Link
        className="font-normal tracking-widest text-sm lg:text-md p-0 w-1 hover:text-green-400"
        href={props.url}
      >
        <motion.div whileHover={{ x: 5 }}>
          <FontAwesomeIcon
            className={`${
              props.toggle ? "text-lg" : "lg:hidden text-md"
            } ${
              props.selected
                ? "lg:font-bold text-green-400"
                : "font-normal text-white"
            }`}
            icon={props.icon}
          />
          {props.toggle ? null : (
            <span
              className={`hidden lg:inline ${
                props.selected
                  ? "lg:font-bold text-green-400"
                  : "font-normal text-white"
              }`}
            >
              {props.title}
            </span>
          )}
        </motion.div>
      </Link>
    </li>
  );
};

export default SidebarItem;
