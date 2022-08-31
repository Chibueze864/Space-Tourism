import React from "react";
import Header  from "./Header";
import Dimensions from "./Dimensions.js";
import logo from "./shared/logo.svg";
import "./Menu.css";
function Menu() {
  const { height, width } = Dimensions();

  return (
    <div className="menu">
      <div className="logo-div">
        <img src={logo} />
      </div>
      {width > 767 ? (
        <nav className="links">
          <ul>
            <li class="item">
              <a href="/">00 Home</a>
            </li>
            <li class="item">
              <a href="/destination">01 Destination</a>
            </li>
            <li class="item">
              <a href="/crew">02 Crew</a>
            </li>
            <li class="item">
              <a href="/technology">03 Technology</a>
            </li>
          </ul>
        </nav>
      ) : (
        <div>
          <Header></Header>
        </div>
      )}
    </div>
  );
}

export default Menu;
