import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">Best-Run Consulting</div>
      <nav>
        <ul className="nav-links">
          <li><a href="#hero">Головна</a></li>
          <li><a href="#about">Про нас</a></li>
          <li><a href="#history">Історія</a></li>
          <li><a href="#contact">Контакти</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
