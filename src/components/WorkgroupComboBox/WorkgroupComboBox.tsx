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
        className="border rounded-md border-white py-0.5 bg-green-400 my-1 w-2/3 md:3/5 mx-5 block lg:mx-1 text-sm text-white font-bold"
        onChange={props.onChange}
        value={props.value}
        required
      >
        <option style={{color: "#888"}} selected>
          {props.placeholder}
        </option>
        {props.list.map((el) => (
          <option className="rounded-sm border-2 bg-green-400" data-id={el.id!}>
            {el.title}
          </option>
        ))}
      </select>
  );
};

export default WorkgroupComboBox;
