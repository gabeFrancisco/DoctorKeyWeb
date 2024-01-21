"use client";

import { deleteCustomer } from "@/store/features/customerSlice";
import { useAppDispatch } from "@/store/store";
import { useRouter } from "next/navigation";
import React from "react";
import Modal from "react-modal";

interface CustomerDeleteModalProps {
  customerId: string;
  customerName: string;
  handleClose: () => void;
  return?: boolean;
}

const CustomerDeleteModal = (props: CustomerDeleteModalProps) => {
  const dispatch = useAppDispatch();
  const navigate = useRouter();
  const handleCustomerDelete = () => {
    dispatch(deleteCustomer(props.customerId)).then(() => {
      props.handleClose()
      if(props.return){
        navigate.back();
      }
    })
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
          Você tem certeza que deseja remover o cliente:
          <span className="text-green-600 font-bold">{props.customerName}</span>
          ?
        </p>
      </div>
      <div className="flex flex-row justify-center my-5">
        <button
          onClick={props.handleClose}
          className="text-white bg-slate-600 px-3 py-1 mx-2 rounded-lg"
        >
          Cancelar
        </button>
        <button
          onClick={handleCustomerDelete}
          className="bg-red-500 text-white px-3 py-1 mx-2 rounded-lg"
        >
          Remover!
        </button>
      </div>
    </Modal>
  );
};

export default CustomerDeleteModal;
