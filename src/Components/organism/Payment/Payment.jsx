import React from "react";
import Heading from "../../atom/heading/Heading";
import Paragraph from "../../atom/paragraph/Paragraph";
import "./Payment.scss";

const Payment = () => {
  return (
    <>
      <section className="payment">
        <div className="inner-payment">
          <Heading
            prop="Free Project Estimate
            Flexible Payment Plans"
            Headcolors="head-white"
            Headsizes="head-medium"
            after="blackAfter"
            headalign="left"
          />
          <div className="paragraph">
            <Paragraph
              prop="Especially for startups and SMBs is our way of showing love & passion for entrepreneurs "
              color="whitecolor"
              text="alignleft"
              size="para-small"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Payment;
