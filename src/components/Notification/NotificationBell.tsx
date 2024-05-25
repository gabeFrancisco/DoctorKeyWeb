"use client";

import useOutsideClick from "@/hooks/useOutsideClick";
import { getAllNotifications } from "@/store/features/notificationSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { forwardRef, useEffect, useState } from "react";
import NotificationDropdown from "./NotificationDropdown";
import NotificationCard from "./NotificationCard";

const NotificationBell = () => {
  const dispatch = useAppDispatch();
  const notifications = useAppSelector(
    (state) => state.notifications.notificationList
  );

  const [isDrop, setIsDrop] = useState(false);
  const ref = useOutsideClick(setIsDrop);

  useEffect(() => {
    dispatch(getAllNotifications());
  }, []);

  const [number, setNumber] = useState(notifications.length);
  useEffect(() => {
    setNumber(notifications.length);
  }, [notifications]);
  return (
    <div
      className="hover:bg-green-300 rounded-xl p-1 mx-2 cursor-pointer"
      onClick={() => (isDrop ? setIsDrop(false) : setIsDrop(true))}
    >
      <small className="text- absolute top-1 bg-red-400 px-1 rounded-full scale-90">
        {number > 0 ? number : null}
      </small>
      <FontAwesomeIcon className="text-center ml-1  text-2xl" icon={faBell} />
      {isDrop && (
        <div
          className="absolute rounded border flex flex-col
    border-gray-300 bg-gray-50 shadow z-30 right-20 w-1/4 cursor-default"
          ref={ref}
        >
          {notifications.map((el, key) => (
            <NotificationCard notification={el} key={key} />
          ))}
        </div>
      )}
    </div>
  );
};

export default NotificationBell;
