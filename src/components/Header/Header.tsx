"use client";

import React from "react";

import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data, status} = useSession()
  return (
    <div className=" flex flex-row items-center justify-between w-full p-3 bg-green-400 shadow-lg text-white z-20 sticky top-0 left-0">
      <div className="flex flex-row items-center">
        <div>
          <span className="mx-5 text-2xl font-bold">Doctor Key</span>
        </div>
      </div>
      <div className="flex flex-row items-center mx-10">
        {status === 'authenticated' && data !== null && (<p>{data.user?.name}</p>)}
        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="text-teal-700 rounded-md hover:bg-green-200 px-5 py-1 bg-slate-100 shadow-lg"
        >
          Sair
        </button>
      </div>
    </div>
  );
};

export default Header;
