"use client";

import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { getAllBladeTypes } from "@/store/features/bladeTypeSlice";
import { getAllKeyTypes } from "@/store/features/keyTypeSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const page = () => {
  const navigate = useRouter();
  const dispatch = useAppDispatch();
  const keyTypes = useAppSelector((state) => state.keyTypes.keyTypeList);
  const bladeTypes = useAppSelector((state) => state.bladeTypes.bladeTypeList);

  useEffect(() => {
    dispatch(getAllKeyTypes());
    dispatch(getAllBladeTypes());
  }, []);

  const formik = useFormik({
    initialValues: {
      manufactor: "",
      model: "",
      year: "",
      buttons: 0,
      price: 0,
      keyType: keyTypes[0]?.id,
      bladeType: bladeTypes[0]?.id
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div>
      <SectionTitle title="Nova chave" subtitle="Adicione uma nova chave" />
      <div className=" border-gray-200 border-2 border-dashed rounded-lg shadow-xl mt-5 mx-20">
        <div className="m-5 p-5">
          <form className="flex flex-col items-center justify-center">
            <div className="grid grid-cols-2 gap-1 text-gray-700">
              <div className="grid grid-cols-2 gap-5 mx-5">
                <label htmlFor="manufactor">Fabricante</label>
                <input
                  name="manufactor"
                  className="rounded-md border-2"
                  value={formik.values.manufactor}
                  onChange={formik.handleChange}
                  type="text"
                />
                <label htmlFor="keyType">Tipo</label>
                <select
                  className="rounded-md border-2 bg-gray-100"
                  id="keyType"
                  value={formik.values.keyType}
                  onChange={formik.handleChange}
                >
                  {keyTypes.map((el, key) => (
                    <option
                      className="rounded-md border-2 bg-gray-100"
                      key={key}
                      value={el.id}
                    >
                      {el.name}
                    </option>
                  ))}
                </select>
                <label htmlFor="password">Lâmina</label> 
                <select
                  className="rounded-md border-2 bg-gray-100"
                  id="keyType"
                  value={formik.values.bladeType}
                  onChange={formik.handleChange}
                >
                  {bladeTypes.map((el, key) => (
                    <option
                      className="rounded-md border-2 bg-gray-100"
                      key={key}
                      value={el.id}
                    >
                      {el.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-5 mx-5">
                <label htmlFor="model">Modelo</label>
                <input
                  name="model"
                  className="rounded-md border-2"
                  value={formik.values.model}
                  onChange={formik.handleChange}
                  type="text"
                />
                <label htmlFor="year">Ano</label>
                <input
                  name="year"
                  className="rounded-md border-2"
                  value={formik.values.year}
                  onChange={formik.handleChange}
                  type="text"
                />

                <label htmlFor="price">Preço</label>
                <input
                  name="price"
                  className="rounded-md border-2"
                  value={formik.values.price}
                  onChange={formik.handleChange}
                  type="text"
                />
              </div>
            </div>
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
      </div>
    </div>
  );
};

export default page;
