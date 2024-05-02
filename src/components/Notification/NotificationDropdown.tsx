import useOutsideClick from "@/hooks/useOutsideClick";
import React, { RefObject, useState } from "react";
import NotificationCard from "./NotificationCard";
import { useAppSelector } from "@/store/store";

interface NotificationDropdownProps {
  ref: RefObject<HTMLInputElement>;
}

const NotificationDropdown = (props: NotificationDropdownProps) => {
  const notifications = useAppSelector(
    (state) => state.notifications.notificationList
  );
  return (
    <div
      className="absolute rounded border flex flex-col
    border-gray-300 bg-gray-50 shadow z-30 right-20 w-1/4 cursor-default"
      ref={props.ref}
    >
      {notifications.map((el, key) => (
        <NotificationCard notification={el} key={key} />
      ))}
    </div>
  );
};

export default NotificationDropdown;
