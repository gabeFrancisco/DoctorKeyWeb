import { Key } from "@/models/Key";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const KeyRow = ({ _key }: { _key: Key }) => {
  const navigate = useRouter();
  const handleKeyUpdate = () => {
    navigate.push(`/dashboard/keys/${_key.id}`)
  }
  return (
    <tr
      className="dark:bg-gray-800 cursor-pointer hover:bg-green-200"
      key={_key.id}
      onClick={handleKeyUpdate}
    >
      <th className="px-6 py-2">{_key.model}</th>
      <td className="px-6 py-2">{_key.manufactor?.name}</td>
      <td className="px-6 py-2">{_key.buttons}</td>
      <td className="px-6 py-2">{_key.year}</td>
      <td className="px-6 py-2">{_key.keyType?.name}</td>
      <td className="px-6 py-2">{_key.bladeType?.name}</td>
      <td className="px-6 py-2 text-green-500 font-bold">
        R${_key.price.toFixed(2)}
      </td>
      <td className="px-6 py-2">
        <motion.button whileHover={{ scale: 1.1 }} onClick={handleKeyUpdate}>
          <FontAwesomeIcon
            icon={faPencil}
            className="p-2 border border-blue-400 text-blue-400 rounded-md mx-1 shadow"
            height={25}
          />
        </motion.button>
        <motion.button whileHover={{ scale: 1.1 }}>
          <FontAwesomeIcon
            icon={faTrash}
            className="p-2 border border-red-400 text-red-400 rounded-md mx-1 shadow"
            height={25}
          />
        </motion.button>
      </td>
    </tr>
  );
};

export default KeyRow;
