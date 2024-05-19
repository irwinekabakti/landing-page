import React, { ReactNode } from "react";

interface FooterColumnProps {
  title: string;
  children: ReactNode;
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-bold text-lg whitespace-nowrap">{title}</h1>
      {children}
    </div>
  );
};

export default FooterColumn;
