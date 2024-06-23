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
      className={`lg:my-1 py-3 lg:py-1 px-5 w-full overflow-x-hidden ${
        props.selected
          ? "bg-green-400 text-white py-1"
          : "font-normal text-gray-400"
      }`}
    >
      <Link
        className={`font-normal tracking-widest text-sm lg:text-md p-0 w-1 ${
          props.toggle ? "bg-green" : "bg-white"
        }`}
        href={props.url}
      >
        <motion.div whileHover={{ x: 5 }}>
          <FontAwesomeIcon
            className={`${props.toggle ? "text-lg" : "lg:hidden text-lg"} ${
              props.selected
                ? "lg:font-bold text-white"
                : "font-normal text-gray-400"
            } lg:py-2`}
            icon={props.icon}
          />
          {props.toggle ? null : (
            <span
              className={`hidden lg:inline ${
                props.selected ? "lg:font-bold" : "font-normal text-gray-600"
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
