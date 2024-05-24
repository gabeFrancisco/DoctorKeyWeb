import { ServiceOrder } from "@/models/ServiceOrder";
import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import DropdownItem from "../Dropdown/DropdownItem";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

const ServiceOrderRow = ({ serviceOrder }: { serviceOrder: ServiceOrder }) => {
  return (
    <tr>
      <th className="px-2 lg:px-6 py-1 resize-none">{serviceOrder.title}</th>
      <td className="hidden lg:table-cell px-2 lg:px-6 py-1">
        {serviceOrder.description}
      </td>
      <td className="px-2 lg:px-6 py-1">
        {new Date(serviceOrder.createdAt!).toLocaleDateString()}
      </td>
      <td>R${serviceOrder.value.toFixed(2)}</td>
      <td>
        <Dropdown buttonText="">
          <DropdownItem
            itemName="Editar"
            faIcon={faPencil}
            onClick={() => {}}
          />
          <DropdownItem
            itemName="Remover"
            faIcon={faTrash}
            onClick={() => {}}
          />
        </Dropdown>
      </td>
    </tr>
  );
};

export default ServiceOrderRow;
