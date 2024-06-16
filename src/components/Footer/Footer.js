import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="content">
        <div className="link-boxes">
          <ul className="box">
            <li className="link_name">EXPLORE</li>
            <li>
              <a href="#">Clubs and Studios</a>
            </li>
            <li>
              <a href="/login">Login to Membership Account</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
            <li>
              <a href="#">Campaigns</a>
            </li>
            <li>
              <a href="#"> Membership Packages</a>
            </li>
          </ul>
          <ul className="box">
            <li className="link_name">ABOUT US</li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Corporate</a>
            </li>
            <li>
              <a href="#">People and Culture</a>
            </li>
          </ul>
          <ul className="box">
            <li className="link_name">POPULAR CONTENT</li>
            <li>
              <a href="#">Bulking Period</a>
            </li>
            <li>
              <a href="#"> Cutting Period</a>
            </li>
            <li>
              <a href="#">15 Ways to Gain Healthy Weight</a>
            </li>
            <li>
              <a href="#">Fitness Glossary</a>
            </li>
            <li>
              <a href="#">Dance Exercises</a>
            </li>
          </ul>

          <ul className="box">
            <li className="link_name">CLUBS</li>
            <li>
              <a href="#">Istanbul Sports Centers</a>
            </li>
            <li>
              <a href="#">
                <span>Ankara Sports Centers</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span> Izmir Sports Centers</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Antalya Sports Centers</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
