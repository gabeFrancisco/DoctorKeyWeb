"use client";

import React from "react";
import Logo from "../../../public/logo-white.svg";
import Image from "next/image";
import UserProfile from "../UserProfile/UserProfile";
import ComboBox from "../ComboBox/ComboBox";

const Topbar = () => (
  <div className="flex flex-row items-center justify-between w-full bg-green-400 shadow px-8 py-1 top-0 fixed z-50 text-white">
    <div>
      <Image src={Logo} alt="Logo" className="w-28 md:w-36" />
    </div>
    <div className="flex flex-row items-center">
      <ComboBox list={["A", "B", "C"]} onChange={() => { } } placeholder="Grupos de trabalho" value="MegaKey" />
      <UserProfile />
    </div>
  </div>
);

export default Topbar;
