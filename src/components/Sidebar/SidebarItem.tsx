import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

interface SidebarItemProps {
  title: string;
  url: string;
  icon: IconDefinition;
}

const SidebarItem = (props: SidebarItemProps) => {
  return (
    <div className="my-2 m-10 p-3 text-white font-bold rounded-xl">
      <Link className=" hover:text-slate-200" href={props.url}>
        <FontAwesomeIcon className="mr-3" icon={props.icon} />
        {props.title}
      </Link>
    </div>
  );
};

export default SidebarItem;
