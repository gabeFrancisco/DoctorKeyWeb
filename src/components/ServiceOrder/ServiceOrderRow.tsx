import { ServiceOrder } from "@/models/ServiceOrder";
import React from "react";

const ServiceOrderRow = ({ serviceOrder }: { serviceOrder: ServiceOrder }) => {
  return (
    <tr>
      <th>{serviceOrder.id}</th>
      <td>{serviceOrder.title}</td>
      <td>{serviceOrder.description}</td>
    </tr>
  );
};

export default ServiceOrderRow;
