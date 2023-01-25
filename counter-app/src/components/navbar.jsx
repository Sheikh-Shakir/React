import React from "react";

// stateless functional component
const Navbar = ({ totalCounters }) => {
  console.log("NAvBar-Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a href="" className="navbar-brand">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
