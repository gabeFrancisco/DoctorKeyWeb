import React, { SelectHTMLAttributes } from "react";

interface ComboBoxProps {
  list: Array<string>;
  onChange(e: any): void;
  placeholder: string;
  value: string;
}

const ComboBox = (props: ComboBoxProps) => {
  return (
    <div>
      <select
        className="rounded-sm border-2 bg-gray-100 my-1  block lg:mx-1 text-gray-700"
        onChange={props.onChange}
        placeholder={props.placeholder}
        value={props.value}
        required
      >
        <option style={{color: "#888"}} selected>
          {props.placeholder}
        </option>
        {props.list.map((el, key) => (
          <option className="rounded-sm border-2 bg-gray-100" key={key}>
            {el}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ComboBox;
