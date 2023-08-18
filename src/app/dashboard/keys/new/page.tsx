"use client";

import SectionTitle from "@/components/SectionTitle/SectionTitle";
import bladeTypes from "@/models/constants/bladeTypes";
import keyTypes from "@/models/constants/keyTypes";
import manufactors from "@/models/constants/manufactors";
import { postKey } from "@/store/features/keySlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useFormik } from "formik";
import { motion } from "framer-motion";
("");
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const page = () => {
  const navigate = useRouter();
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      manufactor: "",
      keyType: "",
      bladeType: "",
      model: "",
      year: "",
      buttons: 0,
      price: 0,
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      dispatch(postKey(values)).then(() => navigate.replace("/dashboard/keys"));
    },
  });
  return (
    <div>
      <SectionTitle title="Nova chave" subtitle="Adicione uma nova chave" />
      <div className="border-gray-300 border-2 border-dashed rounded-lg mt-5 mx-5">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="m-5 p-5">
            <form className="flex flex-col items-center justify-center">
              <div className="grid grid-cols-2 text-gray-700">
                <div className="text-gray-700 mr-5">
                  <div className="mb-5">
                    <label htmlFor="manufactorId">Fabricante</label>
                    <select
                      className="rounded-md border-2 bg-gray-100 block my-2 w-full"
                      id="manufactorId"
                      value={formik.values.manufactor}
                      onChange={formik.handleChange}
                    >
                      {manufactors.map((el, key) => (
                        <option
                          className="rounded-md border-2 bg-gray-100"
                          key={key}
                        >
                          {el}
                        </option>
                      ))}
                    </select>
                    <small className="block my-2 text-gray-500">
                      Selecione um frabricante nesta lista.
                    </small>
                    <small className="text-gray-500">
                      O Doctor Key©️ já vem com um número abrangente de
                      fabricantes, porém você pode adicionar algum em específico
                      em seu repositório atual.
                    </small>
                  </div>

                  <div className="mb-5">
                    <label htmlFor="keyTypeId">Tipo</label>
                    <select
                      className="rounded-md border-2 bg-gray-100 block my-2 w-full"
                      id="keyTypeId"
                      value={formik.values.keyType}
                      onChange={formik.handleChange}
                    >
                      {keyTypes.map((el, key) => (
                        <option
                          className="rounded-md border-2 bg-gray-100"
                          key={key}
                        >
                          {el}
                        </option>
                      ))}
                    </select>
                    <small className="block text-gray-500">
                      Você também pode adicionar ou remover tipos de chave na
                      seção Tipos de Chave.
                    </small>
                  </div>
                  <div className="mb-5">
                    <label htmlFor="password">Lâmina</label>
                    <select
                      className="rounded-md border-2 bg-gray-100 block w-full my-2"
                      id="bladeTypeId"
                      value={formik.values.bladeType}
                      onChange={formik.handleChange}
                    >
                      {bladeTypes.map((el, key) => (
                        <option
                          className="rounded-md border-2 bg-gray-100"
                          key={key}
                          value={el}
                        >
                          {el}
                        </option>
                      ))}
                    </select>
                    <small className="block text-gray-500">
                      Adicione ou remova tipos de lâminas na seção Lâminas.
                    </small>
                  </div>
                </div>

                <div className="ext-gray-700 pl-5 border-l-2 border-dashed">
                  <div className="mb-5">
                    <label htmlFor="model">Modelo</label>
                    <input
                      name="model"
                      className="rounded-md border-2 block w-full my-2"
                      value={formik.values.model}
                      onChange={formik.handleChange}
                      type="text"
                    />
                    <small className="block text-gray-500 my-2">
                      Especifique aqui o modelo do veículo
                    </small>
                    <small className="block text-gray-500 my-1">
                      Apesar de não ser indicado, você também pode colocar
                      alguma caracterista rápida no modelo para diferenciar.
                    </small>
                  </div>
                  <div className="mb-5">
                    <label htmlFor="year">Ano</label>
                    <input
                      name="year"
                      className="rounded-md border-2 block w-full"
                      value={formik.values.year}
                      onChange={formik.handleChange}
                      type="text"
                    />
                    <small className="block text-gray-500 my-1">
                      Especifique o ano do veículo.
                    </small>
                    <small className="block text-gray-500 my-1">
                      É possível usar uma data anual extensível como
                      "2000-2008"...
                    </small>
                  </div>
                  <div className="mb-5">
                    <label htmlFor="price">Preço</label>
                    <input
                      name="price"
                      className="rounded-md border-2 block w-full my-2"
                      value={formik.values.price}
                      onChange={formik.handleChange}
                      type="number"
                    />
                    <small className="block text-gray-500 my-1">
                      Adicione o preço final da chave.
                    </small>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5 mx-5"></div>
              {/* </div> */}
              {/* <div className="grid grid-cols-1 gap-1 text-gray-700 mt-5 px-20">
              
            </div> */}
              <div className="mt-5 p-3">
                <button
                  type="button"
                  onClick={() => navigate.replace("/dashboard/keys")}
                  className="rounded bg-red-500 text-white px-3 py-1 m-2"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  onClick={() => formik.handleSubmit()}
                  className="rounded bg-green-500 text-white px-3 py-1 m-2"
                >
                  Adicionar!
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default page;
