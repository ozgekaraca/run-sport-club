import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); //başlangıçta menü kapalı

  const toggleMenu = () => {  //menüyü açıp kapatmak için
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col logo-container">
            <a href="/" className="logo" aria-label="logo" title="logo">
              <img
                src="assets/images/logo.jpeg"
                alt="logo"
                width="100"
                height="auto"
              />
            </a>
          </div>

          <div className="col">
            <button
              className="menu-toggle"
              onClick={toggleMenu}
              aria-label="Toggle navigation"
            >
              ☰
            </button>
            <nav className={`navigation ${isOpen ? "open" : ""}`}>
              <ul className="navigation-list">
                <li className="navigation-item">
                  <a href="/classes">DERSLER</a>
                </li>
                <li className="navigation-item">
                  <a href="/group-lessons">GRUP DERSLERİ</a>
                </li>
                <li className="navigation-item">
                  <a href="/price-list">FİYAT LİSTESİ</a>
                </li>
                <li className="navigation-item">
                  <button className="button">
                    <a href="/login" className="account">
                      <span>GİRİŞ</span>
                    </a>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
