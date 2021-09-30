import React, { useState } from "react";
import "./Navlink.scss";
const Navlinks = () => {
  const [active, setactive] = useState(false);
  return (
    <div className="navlinks">
      <ul className="menu">
        <li className={active ? "menu-list active" : "menu-list"}>
          <a href="#service">Service</a>
        </li>
        <li className={active ? "menu-list active" : "menu-list"}>
          <a href="#team">Team</a>
        </li>
        <li className={active ? "menu-list active" : "menu-list"}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navlinks;
