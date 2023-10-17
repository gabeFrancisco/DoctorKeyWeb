import LoadingSkeleton from "@/components/LoadingSkeleton/LoadingSkeleton";
import React from "react";

const loading = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <LoadingSkeleton />
    </div>
  );
};

export default loading;
