import React from "react";
import "./Heading.scss";

const Heading = ({ children, className, size }) => {
  switch(size) {
    case "large": size = "large"; break;
    case "medium": size = "medium"; break;
    case "small": size = "small"; break;
    default: size = "large"; break;
  }
  className = (className ? `${className} ` : '' ) + `heading ${size}`;
  return <div className={className}>{children}</div>;
};

export default Heading;
