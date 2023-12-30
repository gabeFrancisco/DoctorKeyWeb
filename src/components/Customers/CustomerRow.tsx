import { Customer } from "@/models/Customer";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import DropdownItem from "../Dropdown/DropdownItem";

const CustomerRow = ({ customer }: { customer: Customer }) => {
  const navigate = useRouter();
  const readKey = () => {
    navigate.push(`/painel/clientes/${customer.id}`);
  };
  return (
    <tr
      className="hover:bg-slate-100 text-slate-600 border-b border-double border-slate-200 text-sm"
      key={customer.id}
    >
      <th
        className="px-2 lg:px-5 text-green-500 underline cursor-pointer border-r"
        onClick={readKey}
      >
        {customer.name}
      </th>
      <td className="px-2 lg:px-6 py-1">{customer.phone}</td>
      <td className="hidden lg:table-cell px-2 lg:px-6 py-1">
        {customer.email}
      </td>
      <td className="px-2 lg:px-6 py-1">{`${customer.address.road}, ${customer.address.number}`}</td>
      <td className="px-2 lg:px-6 py-1">
      <Dropdown buttonText="">  
          <DropdownItem itemName="Editar" faIcon={faPencil} onClick={() => {}} />
          <DropdownItem itemName="Remover" faIcon={faTrash} onClick={() => {}}/>
         </Dropdown>
      </td>
    </tr>
  );
};

export default CustomerRow;
