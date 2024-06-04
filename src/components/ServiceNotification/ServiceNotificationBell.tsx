import useOutsideClick from "@/hooks/useOutsideClick";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { faSheetPlastic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const ServiceNotificationBell = () => {
  const dispatch = useAppDispatch();
  const notifications = useAppSelector(
    (state) => state.notifications.notificationList
  );
  const [isDrop, setIsDrop] = useState(false);
  const ref = useOutsideClick(setIsDrop);
  const [number, setNumber] = useState(notifications.length);
  return (
    <div>
      <div
        className="hover:bg-green-300 rounded-xl p-1 mx-2 cursor-pointer"
        onClick={() => (isDrop ? setIsDrop(false) : setIsDrop(true))}
      >
        <small className="text- absolute top-1 bg-red-400 px-1 rounded-full scale-90">
          {number > 0 && number}
        </small>
        <FontAwesomeIcon
          className="text-center ml-1  text-2xl"
          icon={faSheetPlastic}
        />
      </div>
    </div>
  );
};

export default ServiceNotificationBell;
