import { Notification } from "@/models/Notification";
import { faEnvelope, faMailForward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const NotificationCard = ({ notification }: { notification: Notification }) => {
  return (
    <div className="flex flex-col bg-gray-100 rounded cursor-default p-3 mx-2 my-1 text-gray-500">
      <div className="flex flex-row justify-between">
        <strong className="text-green-400">{notification.title}</strong>
        <FontAwesomeIcon icon={faEnvelope} />
      </div>
      <div>{notification.message}</div>
      <hr />
    </div>
  );
};

export default NotificationCard;
