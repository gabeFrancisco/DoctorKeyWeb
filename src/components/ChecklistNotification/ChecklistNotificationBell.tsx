import useOutsideClick from "@/hooks/useOutsideClick";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const ChecklistNotificationBell = () => {
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
        className="hover:bg-green-400 rounded-xl p-1 ml-0.5 mr-2 cursor-pointer"
        onClick={() => (isDrop ? setIsDrop(false) : setIsDrop(true))}
      >
        <small className="absolute text-white top-1 bg-red-400  px-1 rounded-full scale-90">
          {number > 0 && number}
        </small>
        <FontAwesomeIcon className="text-xl text-gray-500" icon={faList} />
      </div>
    </div>
  );
};

export default ChecklistNotificationBell;
