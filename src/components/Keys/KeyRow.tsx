import { Key } from "@/models/Key";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import { KeyDeleteModal } from "./KeyDeleteModal";

const KeyRow = ({ _key }: { _key: Key }) => {
  const navigate = useRouter();
  const handleRead = () => {
    navigate.push(`/painel/chaves/${_key.id}`);
  };

  const handleKeyUpdate = () => {
    navigate.push(`/painel/chaves/atualizar/${_key.id}`);
  };

  const [removalModal, setRemovalModal] = useState(false);
  const handleDeleteModal = () => {
    removalModal ? setRemovalModal(false) : setRemovalModal(true);
  };
  return (
    <tr
      // initial={{ opacity: 0, x: -7 }}
      // animate={{ opacity: 1, x: 0 }}
      // transition={{ duration: 0.3 }}
      className=" hover:bg-slate-100 text-slate-600 border-b border-double border-slate-200 text-sm"
      key={_key.id}
    >
      {removalModal ? (
        <KeyDeleteModal
          handleClose={handleDeleteModal}
          keyId={_key.id!}
          keyManufactor={_key.manufactor}
          keyModel={_key.model}
        />
      ) : null}

      <th
        className="px-2 lg:px-6 py-1 resize-none text-green-500 underline cursor-pointer overflow-ellipsis border-r"
        onClick={handleRead}
      >
        {_key.model}
      </th>
      <td className="px-2 lg:px-6 py-1">{_key.manufactor}</td>
      <td className="hidden lg:table-cell px-2 lg:px-6 py-1">{_key.buttons}</td>
      <td className="hidden lg:table-cell px-2 lg:px-6 py-1">{_key.year}</td>
      <td className="hidden lg:table-cell px-2 lg:px-6 py-1">{_key.keyType}</td>
      <td className="hidden lg:table-cell px-2 lg:px-6 py-1">
        {_key.bladeType}
      </td>
      <td className="px-2 lg:px-6 py-1 text-green-600 font-bold">
        R${_key.price.toFixed(2)}
      </td>
      <td className="px-2 lg:px-6 py-1">
        <motion.button whileHover={{ scale: 1.1 }} onClick={handleKeyUpdate}>
          <FontAwesomeIcon
            icon={faPencil}
            className="p-2 bg-green-500 text-white rounded-sm mx-1 shadow z-50"
            title="Atualizar chave"
            height={25}
            onClick={handleKeyUpdate}
          />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={() => setRemovalModal(true)}
          title="Remover chave"
        >
          <FontAwesomeIcon
            icon={faTrash}
            className="p-2 bg-red-500 text-white rounded-sm mx-1 shadow"
            height={25}
          />
        </motion.button>
      </td>
    </tr>
  );
};

export default KeyRow;
