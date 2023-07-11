'use client'

import { useFormik } from "formik";
import React from "react";

import { signIn, useSession } from "next-auth/react";

const page = () => {
  const session = useSession();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values)
      signIn('credentials', {
        username: values.username,
        password: values.password,
        redirect: true,
        callbackUrl: '/dashboard',
      }).then(() => console.log(session))

    },
  });
  return (
    <div className="flex flex-row items-stretch h-screen">
      <div className="w-2/5 bg-zinc bg-gradient-to-tr from-green-200 to-green-400 h-full flex flex-col justify-center items-center">
        <div className="bg-slate-200 p-3 rounded-lg shadow-lg h-2/5">
          <form>
            <div className="m-5">
              <label htmlFor="user">Usuário</label>
              <input
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                type="text"
              />
            </div>
            <div className="m-5">
              <label htmlFor="password">Senha</label>
              <input
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                type="password"
              />
            </div>
            <div>
              <button
                onClick={() => formik.handleSubmit()}
                className="rounded-lg px-3 py-1 bg-green-400 text-white"
                type="button"
              >
                Entrar!
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="bg-slate-200 h-full w-full">
        <h1>Doctor Key</h1>
      </div>
    </div>
  );
};

export default page;
