"use client";

import React from "react";
import Logo from "../../../public/logo-white.svg";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import UserProfile from "../UserProfile/UserProfile";

const Topbar = () => {
  const { data, status } = useSession();
  return (
    <div className="flex flex-row items-center justify-between w-full bg-green-400 shadow px-8 lg:px-14 py-2 top-0 fixed z-50 text-white">
      <div>
        <Image src={Logo} alt="Logo" className="w-28 md:w-36" />
      </div>
      <div>
        <div className="flex flex-row items-center justify-center">
          {status === "authenticated" && data !== null && (
            <div className="flex flex-row items-center">
              <UserProfile/>
              <p className="mx-3 text-sm">{data.user.name}</p>
              {/* <a
                onClick={async () => {
                  signOut({ callbackUrl: "/login" });
                }}
                className="cursor-pointer hover:text-green-200 font-semibold"
              >
                Sair
              </a> */}
            
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
