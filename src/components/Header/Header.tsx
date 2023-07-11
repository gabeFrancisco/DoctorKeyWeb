"use client";

import React from "react";

import Link from "next/link";
import { signOut } from "next-auth/react";



const Header = () => {
  return (
    <div className=" flex flex-row items-center justify-between w-full p-3 bg-green-400 shadow-lg text-white z-20 sticky top-0 left-0">
      <div className="flex flex-row items-center">
        <div>
          <span className="mx-5 text-2xl font-bold">Doctor Key</span>
        </div>
        {/* <div className="mx-10">
          {links.map((link, key) => (
            <Link
              key={key}
              className="mx-2 hover:text-green-200"
              href={link.url}
            >
              {link.title}
            </Link>
          ))}
        </div> */}
      </div>
      <div className="flex flex-row items-center mx-10">
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
