import useOutsideClick from '@/hooks/useOutsideClick';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'

interface Props{
  buttonText: string;
  children: React.ReactNode
}

const Dropdown = (props: Props) => {
  const [isDrop, setIsDrop] = useState(false);
  const ref = useOutsideClick(setIsDrop);

  return (
    <div>
      <button
        className="py1 my-0.5 px-3 rounded-sm border-gray-200"
        type="button"
        onClick={() => (isDrop ? setIsDrop(false) : setIsDrop(true))}
      >
        {props.buttonText} <i className="fa-solid fa-caret-down text-gray-500"><FontAwesomeIcon icon={faEllipsisV} /></i>
      </button>
      {isDrop ? (
        <div ref={ref}>
          <ul className="absolute rounded-sm flex flex-col border border-gray-300 z-30 bg-gray-50 shadow" id="dropbox">
            {React.Children.map(props.children, (child) => child)}
          </ul>
        </div>
      ) : null}
    </div>
  )
}

export default Dropdown