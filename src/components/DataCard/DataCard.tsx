import React from "react";

interface DataCardProps{
  description: string,
  data: number,
  className: string
}

const DataCard = (props: DataCardProps) => {
  return (
    <div className={"px-7 py-5 m-3 bg-gradient-to-tr rounded-xl text-white shadow-xl " + props.className}>
      <h3 className="m-1">{props.description}:</h3>
      <h2 className="m-2 text-4xl">{props.data}</h2>
    </div>
    
  );
};

export default DataCard;
