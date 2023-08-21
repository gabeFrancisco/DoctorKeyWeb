import { Key } from "@/models/Key";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import "car-makes-icons/dist/style.css";
import { KeyDeleteModal } from "./KeyDeleteModal";

const KeyRow = ({ _key }: { _key: Key }) => {
  const navigate = useRouter();
  const handleKeyUpdate = () => {
    navigate.push(`/dashboard/keys/${_key.id}`);
  };

  const [removalModal, setRemovalModal] = useState(false);
  const handleDeleteModal = () => {
    removalModal ? setRemovalModal(false) : setRemovalModal(true);
  };
  return (
    <tr
      className="cursor-pointer hover:bg-slate-200 text-slate-600"
      key={_key.id}
    >
      {removalModal ? (
        <KeyDeleteModal
          handleClose={handleDeleteModal}
          keyId={_key.id}
          keyManufactor={_key.manufactor}
          keyModel={_key.model}
        />
      ) : null}

      <th onClick={handleKeyUpdate} className="px-6 py-2">{_key.model}</th>
      <td className="px-6 py-2">{_key.manufactor}</td>
      <td className="px-6 py-2">{_key.buttons}</td>
      <td className="px-6 py-2">{_key.year}</td>
      <td className="px-6 py-2">{_key.keyType}</td>
      <td className="px-6 py-2">{_key.bladeType}</td>
      <td className="px-6 py-2 text-green-500 font-bold">
        R${_key.price.toFixed(2)}
      </td>
      <td className="px-6 py-2">
        <motion.button whileHover={{ scale: 1.1 }} onClick={handleKeyUpdate}>
          <FontAwesomeIcon
            icon={faPencil}
            className="p-2 border bg-blue-400 text-white rounded-md mx-1 shadow"
            height={25}
          />
        </motion.button>
        <motion.button whileHover={{ scale: 1.1 }}>
          <FontAwesomeIcon
            icon={faTrash}
            className="p-2 border bg-red-400 text-white rounded-md mx-1 shadow"
            height={25}
            onClick={() => setRemovalModal(true)}
          />
        </motion.button>
      </td>
    </tr>
  );
};

export default KeyRow;
