import React from 'react';
import Button from './Button';

const Footer = () => {
    return (
        <div className="footer">
            <div className="column" style={{ backgroundColor: "#40E0D0" }}>
                <Button icon="heart" />
            </div>
            <div className="column" style={{ backgroundColor: "#DC143C" }}>
                <Button icon="heart-broken" />
            </div >
        </div >
    )
}

export default Footer;


/*

import React from "react";
import Button from "./Button";
import Social from "./Social";

import facebook from "./img/facebook.svg";
import instagram from "./img/instagram.svg";
import twitter from "./img/twitter.svg";
import youtube from "./img/youtube.svg";

//import "./components.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="row">
        <a href="https://reactjs.org/" target="_blank">
          <Button icon="heart" icon2="far fa-heart" />
        </a>
        <a href="https://www.w3schools.com/react/react_props.asp"
          target="_blank">
          <Button icon="brokenheart" icon2="fas fa-heart-broken" />
        </a>
      </div>

      <div className="footer_social">
        <Social icon1="socials-icon" icon2={facebook} icon3=" _blank" />
        <Social icon1="socials-icon" icon2={instagram} icon3=" _blank" />
        <Social icon1="socials-icon" icon2={twitter} icon3=" _blank" />
        <Social icon1="socials-icon" icon2={youtube} icon3=" _blank" />
      </div>
    </div>
  );
};
export default Footer;

*/