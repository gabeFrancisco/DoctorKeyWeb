import { Customer } from "@/models/Customer";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React from "react";

const CustomerRow = ({ customer }: { customer: Customer }) => {
  return (
    <tr
      className="hover:bg-slate-100 text-slate-600 border-b border-double border-slate-200"
      key={customer.id}
    >
      <th className="px-2 lg:px-5 text-green-500 underline cursor-pointer border-r border-dashed">{customer.name}</th>
      <td className="px-2 lg:px-6 py-2">{customer.phone}</td>
      <td className="hidden lg:table-cell px-2 lg:px-6 py-2">{customer.email}</td>
      <td className="px-2 lg:px-6 py-2">{`${customer.address.road}, ${customer.address.number}`}</td>
      <td className="px-2 lg:px-6 py-2">
        <motion.button whileHover={{ scale: 1.1 }}>
          <FontAwesomeIcon
            icon={faPencil}
            className="p-2 bg-green-500 text-white rounded-md mx-1 shadow z-50"
            title="Atualizar chave"
            height={25}
            // onClick={handleKeyUpdate}
          />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          // onClick={() => setRemovalModal(true)}
          title="Remover chave"
        >
          <FontAwesomeIcon
            icon={faTrash}
            className="p-2 bg-red-500 text-white rounded-md mx-1 shadow"
            height={25}
          />
        </motion.button>
      </td>
    </tr>
  );
};

export default CustomerRow;
