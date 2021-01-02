import React from "react";
import { Link, withRouter } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar-light navbar navbar-expand-sm  bg-light">
      <div className="container">
        <Link className="navbar-brand font-weight-bold text-uppercase" to="/">
          JUDE GAO
        </Link>
        {/*<button*/}
        {/*  onClick={() => {*/}
        {/*    setCollapsed(!collapsed);*/}
        {/*  }}*/}
        {/*  className="navbar-toggler"*/}
        {/*  type="button"*/}
        {/*>*/}
        {/*  <span className="navbar-toggler-icon" />*/}
        {/*</button>*/}
        {/*<div className={`${collapsed ? "collapse" : ""} navbar-collapse`}>*/}
        {/*  <ul className="navbar-nav ml-auto">*/}
        {/*    <li className="nav-item mx-1 text-uppercase">*/}
        {/*      <Link to={"/"} className="nav-link" href="#">*/}
        {/*        Home*/}
        {/*      </Link>*/}
        {/*    </li>*/}
        {/*    <li className="nav-item mx-1 text-uppercase">*/}
        {/*      <Link to={"/maintain"} className={`nav-link`} href="#">*/}
        {/*        Edit*/}
        {/*      </Link>*/}
        {/*    </li>*/}
        {/*  </ul>*/}
        {/*</div>*/}
      </div>
    </nav>
  );
};

export default NavBar;
