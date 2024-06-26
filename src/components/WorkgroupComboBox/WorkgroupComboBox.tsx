import { WorkGroup } from "@/models/WorkGroup";
import React, { SelectHTMLAttributes } from "react";

interface WorkgroupComboBoxProps {
  list: Array<WorkGroup>;
  onChange(e: any): void;
  placeholder: string;
  value: string;
}

const WorkgroupComboBox = (props: WorkgroupComboBoxProps) => {
  return (
    <select
      placeholder={props.placeholder}
      className="border rounded-md py-0.5 bg-white  w-2/3 md:3/5 mx-5 block lg:mx-1 text-sm text-gray-400 font-bold"
      onChange={props.onChange}
      value={props.value}
      required
    >
      <option
        style={{ color: "#ddd" }}
        defaultValue={props.placeholder}
        disabled
      >
        {props.placeholder}
      </option>
      {props.list.map((el, key) => (
        <option key={key} className="rounded-sm border-2" data-id={el.id!}>
          {el.title}
        </option>
      ))}
    </select>
  );
};

export default WorkgroupComboBox;
