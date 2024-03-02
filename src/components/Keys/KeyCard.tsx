"use client";

import { Key } from "@/models/Key";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { KeyDeleteModal } from "./KeyDeleteModal";
import { motion } from "framer-motion";

interface Props {
  keyModel: Key;
}

const KeyCard = (props: Props) => {
  const navigate = useRouter();
  const handleKeyUpdate = () => {
    navigate.push(`/painel/chaves/atualizar/${props.keyModel.id}`);
  };
  const [removalModal, setRemovalModal] = useState(false);
  const handleDeleteModal = () => {
    removalModal ? setRemovalModal(false) : setRemovalModal(true);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="m-0 lg:my-5 border-0 rounded-sm shadow-lg"
    >
      {removalModal ? (
        <KeyDeleteModal
          handleClose={handleDeleteModal}
          keyId={props.keyModel.id!}
          keyManufactor={props.keyModel.manufactor}
          keyModel={props.keyModel.model}
          return
        />
      ) : null}
      <div className="flex flex-row align-baseline p-2 text-white bg-green-400 rounded-tl-sm rounded-tr-sm">
        <h2 className="text-lg lg:text-2xl font-bold mx-2 my-1">
          {props.keyModel.manufactor}
        </h2>
        <h2 className="text-lg lg:text-2xl font-bold mx-2  my-1">
          {props.keyModel.model}
        </h2>
      </div>
      <div className="py-5 px-8 text-gray-600  border text-sm border-double border-gray-100 rounded-bl-xl rounded-br-xl">
        <div className="flex flex-col justify-between">
          <h3 className="my-1">Ano de fabricação: {props.keyModel.year}</h3>
          <h3 className="my-1">
            Quantidade de botões: {props.keyModel.buttons}
          </h3>
          <h3 className="my-1">Tipo: {props.keyModel.keyType}</h3>
          <h3 className="my-1">Lâmina: {props.keyModel.bladeType}</h3>
          <h3 className="my-1">Serviço: {props.keyModel.serviceType}</h3>
        </div>
        <hr/>
        <div className="my-5">
          <h3>Observações:</h3>
          <div className="border-b mt-2 mb-5 py-2 text-sm">
            {props.keyModel.observation.length > 1
              ? props.keyModel.observation
              : "Sem dados!"}
          </div>
          <h3>Adicionada em: {props.keyModel.createdAt}</h3>
          <div className="my-2">
            <div className="border-b my-3"></div>
            <button
              onClick={() => navigate.back()}
              className="border border-green-500 rounded-sm text-green-500 bg-white shadow-lg py-1 px-5 mr-1 hover:bg-green-400 hover:text-white"
            >
              Voltar
            </button>
            <button
              onClick={handleKeyUpdate}
              className="rounded-sm text-white bg-blue-500 shadow-lg py-1 px-5 mx-1 hover:bg-blue-600"
            >
              Editar
            </button>
            <button
              onClick={handleDeleteModal}
              className="rounded-sm text-white bg-red-500 shadow-lg py-1 px-5 m-1 hover:bg-red-600"
            >
              Apagar
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default KeyCard;
