"use client";

import { deleteKey } from "@/store/features/keySlice";
import { useAppDispatch } from "@/store/store";
import React, { useState } from "react";
import Modal from "react-modal";

interface KeyDeleteModalProps {
  keyId: string;
  keyManufactor: string;
  keyModel: string;
  handleClose: () => void;
}

export const KeyDeleteModal = (props: KeyDeleteModalProps) => {
  const dispatch = useAppDispatch();
  const handleKeyDelete = () => {
    dispatch(deleteKey(props.keyId));
  }
  return (
    <Modal
      isOpen={true}
      style={{
        content: {
          margin: "15vh auto",
          height: "15rem",
          width: "25rem",
        },
      }}
    >
      <h3 className="text-xl mb-2 text-slate-700">Remoção de chave</h3>
      <hr />
      <div className="my-5">
        <p className="text-slate-700">
          Você tem certeza que deseja remover a chave modelo:{" "}
          <span className="text-green-600 font-bold">
            {props.keyManufactor} - {props.keyModel}{" "}
          </span>
        </p>
      </div>
      <div className="flex flex-row justify-center my-5">
        <button
          onClick={props.handleClose}
          className="border border-slate-800 text-slate-800 px-3 py-1 mx-2 rounded-lg"
        >
          Cancelar
        </button>
        <button onClick={handleKeyDelete} className="bg-red-400 text-white px-3 py-1 mx-2 rounded-lg">Remover!</button>
      </div>
    </Modal>
  );
};
