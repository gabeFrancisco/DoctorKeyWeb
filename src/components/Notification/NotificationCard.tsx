import { Notification } from "@/models/Notification";
import { setNotificationState } from "@/store/features/notificationSlice";
import { useAppDispatch } from "@/store/store";
import {
  faEnvelope,
  faEnvelopeOpen,
  faMailForward,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const NotificationCard = ({ notification }: { notification: Notification }) => {
  const dispatch = useAppDispatch();
  const [read, setRead] = useState(notification.readed);
  const handleClick = () => {
    if (read) {
      dispatch(
        setNotificationState({ notificationId: notification.id!, state: false })
      );
      setRead(false);
    } else {
      dispatch(
        setNotificationState({
          notificationId: notification.id!,
          state: true,
        })
      );
      setRead(true);
    }
  };

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
          icon={read ? faEnvelopeOpen : faEnvelope}
        />
      </div>
      <small>{notification.message}</small>
      <small className="text-teal-600">@{notification.username}</small>
      <hr />
    </div>
  );
};

export default NotificationCard;
