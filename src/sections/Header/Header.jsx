import React from "react";
import NavItem from "./NavItem";
import "./Header.scss";

var appLogo = require("../../assets/app-logo.png");

const Header = () => {
  const [opaqueHeader, setOpaqueHeader] = React.useState(false);
  const headerRef = React.useRef(null);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = (e) => {
    /*
     * if we check the scrollTop for the same position in both cases, it creates a flicker
     * the flicker is happening because we are reducing size of things in the header
     * at a certain scroll position, browser goes into a loop of infinitely calculating the scroll top position
     * because the header height changes hence changing the scroll top poisition -> hence infinite calculation loop
     * this would not have been a problem, had we were only adding a background to the header and not changing any sizes inside it
     * hence added enough buffer to address this. (very interesting problem with a simple solution indeed)
     */
    if (window.scrollY > 80 && !opaqueHeader) {
      setOpaqueHeader(true);
    } else if (window.scrollY <= 10 && opaqueHeader) {
      setOpaqueHeader(false);
    }
  };

  return (
    <div className={`header ${opaqueHeader ? "opaque " : ""}`} ref={headerRef}>
      <div className="header__logo app-logo">
        <a href="/">
          <img src={appLogo} alt="app logo" />
        </a>
      </div>
      <div className="header__nav">
        <NavItem label="Projects" to="#" />
        <NavItem label="About" to="#" />
        <NavItem label="Contact Us" to="#" />
      </div>
    </div>
  );
};

export default Header;
