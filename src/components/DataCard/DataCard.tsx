import { motion } from "framer-motion";
import React from "react";
import SmallLoadingSkeleton from "../LoadingSkeleton/SmallLoadingSkeleton";

interface DataCardProps {
  description: string;
  data: number | -1
  className: string;
  delay: number;
  textColor?: string
}

const DataCard = ({textColor = 'text-white', ...props}: DataCardProps) => {
  return (
    <div
      // initial={{ translateY: -20, opacity: 0, scale: 0.5 }}
      // animate={{ translateY: 0, opacity: 1, scale: 1 }}
      // transition={{ duration: props.delay }}
      className={
        "px-7 py-5 m-3 cursor-pointer rounded " +
        props.className
      }
    >
      <h3 className={"m-1 " + textColor}>{props.description}:</h3>
      {props.data >= 0 ? (
        <h2 className={"m-2 text-4xl " + textColor}>{props.data}</h2>

      ) : (
        <SmallLoadingSkeleton/>
      )}
    </div>  
  );
};

export default DataCard;
