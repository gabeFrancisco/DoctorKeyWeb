"use client";

import useOutsideClick from "@/hooks/useOutsideClick";
import React, { useState } from "react";
import Image from "next/image";
import User from "../../../public/user.png";
import { signOut, useSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const UserProfile = () => {
  const [isDrop, setIsDrop] = useState(false);
  const ref = useOutsideClick(setIsDrop);
  const { data, status } = useSession();
  return (
    <div className="cursor-pointer flex flex-row justify-center items-center">
      <div className="hover:bg-green-300 rounded-lg p-1 mx-2">
        <small className="text- absolute top-1 bg-red-400 px-1 rounded-full scale-90">1</small>
        <FontAwesomeIcon
          className="text-center ml-1  text-2xl"
          icon={faBell}
        />
      </div>
      <div
        className="flex flex-row p-1 hover:bg-green-300 rounded-lg"
        onClick={() => (isDrop ? setIsDrop(false) : setIsDrop(true))}
      >
        <Image
          className="rounded-full border block border-white w-8 h-8 max-w-lg"
          src={User}
          alt="User image"
        />
        <div className="flex flex-row items-center mx-2">
          {status === "authenticated" && data !== null && (
            <div className="items-center">
              <p className="text-sm">{data.user.name}</p>
            </div>
          )}
        </div>
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
