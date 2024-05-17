import React from "react";

interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="font-bold text-lg whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default FooterColumn;
