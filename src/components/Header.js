import React from "react";
import { BrowserRouter, Route, Switch,Link } from "react-router-dom";


export default function Header(props) {
  return (
    <header className="container">
      <Link className='link' to="/">

      <h2 className="header-name">conduit</h2>
      </Link>
      <ul className="nav-bar">
        <Link className='link' to="/">
          <a className="nav-links">Home</a>
        </Link>
        <Link className='link' to="/Signin">
          <a className="nav-links">Sign in</a>
        </Link>
        <Link className='link' to="/Signup">
          <a className="nav-links">Sign up</a>
        </Link>
      </ul>
    </header>
  );
}
