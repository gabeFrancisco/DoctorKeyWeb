"use client";

import React, { useState } from "react";
import Modal from "react-modal";

interface KeyDeleteModalProps {
  keyId: string;
  handleClose: () => void;
}

export const KeyDeleteModal = (props: KeyDeleteModalProps) => {
  return (
    <Modal
      isOpen={true}
      style={{
        content: {
          margin: "15vh auto",
          height: "8rem",
          width: "25rem",
        },
      }}
      
    >
      <h3 className="text-xl">
        Remoção de chave
      </h3>
      <div>
        <button onClick={props.handleClose} className="border border-slate-500 text-slate-500">Cancelar</button>
        <button className="bg-red-400 text-white">Remover!</button>
      </div>
    </Modal>
  );
};
