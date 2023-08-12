import React from "react";

const Button = ({ children, href, className, style, type = "link" }) => {
  return type === "link" ? (
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
    <div
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
    >
      {children}
    </div>
  );
};

export default Button;
