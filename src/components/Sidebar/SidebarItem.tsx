"use client";

import {
  IconDefinition,
  findIconDefinition,
} from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

interface SidebarItemProps {
  title: string;
  url: string;
  icon: IconDefinition | React.ReactElement;
  toggle: boolean;
  selected: boolean;
}

const SidebarItem = (props: SidebarItemProps) => {
  return (
    <li
      className={`lg:my-1 flex flex-row items-center py-3 lg:py-1 px-5 w-full overflow-x-hidden rounded-lg ${
        props.selected
          ? "bg-green-400 text-white py-1"
          : " text-gray-400 hover:bg-green-200"
      }`}
    >
      <Link href={props.url} className="flex flex-row flex-1">
        <FontAwesomeIcon
          className={`lg:mr-2 fa-fw ${props.toggle ? "text-lg" : " text-lg"} ${
            props.selected ? " text-white" : " text-gray-400"
          }lg:-2`}
          icon={props.icon as IconDefinition}
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
      </Link>
    </li>
  );
};

export default SidebarItem;
