import { Notification } from "@/models/Notification";
import {
  faEnvelope,
  faEnvelopeOpen,
  faMailForward,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const NotificationCard = ({ notification }: { notification: Notification }) => {
  const [read, setRead] = useState(false);
  const handleClick = () => (read ? setRead(false) : setRead(true));

  return (
    <div className="flex flex-col bg-gray-100 rounded cursor-default p-3 mx-2 my-1 text-gray-600">
      <div className="flex flex-row justify-between">
        <h4
          className={notification.readed ? "text-gray-500" : "text-green-400 "}
        >
          {notification.title}
        </h4>
        <FontAwesomeIcon
          onClick={handleClick}
          className="hover:scale-125 cursor-pointer"
          icon={read ? faEnvelope : faEnvelopeOpen}
        />
      </div>
      <small>{notification.message}</small>
      <small className="text-teal-600">@{notification.username}</small>
      <hr />
    </div>
  );
};

export default NotificationCard;
