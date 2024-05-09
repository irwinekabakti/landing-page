import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface HeroWrapperProps {
  imageSrc: StaticImageData;
  children?: React.ReactNode;
  className?: string;
}
const HeroWrapper: React.FC<HeroWrapperProps> = ({
  imageSrc,
  children,
  className,
}) => {
  return (
    <div className="hero">
      <Image src={imageSrc} alt="image-hero" className={className} />
      {children}
    </div>
  );
};

export default HeroWrapper;
