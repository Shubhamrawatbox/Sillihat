import React, { useState } from "react";
import Logo from "../../atom/logo/Logo";
import Span from "../../atom/span/Span";
import Navlinks from "../../molecule/Navlink/Navlinks";
import "./Navbar.scss";

const Navbar = () => {
  const [show,hide]=useState(false);
  window.addEventListener('scroll',()=>{
    if (window.scrollY > 603) {
      hide(true)
    }else{
      hide(false)
    }
  })
  return (
    <>
      <header className={show ? 'navbar active' : 'navbar'}>
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
              <Span props="@infoskillhut.com"
              headsize="font-secondary"
              />
            </li>
          </ul>
        </div>
        <div className="navbar-list">
          <Logo />
          <Navlinks />
        </div>
      </header>
    </>
  );
};

export default Navbar;
