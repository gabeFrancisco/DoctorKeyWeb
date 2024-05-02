"use client";

import useOutsideClick from "@/hooks/useOutsideClick";
import { getAllNotifications } from "@/store/features/notificationSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import NotificationDropdown from "./NotificationDropdown";

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
      {isDrop ? <NotificationDropdown ref={ref} /> : null}
    </div>
  );
};

export default NotificationBell;
