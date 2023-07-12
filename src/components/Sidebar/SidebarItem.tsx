import Link from "next/link";
import React from "react";

interface SidebarItemProps {
  title: string;
  url: string;
}

const SidebarItem = (props: SidebarItemProps) => {
  return (
    <div className="my-2 m-10 p-3 text-white font-bold rounded-xl">
      <Link href={props.url}>{props.title}</Link>
    </div>
  );
};

export default SidebarItem;
