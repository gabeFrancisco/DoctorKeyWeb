import { Customer } from "@/models/Customer";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import DropdownItem from "../Dropdown/DropdownItem";
import CustomerDeleteModal from "./CustomerDeleteModal";

const CustomerRow = ({ customer }: { customer: Customer }) => {
  const navigate = useRouter();
  const handleRead = () => {
    navigate.push(`/painel/clientes/${customer.id}`);
  };

  const [removalModal, setRemovalModal] = useState(false);
  const handleDeleteModal = () => {
    removalModal ? setRemovalModal(false) : setRemovalModal(true);
  };
  return (
    <tr
      className="hover:bg-slate-100 text-slate-600 border-b border-double border-slate-200 text-sm"
      key={customer.id}
    >
      {removalModal ? (
        <CustomerDeleteModal
          handleClose={handleDeleteModal}
          customerId={customer.id!}
          customerName={customer.name}
        />
      ) : null}
      <th
        className="px-2 lg:px-5 text-green-500 underline cursor-pointer border-r"
        onClick={handleRead}
      >
        {customer.name}
      </th>
      <td className="px-2 lg:px-6 py-1">{customer.phone}</td>
      <td className="hidden lg:table-cell px-2 lg:px-6 py-1">
        {customer.email}
      </td>
      <td className="px-2 lg:px-6 py-1">{`${customer.address!.road}, ${
        customer.address!.number
      }`}</td>
      <td className="px-2 lg:px-6 py-1">
        <Dropdown buttonText="">
          <DropdownItem
            itemName="Editar"
            faIcon={faPencil}
            onClick={() => {}}
          />
          <DropdownItem
            itemName="Remover"
            faIcon={faTrash}
            onClick={handleDeleteModal}
          />
        </Dropdown>
      </td>
    </tr>
  );
};

export default CustomerRow;
