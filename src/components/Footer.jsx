import React from "react";
import "./css/Footer.css";

function Footer() {
  return (
    <div className="footer flex">
      <div className="footer__left sonsie-font logo">EasyBuy</div>
      <div className="footer__right footer__links flex">
        <ul>
          <li>Help</li>
          <li>Payment</li>
          <li>Shipping</li>
          <li>Returns</li>
          <li>FAQ</li>
        </ul>
        <ul>
          <li>About</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Careers</li>
          <li>Terms of use</li>
          <li>Privacy</li>
        </ul>
        <ul>
          <li>Social</li>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>YouTube</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
