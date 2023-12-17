import { Customer } from "@/models/Customer";
import React from "react";
import { motion } from "framer-motion";

interface Props {
  customer: Customer;
}

const CustomerCard = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="m-0 lg:m-5 border-0 rounded-sm shadow-lg"
    >
      <div className="flex flex-row items-center justify-evenly align-baseline p-1 text-white bg-green-500 rounded-tl-sm rounded-tr-sm">
      <h2 className="text-lg lg:text-2xl font-bold mx-10 my-1">
          {props.customer.name}
        </h2>
      </div>
      <div className="py-5 px-8 text-gray-600  text-sm border border-double border-gray-100 rounded-bl-xl rounded-br-xl">
      <div className="flex flex-col justify-between">
          <h3 className="my-1">Telefone: {props.customer.phone}</h3>
          <h3 className="my-1">
            Email: {props.customer.email || "Não consta"}
          </h3>
          <hr/>
          <h3 className="my-2">Endereço</h3>
          {props.customer.address ? (
            <div>
          <h3 className="my-1"> Rua: {props.customer.address.road}</h3>

            </div>
          ) : (
            <h3>Endereço não cadastrado!</h3>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default CustomerCard;
