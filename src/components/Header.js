import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div>
      <div className="header-wraper">
        <div className="main-info">
          <h1>web dewelopment and website promotions</h1>
          <Typed className="typed-text"
          strings={["web Design","web dewelopment", "Facebook Ads SMM ","Google Ads" ]}
          typeSpeed={40}
          backSpeed={60}loop
          />
          <a href="home" className="btn-main-offer">Contact me</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
