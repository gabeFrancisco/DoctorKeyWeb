import React, { SelectHTMLAttributes } from 'react'

interface ComboBoxProps{
  list: Array<string>
  onChange(e: any): void
}

const ComboBox = (props: ComboBoxProps) => {
  return (
    <div>
    <select
      className="rounded-sm border-2 bg-gray-100 block mx-1 text-gray-700"
      id="manufactor"
      // value={props.value}
      onChange={props.onChange}
    >
      {props.list.map((el, key) => (
        <option className="rounded-sm border-2 bg-gray-100" key={key}>
          {el}
        </option>
      ))}
    </select>
  </div>
  )
}

export default ComboBox