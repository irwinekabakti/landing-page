import React, { ReactNode } from "react";

interface GridProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

const GridComponent: React.FC<GridProps> = ({ children, id, className }) => {
  return (
    <div
      id={id}
      className={`about grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 ${className}`}>
      {children}
    </div>
  );
};

export default GridComponent;
