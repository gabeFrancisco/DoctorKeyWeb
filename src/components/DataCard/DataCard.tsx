import { motion } from "framer-motion";
import React from "react";
import SmallLoadingSkeleton from "../LoadingSkeleton/SmallLoadingSkeleton";

interface DataCardProps {
  description: string;
  data: number | -1
  className: string;
  delay: number;
}

const DataCard = (props: DataCardProps) => {
  return (
    <motion.div
      initial={{ translateY: -20, opacity: 0, scale: 0.5 }}
      animate={{ translateY: 0, opacity: 1, scale: 1 }}
      transition={{ duration: props.delay }}
      className={
        "px-7 py-5 m-3 bg-gradient-to-tr rounded-xl text-white shadow-xl " +
        props.className
      }
    >
      <h3 className="m-1">{props.description}:</h3>
      {props.data >= 0 ? (
        <h2 className="m-2 text-4xl">{props.data}</h2>

      ) : (
        <SmallLoadingSkeleton/>
      )}
    </motion.div>
  );
};

export default DataCard;
