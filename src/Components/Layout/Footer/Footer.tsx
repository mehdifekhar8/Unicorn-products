import React from "react";
import SvgLogo from "../../../UIAppBundle/icons/Logo";
import SvgFooterIconOne from "../../../UIAppBundle/icons/FooterIconOne";
import SvgFooterIconTow from "../../../UIAppBundle/icons/FooterIconTow";
import SvgFooterIconThree from "../../../UIAppBundle/icons/FooterIconThree";
import SvgFooterIconFour from "../../../UIAppBundle/icons/FooterIconFour";

import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <img
          src={"https://picsum.photos/id/237/360/360"}
          alt="Logo"
          className="footer-logo"
        />
      </div>
      <div className="footer-right">
        <div className="footer-content">
          <div className="footer-row">
            <SvgLogo></SvgLogo>
            <div className="footer-icons">
              <SvgFooterIconOne></SvgFooterIconOne>
              <SvgFooterIconTow></SvgFooterIconTow>
              <SvgFooterIconThree></SvgFooterIconThree>
              <SvgFooterIconFour></SvgFooterIconFour>
            </div>
          </div>
          <div className="privacy-text"> Privacy Policy</div>
          <div className="Terms-text">Terms and Conditions</div>
        </div>

        <div className={"footer-links"}></div>

        <div className="footer-text">
          @2020 TanahAir Studio. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
