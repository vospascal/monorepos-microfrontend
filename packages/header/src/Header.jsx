import React from "react";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{
        border: "2px dashed MediumAquamarine",
        padding: "5px",
        margin: "5px",
      }}
    >
      header!
      <br />
      <Link to="/">home</Link> |<Link to="/test">test</Link> |
      <Link to="/pageone">page one</Link> |<Link to="/pagetwo">page two</Link>
    </div>
  );
};

export default Header;
