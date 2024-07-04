import React from "react";
import Navbar from "../Navbar";
import Switcher from "../Switcher";

const Header = () => {
  return (
    <div className="flex justify-between px-4 h-16 items-center bg-slate-400">
      <div>LOGO</div>
      <div className="flex gap-3">
        <Navbar />
        <Switcher />
      </div>
    </div>
  );
};

export default Header;
