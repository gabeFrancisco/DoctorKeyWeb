import useOutsideClick from "@/hooks/useOutsideClick";
import React, { useState } from "react";
import Image from "next/image";
import User from "../../../public/user.png";

const UserProfile = () => {
  const [isDrop, setIsDrop] = useState(false);
  const ref = useOutsideClick(setIsDrop);
  return (
    <div
      className="w-8 h-8"
      onClick={() => (isDrop ? setIsDrop(false) : setIsDrop(true))}
    >
      <Image
        className="rounded-full border border-white cursor-pointer hover:border-2 hover:border-green-200"
        src={User}
        alt="User image"
      />
      {isDrop ? (
        <div ref={ref}>
          <ul
            className="absolute rounded-sm flex flex-col border border-gray-300 z-30 bg-gray-50 shadow right-10"
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
              onClick={() => {}}
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
