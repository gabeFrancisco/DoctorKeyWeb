'use client'

import { useFormik } from "formik";
import * as Yup from "yup";

import { signIn, useSession } from "next-auth/react";

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
      console.log(values)
      signIn('credentials', {
        username: values.username,
        password: values.password,
        redirect: true,
        callbackUrl: '/painel',
      }).then(() => console.log(session))

    },
  });
  return (
    <div className="flex flex-row items-stretch h-screen">
      <div className="w-2/5 bg-zinc bg-gradient-to-tr from-green-300 to-green-500 h-full flex flex-col justify-center items-center">
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
               {formik.errors.username && (<small className="my-2 text-red-500 block">{formik.errors.username}</small>)}
            </div>
            <div className="m-5">
              <label htmlFor="password">Senha</label>
              <input
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
                className="rounded-lg px-3 py-1 bg-green-500 text-white"
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
