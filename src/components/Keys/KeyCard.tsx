import { Key } from "@/models/Key";
import React from "react";

interface Props {
  keyModel: Key;
}

const KeyCard = (props: Props) => {
  return (
    <div className="m-5 border-0 rounded-xl shadow-lg">
      <div className="flex flex-row items-center justify-evenly align-baseline p-2 text-white bg-green-500 rounded-tl-xl rounded-tr-xl">
        <h2 className="text-3xl font-bold mx-10 my-3">
          {props.keyModel.manufactor}
        </h2>
        <h2 className="text-3xl font-bold mx-10 my-3">
          {props.keyModel.model}
        </h2>
      </div>
      <div className="p-5 text-gray-600 border border-double border-gray-100 rounded-bl-xl rounded-br-xl">
        <div className="flex flex-row items-center justify-between">
          <h3>Ano de fabricação: {props.keyModel.year}</h3>
          <h3>
            Quantidade de botões: {props.keyModel.buttons}
          </h3>
          <h3>Tipo: {props.keyModel.keyType}</h3>
          <h3>Lâmina: {props.keyModel.bladeType}</h3>
          <h3>Serviço: {props.keyModel.serviceType}</h3>
        </div>

        <div className="my-5">
          <h3>Observações:</h3>
          <div className="border-b mt-2 mb-5 p-2 text-sm">
            {props.keyModel.observation.length > 1 ? props.keyModel.observation : "Sem dados!"}
          </div>
          <h3>Adicionada em: {props.keyModel.createdAt}</h3>
          <div className="my-2">
            <div className="border-b my-3"></div>
            <button className="rounded-lg text-white bg-blue-500 shadow-lg py-1 px-5 mx-1 hover:bg-blue-600">Editar</button>
            <button className="rounded-lg text-white bg-red-500 shadow-lg py-1 px-5 mx-1 hover:bg-red-600">Apagar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyCard;
