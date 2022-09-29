import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-between bg-secondary px-8 py-2">
        <Link to={"/"}>
          <div className="text-font-primary text-4xl font-semibold">
            Movie App
          </div>
        </Link>
        <div className="logo w-12">
          <img src="/images/user-icon.png" alt="user-logo" />
        </div>
      </div>
    </div>
  );
};

export default Header;
