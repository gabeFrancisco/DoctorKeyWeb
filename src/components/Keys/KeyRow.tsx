import { Key } from "@/models/Key";
import React from "react";

const KeyRow = ({ _key }: { _key: Key }) => {
  return (
    <tr className="dark:bg-gray-800 cursor-pointer hover:bg-green-200" key={_key.id}>
      <th className="px-6 py-2">{_key.model}</th>
      <td className="px-6 py-2">{_key.manufactor?.name}</td>
      <td className="px-6 py-2">{_key.year}</td>
      <td className="px-6 py-2">{_key.keyType?.name}</td>
      <td className="px-6 py-2">{_key.bladeType?.name}</td>
      <td className="px-6 py-2 text-green-500 font-bold">
        R${_key.price.toFixed(2)}
      </td>
    </tr>
  );
};

export default KeyRow;
