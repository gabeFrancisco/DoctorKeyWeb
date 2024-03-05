'use client'

import useOutsideClick from "@/hooks/useOutsideClick";
import React, { useState } from "react";
import Image from "next/image";
import User from "../../../public/user.png";
import { signOut, useSession } from "next-auth/react";

const UserProfile = () => {
  const [isDrop, setIsDrop] = useState(false);
  const ref = useOutsideClick(setIsDrop);
  const { data, status } = useSession();
  return (
    <div
      className="cursor-pointer flex flex-row justify-center hover:bg-green-300 hover:rounded-lg py-1 px-3"
      onClick={() => (isDrop ? setIsDrop(false) : setIsDrop(true))}
    >
      <Image
        className="rounded-full border border-white w-8 h-8"
        src={User}
        alt="User image"
      />
      <div className="flex flex-row items-center justify-center">
        {status === "authenticated" && data !== null && (
          <div className="flex flex-row items-center">
            <p className="mx-3 text-sm">{data.user.name}</p>
          </div>
        )}
      </div>
      {isDrop ? (
        <div ref={ref} className="">
          <ul
            className="absolute rounded flex flex-col border border-gray-300 z-30 bg-gray-50 shadow right-20 top-12"
            id="dropbox"
          >
            <li
              className="text-sm px-2 py-1 text-gray-700 hover:bg-green-400 hover:text-white cursor-pointer"
              onClick={() => {}}
            >
              Configurações
            </li>
            <li
              className="text-sm px-2 py-1 text-gray-700 hover:bg-green-400 hover:text-white cursor-pointer"
              onClick={async () => {
                signOut({ callbackUrl: "/login" });
              }}
            >
              Sair
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default UserProfile;
