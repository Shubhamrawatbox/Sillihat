import React from "react";
import Button from "../../atom/button/Button";
import Heading from "../../atom/heading/Heading";
import Paragraph from "../../atom/paragraph/Paragraph";
import { Footerdata } from "../../Data/Footerdata";
import "./Footer.scss";
import { AiOutlineMessage } from "react-icons/ai";

const Footer = () => {
  return (
    <section className="footer" id="contact">
      <Heading prop="Get Connected." Headcolors="head-white" />
      <div className="footer-para">
        <Paragraph
          prop="We welcome you to contact us for more information
          about any of our products or services."
          color="greycolor"
          size="para-small"
        />
      </div>
      <div className="content">
        <div className="content-wrapper">
          {Footerdata.map((data, index) => {
            return (
              <div className="wrapper-box" key={index}>
                <div className="left">{data.image}</div>
                <div className="right">
                  {data.heads}
                  {data.content}
                </div>
              </div>
            );
          })}
        </div>
        <div className="contact-detail">
          <Paragraph
            prop="Investopad, 18, Institutional Area,
Prem Puri, Sector 32,
Gurugram, Haryana 122001"
            color="whitecolor"
            bold="para-none"
            size="para-small"
          />
          <div className="address">
            <p>CALL: 9711451861</p>
            <p>info@silihat.com</p>
          </div>
          <Button buttonsize="btn-big">
            <div className="btn-icon">
              <AiOutlineMessage/>
            </div>
            CHAT ME
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Footer;
