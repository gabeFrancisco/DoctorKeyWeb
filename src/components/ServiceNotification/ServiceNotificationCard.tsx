import { ServiceOrderNotification } from "@/models/ServiceOrderNotification";
import React from "react";

const ServiceNotificationCard = ({
  serviceOrderNotification,
}: {
  serviceOrderNotification: ServiceOrderNotification;
}) => {
  return (
    <div className="flex flex-col bg-white rounded cursor-default p-3 mx-2 my-1 text-green-600">
      <div className="flex flex-row justify-between">
        <h4 className="text-gray-500">{serviceOrderNotification.title}</h4>
        <small>
          {new Date(serviceOrderNotification.createdAt!).toLocaleString()}
        </small>
        <small>{serviceOrderNotification.message}</small>
        <small>{serviceOrderNotification.state}</small>
        <small className="text-teal-600">
          @{serviceOrderNotification.username}
        </small>
      </div>
    </div>
  );
};

export default ServiceNotificationCard;
