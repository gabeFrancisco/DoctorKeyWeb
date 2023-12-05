"use client";

import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { useAppDispatch } from "@/store/store";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";
import { postCustomer } from "@/store/features/customerSlice";
import { Customer } from "@/models/Customer";

const page = () => {
  const navigate = useRouter();
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      road: "",
      number: "",
      complement: "",
      neighborhood: "",
      cep: "",
      city: "",
      state: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Nome é obrigatório!"),
      phone: Yup.string().required("Telefone é obrigatório!"),
    }),
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: (values) => {
      let customer: Customer = {
        name: values.name,
        phone: values.phone,
        email: values.email,
        address: {
          road: values.road,
          number: values.number,
          complement: values.complement,
          neighborhood: values.neighborhood,
          cep: values.cep,
          city: values.city,
          state: values.state
        }
      }
      console.log(customer)
      dispatch(postCustomer(customer)).then(() =>
        navigate.replace("/painel/clientes")
      );
    },
  });

  return (
    <div>
      <SectionTitle
        title="Novo cliente"
        subtitle="Adicione um novo cliente ao seu sistema nessa seção."
      />
      <div className="border-2 border-gray-300 border-dashed rounded-lg mt-5 mx-5">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="m-5 p-5">
            <form className="flex flex-col items-center justify-center">
              <div className="pb-2 border-b border-gray-200 m-5 text-gray-600 w-full">
                <h2>Informações</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-gray-700">
                <div className="text-gray-700 mr-5">
                  <div className="mb-5">
                    <label htmlFor="name">Nome</label>
                    <input
                      name="name"
                      className="rounded-md border-2 block w-full my-2"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      type="text"
                      required
                    />
                    {formik.errors.name && (
                      <small className="my-2 text-red-500">
                        {formik.errors.name}
                      </small>
                    )}
                    <small className="block text-gray-500 my-2">Nome</small>
                  </div>
                </div>
                <div className="text-gray-700 pl-0 lg:pl-5 lg:pr-5 border-0 lg:border-l-2 lg:border-dashed">
                  <div className="mb-5">
                    <label htmlFor="name">Telefone</label>
                    <input
                      name="phone"
                      className="rounded-md border-2 block w-full my-2"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      type="text"
                      required
                    />
                    {formik.errors.phone && (
                      <small className="my-2 text-red-500">
                        {formik.errors.phone}
                      </small>
                    )}
                    <small className="block text-gray-500 my-2">
                      Telefone com DDD
                    </small>
                  </div>
                </div>
                <div className="text-gray-700 pl-0 lg:pl-5 border-0 lg:border-l-2 lg:border-dashed">
                  <div className="mb-5">
                    <label htmlFor="name">Email</label>
                    <input
                      name="email"
                      className="rounded-md border-2 block w-full my-2"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      type="email"
                      required
                    />
                    {formik.errors.email && (
                      <small className="my-2 text-red-500">
                        {formik.errors.email}
                      </small>
                    )}
                    <small className="block text-gray-500 my-2">
                      Telefone com DDD
                    </small>
                  </div>
                </div>
              </div>
              <div className="pb-2 border-b border-gray-200 m-5 text-gray-600 w-full">
                <h2>Endereço</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-gray-700">
                <div className="text-gray-700 mr-5">
                  <div className="mb-5">
                    <label htmlFor="name">Rua</label>
                    <input
                      name="road"
                      className="rounded-md border-2 block w-full my-2"
                      value={formik.values.road}
                      onChange={formik.handleChange}
                      type="text"
                      required
                    />
                    {formik.errors.road && (
                      <small className="my-2 text-red-500">
                        {formik.errors.road}
                      </small>
                    )}
                    <small className="block text-gray-500 my-2">
                      Nome do cliente
                    </small>
                  </div>

                  <div className="mb-5">
                    <label htmlFor="name">Bairro</label>
                    <input
                      name="neighborhood"
                      className="rounded-md border-2 block w-full my-2"
                      value={formik.values.neighborhood}
                      onChange={formik.handleChange}
                      type="text"
                      required
                    />
                    {formik.errors.neighborhood && (
                      <small className="my-2 text-red-500">
                        {formik.errors.neighborhood}
                      </small>
                    )}
                    <small className="block text-gray-500 my-2">
                      Nome do cliente
                    </small>
                  </div>
                </div>
                <div className="text-gray-700 pl-0 lg:pl-5 pr-5 border-0 lg:border-l-2 lg:border-dashed">
                  <div className="mb-5">
                    <label htmlFor="name">Número</label>
                    <input
                      name="number"
                      className="rounded-md border-2 block w-full my-2"
                      value={formik.values.number}
                      onChange={formik.handleChange}
                      type="text"
                      required
                    />
                    {formik.errors.number && (
                      <small className="my-2 text-red-500">
                        {formik.errors.number}
                      </small>
                    )}
                    <small className="block text-gray-500 my-2">
                      Nome do cliente
                    </small>
                  </div>
                  <div className="mb-5">
                    <label htmlFor="name">CEP</label>
                    <input
                      name="cep"
                      className="rounded-md border-2 block w-full my-2"
                      value={formik.values.cep}
                      onChange={formik.handleChange}
                      type="text"
                      required
                    />
                    {formik.errors.cep && (
                      <small className="my-2 text-red-500">
                        {formik.errors.cep}
                      </small>
                    )}
                    <small className="block text-gray-500 my-2">
                      Nome do cliente
                    </small>
                  </div>
                </div>
                <div className="text-gray-700 pl-0 lg:pl-5 lg:pr-5 border-0 lg:border-l-2 lg:border-dashed">
                  <div className="mb-5">
                    <label htmlFor="name">Complemento</label>
                    <input
                      name="complement"
                      className="rounded-md border-2 block w-full my-2"
                      value={formik.values.complement}
                      onChange={formik.handleChange}
                      type="complement"
                      required
                    />
                    {formik.errors.complement && (
                      <small className="my-2 text-red-500">
                        {formik.errors.complement}
                      </small>
                    )}
                    <small className="block text-gray-500 my-2">
                      Telefone com DDD
                    </small>
                  </div>
                  <div className="mb-5">
                    <div>
                      <label htmlFor="name">Cidade</label>
                      <input
                        name="city"
                        className="rounded-md border-2 block w-full my-2"
                        value={formik.values.city}
                        onChange={formik.handleChange}
                        type="text"
                        required
                      />
                      {formik.errors.city && (
                        <small className="my-2 text-red-500">
                          {formik.errors.city}
                        </small>
                      )}
                      <small className="block text-gray-500 my-2">
                        Nome do cliente
                      </small>
                    </div>
                    <div>
                      <label htmlFor="name">Estado</label>
                      <input
                        name="state"
                        className="rounded-md border-2 block w-full my-2"
                        value={formik.values.state}
                        onChange={formik.handleChange}
                        type="text"
                        required
                      />
                      {formik.errors.state && (
                        <small className="my-2 text-red-500">
                          {formik.errors.state}
                        </small>
                      )}
                      <small className="block text-gray-500 my-2">
                        Nome do cliente
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 p-3">
                <button
                  type="button"
                  onClick={() => navigate.replace("/painel/clientes")}
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
