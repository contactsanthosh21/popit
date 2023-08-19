import React from "react";

const Button = ({ children, href, className, style, behaviour = "link", type }) => {
  return behaviour === "link" ? (
    <a
      className={className}
      style={{
        minWidth: "fit-content",
        height: "2.75rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        textDecoration: "none",
        borderRadius: "3.7rem",
        ...style,
      }}
      href={href? href: "#"}
    >
      {children}
    </a>
  ) : (
    <button
      className={className}
      style={{
        minWidth: "fit-content",
        height: "2.75rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        textDecoration: "none",
        borderRadius: "3.7rem",
        ...style,
      }}
      type = {type ? type : undefined}
    >
      {children}
    </button>
  );
};

export default Button;
