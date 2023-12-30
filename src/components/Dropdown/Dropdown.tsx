import useOutsideClick from "@/hooks/useOutsideClick";
import { faCaretDown, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

interface Props {
  buttonText: string;
  children: React.ReactNode;
}

const Dropdown = (props: Props) => {
  const [isDrop, setIsDrop] = useState(false);
  const ref = useOutsideClick(setIsDrop);

  return (
    <div>
      <button
        className="my-0.5 px-3 rounded-sm border-gray-200 text-gray-400 hover:text-green-500"
        type="button"
        onClick={() => (isDrop ? setIsDrop(false) : setIsDrop(true))}
      >
        {props.buttonText}{" "}
        <i className="fa-solid fa-caret-down">
          <FontAwesomeIcon icon={faCaretDown} />
        </i>
      </button>
      {isDrop ? (
        <div ref={ref}>
          <ul
            className="absolute rounded-sm flex flex-col border border-gray-300 z-30 bg-gray-50 shadow right-10"
            id="dropbox"
          >
            {React.Children.map(props.children, (child) => child)}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;
