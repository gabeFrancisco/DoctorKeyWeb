"use client";

import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { useAppDispatch } from "@/store/store";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const dispatch = useAppDispatch();
  const navigate = useRouter();

  return (
    <>
      <SectionTitle
        title="Nova O.S."
        subtitle="Abra uma nova ordem de serviço nessa seção."
      />
      <div className="border-gray-200 border rounded-sm my-5">
        <div className="m-5 p-5">
          <form className="flex flex-col items-center justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 text-gray-700">
              <div className="mr-5">
                <div className="mb-5">
                  <label htmlFor="title">Título</label>
                  <input
                    className="rounded-sm border block w-full px-0.5"
                    type="text"
                    id="title"
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="title">Descrição</label>
                  <textarea
                    className="rounded-sm border block w-full px-0.5"
                    id="title"
                    rows={5}
                  />
                </div>
              </div>
              <div className="text-gray-700 pl-0 lg:pl-5 border-0 lg:border-l">
                <div className="mb-5">
                  <label htmlFor="model">Modelo</label>
                  <input name="model" type="text" required />

                  <small className="block text-gray-500 my-2">
                    Especifique aqui o modelo do veículo
                  </small>
                  <small className="block text-gray-500 my-1">
                    Apesar de não ser indicado, você também pode colocar alguma
                    caracterista rápida no modelo para diferenciar.
                  </small>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default page;
