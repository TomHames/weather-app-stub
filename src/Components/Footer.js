import React from "react";
import "../App.css";

import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaCoffee } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <a
              href="https://www.facebook.com/tom.hames.3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF style={{ color: "#3B5998" }} />
            </a>
          </li>
          <li>
            <a
              href="https://plus.google.com/u/0/113284934601551082561"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGooglePlus style={{ color: "#E3695A" }} />
            </a>
          </li>
          <li>
            {" "}
            <a
              href="https://www.reddit.com/user/Stoic-tom"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaReddit style={{ color: "#FF4500" }} />
            </a>
          </li>
          <li>
            {" "}
            <a
              href="https://www.linkedin.com/in/tom-hames-0036a889/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin style={{ color: "#3B5998" }} />
            </a>
          </li>
        </ul>
        <div className="footer-paragraph">
          <p style={{ fontSize: "14px" }}>
            Made with <FaCoffee /> and <FaHeart /> by Tom Hames
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
