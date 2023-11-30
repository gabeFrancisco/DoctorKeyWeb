"use client";

import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { useAppDispatch } from "@/store/store";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";

const page = () => {
  const navigate = useRouter();
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
    },
    onSubmit: (values) => {},
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
                    <small className="block text-gray-500 my-2">
                      Nome do cliente
                    </small>
                  </div>

                  <div className="mb-5">
                    <label htmlFor="name">Bairro</label>
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
                    <small className="block text-gray-500 my-2">
                      Nome do cliente
                    </small>
                  </div>
                </div>
                <div className="text-gray-700 pl-0 lg:pl-5 pr-5 border-0 lg:border-l-2 lg:border-dashed">
                  <div className="mb-5">
                    <label htmlFor="name">Número</label>
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
                    <small className="block text-gray-500 my-2">
                      Nome do cliente
                    </small>
                  </div>
                  <div className="mb-5">
                    <label htmlFor="name">CEP</label>
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
                    <small className="block text-gray-500 my-2">
                      Nome do cliente
                    </small>
                  </div>
                </div>
                <div className="text-gray-700 pl-0 lg:pl-5 lg:pr-5 border-0 lg:border-l-2 lg:border-dashed">
                  <div className="mb-5">
                    <label htmlFor="name">Complemento</label>
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
                  <div className="mb-5">
                    <div>
                      <label htmlFor="name">Cidade</label>
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
                      <small className="block text-gray-500 my-2">
                        Nome do cliente
                      </small>
                    </div>
                    <div>
                      <label htmlFor="name">Estado</label>
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
                      <small className="block text-gray-500 my-2">
                        Nome do cliente
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default page;
