"use client";
import React, { ReactNode } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

interface ZoomImageProps {
  children?: ReactNode;
  canSwipeToUnzoom?: boolean;
}

const ZoomImage: React.FC<ZoomImageProps> = ({
  children,
  canSwipeToUnzoom,
}) => {
  return <Zoom canSwipeToUnzoom={canSwipeToUnzoom}>{children}</Zoom>;
};

export default ZoomImage;
