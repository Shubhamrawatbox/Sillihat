import React from 'react';
import './Navlink.scss';
const Navlinks = () => {
    return (
        <div className="navlinks">
            <ul className="menu">
                <li className="menu-list">
                    <a href="/">
                        Service
                    </a>
                </li>
                <li className="menu-list">
                    <a href="/">
                        Team
                    </a>
                </li>
                <li className="menu-list">
                    <a href="/">
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Navlinks
