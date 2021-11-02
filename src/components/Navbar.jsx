import React from "react";

import NotificationIcon from "../assets/Group 6252.png";
import HelpIcon from "../assets/Help.png";
import UserIcon from "../assets/Group 5700.png";

function Navbar() {
  return (
    <div className="flex justify-between items-center w-screen py-4 bg-white px-32">
      <h1>Me and You and 2021/Home</h1>
      <ul className="flex justify-around items-center w-1/4">
        <li>
          <img src={NotificationIcon} alt="NotificationIcon" />
        </li>
        <li>
          <img src={HelpIcon} alt="HelpIcon" />
        </li>
        <li>
          <img src={UserIcon} alt="UserIcon" />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
