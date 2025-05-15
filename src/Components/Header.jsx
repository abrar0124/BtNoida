import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import HeaderArray from "./HeaderArray";

const Header = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <nav className="bg-black fixed top-0 w-full p-2 z-50">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-1 no-underline">
          <span className="text-blue-500 text-2xl font-bold">DCS</span>
          <span className="text-white text-2xl font-light">aero</span>
        </NavLink>

        {/* Navigation Items */}
        <div className="hidden md:flex space-x-3 text-xlg">
          {HeaderArray.map((item) => (
            <div
              key={item.path}
              className="relative"
              onMouseEnter={() => setHovered(item.name)}
              onMouseLeave={() => setHovered(null)}
            >
              <NavLink
                to={item.path}
                className="no-underline px-2 py-1 font-normal text-white"
              >
                {item.name}
              </NavLink>

              {hovered === item.name && item.subMenu && (
                <div className="absolute  bg-black text-white  z-50 min-w-[230px]">
                  {item.subMenu.map((sub) => (
                    <NavLink
                      key={sub.path}
                      to={sub.path}
                      className="block w-full p-2 mt-2 text-sm text-white hover:bg-gray-200 hover:!text-black  no-underline"
                    >
                      {sub.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
