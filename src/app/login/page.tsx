"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { motion } from "framer-motion";
import LoadingSkeletonButton from "@/components/LoadingSkeleton/LoadingSkeletonButton";

const page = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const session = useSession();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Insira um nome de usuário!"),
      password: Yup.string().required("A senha é obrigatória!"),
    }),
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: (values) => {
      setLoading(true);
      setError(false);
      signIn("credentials", {
        username: values.username,
        password: values.password,
        redirect: false,
      }).then((res) => {
        if (res?.error === null) {
          window.location.replace("/painel");
        } else {
          setError(true);
          formik.resetForm();
          setLoading(false);
        }
      });
    },
  });
  return (
    <div className="flex flex-col lg:flex-row items-stretch h-screen">
      <div className="w-full lg:w-2/5 bg-zinc bg-gradient-to-tr from-green-300 to-green-500 h-full flex flex-col justify-evenly items-center">
        <h1 className="text-4xl font-bold text-white">Doctor Key</h1>
        <div className="bg-slate-100 p-3 w-96 m-5 rounded-lg shadow-lg">
          <form>
            {error ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-red-400 rounded-lg px-5 py-2 text-center mx-5 my-1 text-white"
              >
                Usuário ou senha incorretos!
              </motion.div>
            ) : null}
            <div className="m-5">
              <label htmlFor="user">Usuário</label>
              <input
                className="rounded-md border-2  block my-2 w-full p-1"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                type="text"
              />
              {formik.errors.username && (
                <small className="my-2 text-red-500 block">
                  {formik.errors.username}
                </small>
              )}
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
              {formik.errors.password && (
                <small className="my-2 text-red-500 block">
                  {formik.errors.password}
                </small>
              )}
            </div>
            <div>
              <button
                onClick={() => formik.handleSubmit()}
                className="rounded-lg px-3 py-1 mx-5 mb-5 bg-green-500 text-white"
                type="button"
              >
                {loading ? <LoadingSkeletonButton/> : "Entrar"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="hidden lg:flex flex-col items-center justify-center bg-slate-200 lg:h-full w-full md:h-0 lg:w-full text-green-500">
        <h1 className="text-4xl font-bold">Doctor Key</h1>
        <h3 className="text-2xl font-bold">Seu gerenciador de chaves automotivas inteligente!</h3>
      </div>
    </div> 
  );
};

export default page;
