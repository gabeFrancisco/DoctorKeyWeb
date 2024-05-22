import React from "react";

import "./styles.css";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle = (props: SectionTitleProps) => {
  return (
    <div className="sectionTitle m-0 py-2 text-stone-600">
      <h2 className="mx-2 text-2xl font-bold">{props.title}</h2>
      <h3 className="mx-2 text-md">{props.subtitle}</h3>
      <div className="growingLine mt-2"></div>
    </div>
  );
};

export default SectionTitle;
