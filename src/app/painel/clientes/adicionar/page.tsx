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
      name: ''
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
              <div className="grid grid-cols-1 lg:grid-cols-2 text-gray-700">
                <div className="text-gray-700 mr-5">
                <div className="mb-5">
                    <label htmlFor="name">Modelo</label>
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
                      Especifique aqui o modelo do veículo
                    </small>
                    <small className="block text-gray-500 my-1">
                      Apesar de não ser indicado, você também pode colocar
                      alguma caracterista rápida no modelo para diferenciar.
                    </small>
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
