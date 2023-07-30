import { Manufactor } from "@/models/Manufactor";
import React from "react";

import { motion } from "framer-motion";

import 'car-makes-icons/dist/style.css'

const ManufactorRow = ({ manufactor }: { manufactor: Manufactor }) => {
  return (
    <motion.div whileHover={{ scale: 1.03 }}>
      <div className="cursor-pointer border-2 border-dashed border-gray-300 rounded-lg my-5 hover:border-green-400 flex flex-row justify-center align-baseline items-center mx-5">
        <div className="grid grid-cols-2">
          <div className="p-5 flex flex-row items-center ml-10 ">
            <i
              className={`text-7xl text-gray-700 car-${manufactor.name.toLowerCase()}`}
            />
            <h1 className="text-xl text-gray-600 font-bold ml-10">
              {manufactor.name}
            </h1>
          </div>

          <div className="ml-10 mr-3 my-3 flex flex-row">
            <small className="text-gray-700">{manufactor.description}</small>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ManufactorRow;
      