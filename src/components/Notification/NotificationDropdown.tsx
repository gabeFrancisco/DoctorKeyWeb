import useOutsideClick from "@/hooks/useOutsideClick";
import React, { useState } from "react";

const NotificationDropdown = () => {
  const [isDrop, setIsDrop] = useState(false);
  const ref = useOutsideClick(setIsDrop);
  return <>{isDrop ? <div ref={ref}></div> : null}</>;
};

export default NotificationDropdown;
