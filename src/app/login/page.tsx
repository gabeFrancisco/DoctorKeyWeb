'use client'

import { useFormik } from "formik";
import * as Yup from "yup";

import { signIn, useSession } from "next-auth/react";
import Image from "next/image";

import Logo from '../../../public/logo.png';

const page = () => {
  const session = useSession();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Insira um nome de usuário!"),
      password: Yup.string().required("A senha é obrigatória!")
    }),
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: (values) => {
      signIn('credentials', {
        username: values.username,
        password: values.password,
        redirect: true,
        callbackUrl: '/painel',
      })

    },
  });
  return (
    <div className="flex flex-row items-stretch h-screen">
      <div className="w-2/5 bg-zinc bg-gradient-to-tr from-green-300 to-green-500 h-full flex flex-col justify-evenly items-center">
      <h1 className="text-4xl font-bold text-white">Doctor Key</h1>
        <div className="bg-slate-100 p-3 rounded-lg shadow-lg">
          <form>
            <div className="m-5">
              <label htmlFor="user">Usuário</label>
              <input
              className="rounded-md border-2  block my-2 w-full p-1"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                type="text"
              />
               {formik.errors.username && (<small className="my-2 text-red-500 block">{formik.errors.username}</small>)}
            </div>
            <div className="m-5">
              <label htmlFor="password">Senha</label>
              <input
              className="rounded-md border-2  block my-2 w-full p-1"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                type="password"
              />
               {formik.errors.password && (<small className="my-2 text-red-500 block">{formik.errors.password}</small>)}
            </div>
            <div>
              <button
                onClick={() => formik.handleSubmit()}
                className="rounded-lg px-3 py-1 mx-5 mb-5 bg-green-500 text-white"
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
