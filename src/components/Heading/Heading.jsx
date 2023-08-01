import React from "react";
import "./Heading.scss";

const Heading = ({ text, className, size }) => {
  switch(size) {
    case "large": size = "large"; break;
    case "medium": size = "medium"; break;
    case "small": size = "small"; break;
    default: size = "large"; break;
  }
  className += ` heading ${size}`;
  return <div className={className}>{text}</div>;
};

export default Heading;
