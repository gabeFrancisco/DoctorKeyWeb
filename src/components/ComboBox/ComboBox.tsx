import React, { SelectHTMLAttributes } from "react";

interface ComboBoxProps {
  list: Array<string>;
  onChange(e: any): void;
  placeholder: string;
  value: string;
  id?: string
}

const ComboBox = (props: ComboBoxProps) => {
  return (
    <div>
      <select
        className="rounded-sm border bg-white my-1 py-0.5  block lg:mx-1 text-gray-700"
        onChange={props.onChange}
        placeholder={props.placeholder}
        value={props.value}
        required
      >
        <option style={{color: "#888"}} selected>
          {props.placeholder}
        </option>
        {props.list.map((el, key) => (
          <option className="rounded-sm border-2 bg-white" key={key}>
            {el}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ComboBox;
