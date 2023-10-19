"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { motion } from "framer-motion";
import LoadingSkeletonButton from "@/components/LoadingSkeleton/LoadingSkeletonButton";

import Logo from "../../../public/logo.svg";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

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
      <div className="w-full h-screen lg:w-2/5 bg-slate-50 flex flex-col justify-start items-center">
        <motion.div
          initial={{ translateY: -10, opacity: 0 }}
          animate={{ translateY: 10, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="p-12 mb-5 mt-5"
        >
          <Image src={Logo} alt="Doctor Key" />
        </motion.div>
        <motion.div
          initial={{ translateY: -10, opacity: 0 }}
          animate={{ translateY: 10, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="bg-slate-50 p-3 w-96 m-5 rounded-lg border shadow-lg"
        >
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
              <motion.button
                whileHover={{ translateY: -3 }}
                onClick={() => formik.handleSubmit()}
                className="rounded-lg px-7 py-2 mx-5 mb-5 bg-green-500 text-white"
                type="button"
              >
                {loading ? <LoadingSkeletonButton /> : "Acessar!"}
              </motion.button>
            </div>
            <div>
              <div>
                <Link
                  className="text-green-500 mx-5 my-1 hover:text-green-700 hover:underline text-sm"
                  href={"#"}
                >
                  Esqueci minha senha!
                </Link>
              </div>
              <div>
                <Link
                  className="text-green-500 mx-5 my-1 hover:text-green-700 hover:underline text-sm"
                  href={"#"}
                >
                  Não tenho cadastro.
                </Link>
              </div>
            </div>
          </form>
        </motion.div>
        <div className="text-slate-400">
          Doctor Key © {new Date().getFullYear().toString()}
        </div>
      </div>
      <div className="hidden lg:flex flex-col items-center justify-evenly lg:h-full w-full md:h-0 lg:w-full text-white landing">
        <motion.h3
          initial={{ translateY: -30, opacity: 0 }}
          animate={{ translateY: 5, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="text-6xl font-extrabold m-16 text-center"
        >
          Seu gerenciador de chaves automotivas inteligente!
        </motion.h3>
        <motion.div
          initial={{ translateY: -30, opacity: 0 }}
          animate={{ translateY: 5, opacity: 1 }}
          transition={{ duration: 1.5, delay: 2 }}
          className="m-16"
        >
          <TypeAnimation
            sequence={[
              "Gestão completa de Chaves",
              2000,
              "Gestão de Clientes e Serviços",
              2000,
              "Checklists Técnicos",
              2000,
              "Marketing e Pós-venda",
              2000,
            ]}
            speed={70}
            className="text-4xl font-bold"
            repeat={Infinity}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default page;
