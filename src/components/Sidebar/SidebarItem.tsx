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
      className={`lg:my-1 flex flex-row items-center py-3 lg:py-1 px-5 w-full overflow-x-hidden rounded-lg ${
        props.selected ? "bg-green-400 text-white py-1" : " text-gray-400"
      }`}
    >
      <Link href={props.url} className="flex flex-row flex-1">
        <motion.div whileHover={{ x: 5 }}>
          <FontAwesomeIcon
            className={`lg:mr-2 fa-fw ${
              props.toggle ? "text-lg" : " text-lg"
            } ${props.selected ? " text-white" : " text-gray-400"}lg:-2`}
            icon={props.icon}
          />
          {props.toggle ? null : (
            <span
              className={`hidden lg:inline ${
                props.selected ? "lg:font-bold" : "font-light text-gray-500"
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
