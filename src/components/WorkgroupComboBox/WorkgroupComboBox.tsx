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
        {props.list.map((el) => (
          <option className="rounded-sm border-2 bg-white" data-id={el.id}>
            {el.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default WorkgroupComboBox;
