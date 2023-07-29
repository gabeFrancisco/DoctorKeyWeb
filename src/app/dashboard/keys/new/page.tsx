"use client";

import api from "@/app/services/api";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { getAllBladeTypes } from "@/store/features/bladeTypeSlice";
import { getAllKeyTypes } from "@/store/features/keyTypeSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const page = () => {
  const navigate = useRouter();
  const dispatch = useAppDispatch();
  const keyTypes = useAppSelector((state) => state.keyTypes.keyTypeList);
  const bladeTypes = useAppSelector(state => state.bladeTypes.bladeTypeList);

  useEffect(() => {
    dispatch(getAllKeyTypes());
    dispatch(getAllBladeTypes())
  }, []);
  return (
    <div>
      <SectionTitle title="Nova chave" subtitle="Adicione uma nova chave" />
      <div className=" border-gray-200 border-2 border-dashed rounded-lg shadow-xl mt-5 mx-20">
        <div className="m-5 p-5">
          <form className="flex flex-col items-center justify-center">
            <div className="grid grid-cols-2 gap-1 text-gray-700">
              <div className="grid grid-cols-2 gap-5 mx-5">
                <label htmlFor="user">Fabricante</label>
                <input
                  name="username"
                  className="rounded-md border-2"
                  // value={formik.values.username}
                  // onChange={formik.handleChange}
                  type="text"
                />
                <label htmlFor="password">Tipo</label>
                <select
                  className="rounded-md border-2 bg-gray-100"
                  id="keyType"
                >
                  {keyTypes.map((el, key) => (
                    <option
                      className="rounded-md border-2 bg-gray-100"
                      key={key}
                    >
                      {el.name}
                    </option>
                  ))}
                </select>
                <label htmlFor="password">Lâmina</label>
                <select
                  className="rounded-md border-2 bg-gray-100"
                  id="keyType"
                >
                  {bladeTypes.map((el, key) => (
                      <option
                      className="rounded-md border-2 bg-gray-100"
                      key={key}
                    >
                      {el.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-5 mx-5">
                <label htmlFor="password">Modelo</label>
                <input
                  name="password"
                  className="rounded-md border-2"
                  // value={formik.values.password}
                  // onChange={formik.handleChange}
                  type="text"
                />
                <label htmlFor="password">Ano</label>
                <input
                  name="password"
                  className="rounded-md border-2"
                  // value={formik.values.password}
                  // onChange={formik.handleChange}
                  type="text"
                />
                <label htmlFor="password">Quantidade de botões</label>
                <input
                  name="password"
                  className="rounded-md border-2"
                  // value={formik.values.password}
                  // onChange={formik.handleChange}
                  type="text"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-1 text-gray-700 mt-5 px-20">
              <div className="grid grid-cols-2 gap-5 mx-5">
                <label htmlFor="password">Preço</label>
                <input
                  name="password"
                  className="rounded-md border-2"
                  // value={formik.values.password}
                  // onChange={formik.handleChange}
                  type="text"
                />
              </div>
            </div>
            <div className="mt-5 p-3">
              <button
                type="button"
                onClick={() => navigate.replace("/dashboard/keys")}
                className="rounded bg-red-500 text-white px-3 py-1 m-2"
              >
                Cancelar
              </button>
              <button className="rounded bg-green-500 text-white px-3 py-1 m-2">
                Adicionar!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
