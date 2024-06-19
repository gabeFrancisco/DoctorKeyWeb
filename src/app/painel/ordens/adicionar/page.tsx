"use client";

import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { useAppDispatch } from "@/store/store";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const dispatch = useAppDispatch();
  const navigate = useRouter();

  const formik = useFormik({
    initialValues: {
      title: "",
      customer: "",
      // {
      //   name: "",
      //   phone: "",
      //   email: "",
      //   address: {
      //     road: "",
      //     number: "",
      //     complement: "",
      //     neighborhood: "",
      //     cep: "",
      //     city: "",
      //   },
      // },
      address: {
        road: "",
        number: "",
        complement: "",
        neighborhood: "",
        cep: "",
        city: "",
      },
      description: "",
      priority: "",
      value: "",
    },
    onSubmit: (values) => {},
  });

  return (
    <>
      <SectionTitle
        title="Nova O.S."
        subtitle="Abra uma nova ordem de serviço nessa seção."
      />
      <div className="border-gray-200 border rounded-sm my-5">
        <div className="m-5 p-5">
          <form className="flex flex-col items-center justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 text-gray-700 w-full">
              <div className="mr-5">
                <div className="mb-5">
                  <label htmlFor="title">Título</label>
                  <input
                    className="rounded-sm border block w-full px-0.5"
                    type="text"
                    id="title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                  />
                </div>

                <div className="mb-5">
                  <label htmlFor="title">Descrição</label>
                  <textarea
                    className="rounded-sm border block w-full px-0.5"
                    id="description"
                    rows={5}
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="title">Valor</label>
                  <input
                    type="text"
                    className="rounded-sm border block w-full px-0.5"
                    id="value"
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="blade">Prioridade</label>
                  <select
                    className="rounded-sm border bg-white block w-full my-2"
                    id="bladeType"
                    // value={formik.values.bladeType}
                    // onChange={formik.handleChange}
                  >
                    <option value="low">Baixa</option>
                    <option value="normal">Normal</option>
                    <option value="high">Alta</option>
                  </select>
                </div>
              </div>
              <div className="text-gray-700 pl-0 lg:pl-5 border-0 lg:border-l">
                <div className="mb-5">
                  <label htmlFor="customer">Cliente</label>
                  <input
                    className="rounded-sm border block w-full px-0.5"
                    name="customer"
                    type="text"
                    placeholder="Insira o nome ou pesquise no botão ao lado"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="phone">Telefone</label>
                  <input
                    className="rounded-sm border block w-full px-0.5"
                    name="phone"
                    type="text"
                    required
                  />

                  {/* <small className="block text-gray-500 my-2">
                    Especifique aqui o modelo do veículo
                  </small>
                  <small className="block text-gray-500 my-1">
                    Apesar de não ser indicado, você também pode colocar alguma
                    caracterista rápida no modelo para diferenciar.
                  </small> */}
                </div>
                <div className="text-gray-700 mr-5">
                  <div className="mb-5">
                    <label htmlFor="name">Rua</label>
                    <input
                      name="road"
                      className="rounded-sm border block w-full my-2"
                      // value={formik.values.road}
                      // onChange={formik.handleChange}
                      type="text"
                      required
                    />
                    {/* {formik.errors.road && (
                      <small className="my-2 text-red-500">
                        {formik.errors.road}
                      </small>
                    )} */}
                    <small className="block text-gray-500 my-2">
                      Nome do cliente
                    </small>
                  </div>

                  <div className="mb-5">
                    <label htmlFor="name">Bairro</label>
                    <input
                      name="neighborhood"
                      className="rounded-sm border block w-full my-2"
                      // value={formik.values.neighborhood}
                      // onChange={formik.handleChange}
                      type="text"
                      required
                    />
                    {/* {formik.errors.neighborhood && (
                      <small className="my-2 text-red-500">
                        {formik.errors.neighborhood}
                      </small>
                    )} */}
                    <small className="block text-gray-500 my-2">
                      Nome do cliente
                    </small>
                  </div>
                </div>
                <div className="mb-5">
                  <label htmlFor="name">Número</label>
                  <input
                    name="number"
                    className="rounded-sm border block w-full my-2"
                    // value={formik.values.number}
                    // onChange={formik.handleChange}
                    type="text"
                    required
                  />
                  {/* {formik.errors.number && (
                      <small className="my-2 text-red-500">
                        {formik.errors.number}
                      </small>
                    )} */}
                  <small className="block text-gray-500 my-2">
                    Nome do cliente
                  </small>
                </div>
                <div className="mb-5">
                  <label htmlFor="name">CEP</label>
                  <input
                    name="cep"
                    className="rounded-sm border block w-full my-2"
                    // value={formik.values.cep}
                    // onChange={formik.handleChange}
                    type="text"
                    required
                  />
                  {/* {formik.errors.cep && (
                      <small className="my-2 text-red-500">
                        {formik.errors.cep}
                      </small>
                    )} */}
                  <small className="block text-gray-500 my-2">
                    Nome do cliente
                  </small>
                </div>
              </div>
            </div>
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
                // onClick={() => formik.handleSubmit()}
                className="rounded-sm bg-green-500 text-white px-3 py-1 m-2 hover:bg-green-600 shadow"
              >
                Criar O.S.!
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default page;
