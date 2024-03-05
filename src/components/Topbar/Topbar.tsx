"use client";

import React from "react";
import Logo from "../../../public/logo-white.svg";
import Image from "next/image";
import UserProfile from "../UserProfile/UserProfile";

const Topbar = () => {
  return (
    <div className="flex flex-row items-center justify-between w-full bg-green-400 shadow px-8 py-1 top-0 fixed z-50 text-white">
      <div>
        <Image src={Logo} alt="Logo" className="w-28 md:w-36" />
      </div>
      <div>
        <UserProfile/>
      </div>
    </div>
  );
};

export default Topbar;
