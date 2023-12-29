import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface Props {
  itemName: string;
  faIcon: IconProp;
  onClick: React.MouseEventHandler;
}

const DropdownItem = (props: Props) => {
  return (
    <li
      className="px-2 py-1 text-gray-700 hover:bg-green-500 hover:text-white cursor-pointer"
      onClick={props.onClick}
    >
      <i className="mr-2">
        <FontAwesomeIcon icon={props.faIcon} />
      </i>
      {props.itemName}
    </li>
  );
};

export default DropdownItem;
