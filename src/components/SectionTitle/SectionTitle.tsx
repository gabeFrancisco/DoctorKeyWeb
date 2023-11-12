import React from "react";

import "./styles.css";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle = (props: SectionTitleProps) => {
  return (
    <div className="sectionTitle m-0 px-1 lg:m-1 lg:px-5 py-2 text-stone-600">
        <h2 className="mx-2 text-2xl font-bold">{props.title}</h2>
        <h3 className="mx-2 text-md">{props.subtitle}</h3>
      <div className="growingLine my-2"></div>
    </div>
  );
};

export default SectionTitle; 
