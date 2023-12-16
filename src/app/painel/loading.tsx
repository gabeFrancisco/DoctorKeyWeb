import LoadingSkeleton from "@/components/LoadingSkeleton/LoadingSkeleton";
import React from "react";

const loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <LoadingSkeleton />
    </div>
  );
};

export default loading;
