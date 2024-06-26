"use client";

import SectionTitle from "@/components/SectionTitle/SectionTitle";
import bladeTypes from "@/models/constants/bladeTypes";
import keyTypes from "@/models/constants/keyTypes";
import manufactors from "@/models/constants/manufactors";
import serviceTypes from "@/models/constants/serviceTypes";
import { postKey } from "@/store/features/keySlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import * as Yup from "yup";

const page = () => {
  const navigate = useRouter();
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      manufactor: manufactors[0],
      keyType: keyTypes[0],
      bladeType: bladeTypes[0],
      serviceType: serviceTypes[0],
      model: "",
      year: "",
      buttons: 0,
      price: 0,
      observation: "",
    },
    validationSchema: Yup.object({
      model: Yup.string().required("Modelo é obrigatório!"),
      year: Yup.string().required("Ano é obrigatório!"),
      price: Yup.number().min(1, "Preço precisa ser maior que 0!"),
    }),
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: (values) => {
      dispatch(postKey(values)).then(() => navigate.replace("/painel/chaves"));
    },
  });
  return (
    <div>
      <SectionTitle title="Nova chave" subtitle="Adicione uma nova chave" />
      <div className="border-gray-200 border rounded-sm my-5">
        <div className="m-5 p-5">
          <form className="flex flex-col items-center justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 text-gray-700">
              <div className="text-gray-700 mr-5">
                <div className="mb-5">
                  <label htmlFor="manufactorId">Fabricante</label>
                  <select
                    className="rounded-sm border bg-white block my-2 w-full"
                    id="manufactor"
                    value={formik.values.manufactor}
                    onChange={formik.handleChange}
                  >
                    {manufactors.map((el, key) => (
                      <option
                        className="rounded-sm border bg-white"
                        key={key}
                        value={el}
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
                    className="rounded-sm border bg-white block my-2 w-full"
                    id="keyType"
                    value={formik.values.keyType}
                    onChange={formik.handleChange}
                  >
                    {keyTypes.map((el, key) => (
                      <option className="rounded-sm border bg-white" key={key}>
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
                  <label htmlFor="blade">Lâmina</label>
                  <select
                    className="rounded-sm border bg-white block w-full my-2"
                    id="bladeType"
                    value={formik.values.bladeType}
                    onChange={formik.handleChange}
                  >
                    {bladeTypes.map((el, key) => (
                      <option
                        className="rounded-sm border bg-white"
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
                <div className="mb-5">
                  <label htmlFor="service">Tipo de Serviço</label>
                  <select
                    className="rounded-sm border bg-white block w-full my-2"
                    id="serviceType"
                    value={formik.values.serviceType}
                    onChange={formik.handleChange}
                  >
                    {serviceTypes.map((el, key) => (
                      <option
                        className="rounded-sm border bg-white"
                        key={key}
                        value={el}
                      >
                        {el}
                      </option>
                    ))}
                  </select>
                  <small className="block text-gray-500">
                    Especifique o tipo de serviço a ser realizado.
                  </small>
                </div>
              </div>

              <div className="text-gray-700 pl-0 lg:pl-5 border-0 lg:border-l">
                <div className="mb-5">
                  <label htmlFor="model">Modelo</label>
                  <input
                    name="model"
                    value={formik.values.model}
                    onChange={formik.handleChange}
                    type="text"
                    className="px-1"
                    required
                  />
                  {formik.errors.model && (
                    <small className="my-2 text-red-500">
                      {formik.errors.model}
                    </small>
                  )}
                  <small className="block text-gray-500 my-2">
                    Especifique aqui o modelo do veículo
                  </small>
                  <small className="block text-gray-500 my-1">
                    Apesar de não ser indicado, você também pode colocar alguma
                    caracterista rápida no modelo para diferenciar.
                  </small>
                </div>
                <div className="mb-5">
                  <label htmlFor="year">Ano</label>
                  <input
                    name="year"
                    className="rounded-sm border block w-full"
                    value={formik.values.year}
                    onChange={formik.handleChange}
                    type="text"
                  />
                  {formik.errors.year && (
                    <small className="my-2 text-red-500">
                      {formik.errors.year}
                    </small>
                  )}
                  <small className="block text-gray-500 my-1">
                    Especifique o ano do veículo.
                  </small>
                  <small className="block text-gray-500 my-1">
                    É possível usar uma data anual extensível como
                    "2000-2008"...
                  </small>
                </div>
                <div className="mb-5">
                  <label htmlFor="price">Botões</label>
                  <input
                    name="buttons"
                    className="rounded-sm border block w-full my-2"
                    value={formik.values.buttons}
                    onChange={formik.handleChange}
                    type="number"
                  />
                  <small className="block text-gray-500 my-1">
                    Adicione a quantidade de botões que a chave possui.
                  </small>
                </div>
                <div className="mb-5">
                  <label htmlFor="price">Preço</label>
                  <div className="flex flex-row items-center">
                    <p className="mr-1">R$</p>
                    <input
                      name="price"
                      className="rounded-sm border block w-full my-2"
                      value={formik.values.price}
                      onChange={formik.handleChange}
                      type="number"
                    />
                  </div>
                  {formik.errors.price && (
                    <small className="my-2 text-red-500">
                      {formik.errors.price}
                    </small>
                  )}
                  <small className="block text-gray-500 my-1">
                    Adicione o preço final da chave.
                  </small>
                </div>
                <div className="mb-5">
                  <label htmlFor="obs">Observações</label>
                  <textarea
                    name="observation"
                    id="observation"
                    className="rounded-sm border block w-full my-2"
                    value={formik.values.observation}
                    onChange={formik.handleChange}
                    cols={30}
                    rows={5}
                  />
                  <small className="block text-gray-500 my-1">
                    Descreva alguma propriedade específica sobre a chave a ser
                    adicionada.
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
                onClick={() => navigate.replace("/painel/chaves")}
                className="rounded-sm bg-red-500 text-white px-3 py-1 m-2 hover:bg-red-600 shadow"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={() => formik.handleSubmit()}
                className="rounded-sm bg-green-500 text-white px-3 py-1 m-2 hover:bg-green-600 shadow"
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
