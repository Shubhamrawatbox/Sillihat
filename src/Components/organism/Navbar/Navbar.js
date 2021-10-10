import React, { useState } from "react";
import Logo from "../../atom/logo/Logo";
import Span from "../../atom/span/Span";
import Navlinks from "../../molecule/Navlink/Navlinks";
import "./Navbar.scss";

const Navbar = () => {
  const [show, hide] = useState(false);
  const [menu, setmenu] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 603) {
      hide(true);
    } else {
      hide(false);
    }
  });
  const openmenu = () => {
    setmenu(!menu);
  };

  return (
    <>
      <header className={show ? "navbar active" : "navbar"}>
        <div className="upper-banner">
          <ul className="inner-banner">
            <li className="slug">
              <Span
                props="Lets Talk About Me"
                headsize="font-secondary"
                headweight="weight-secondary"
              />
            </li>
            <li className="email">
              <Span props="@infoskillhut.com" headsize="font-secondary" />
            </li>
          </ul>
        </div>
        <div className="navbar-list">
          <Logo />
          <Navlinks />
          <div className="right">
            <div
              className={menu ? "menu-btn active" : "menu-btn"}
              onClick={openmenu}
            >
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
