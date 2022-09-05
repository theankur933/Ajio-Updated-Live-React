import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Kids() {
  return (
    <>
      <Header />
      <section className="images">
        <div className="img">
          <a href="http://localhost:3003/">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/05092022-D-KHP-topbannercarousel-p2-sotd-brands-footwear-extra25.jpg"
              alt=""
            />
          </a>
          <a href="http://localhost:3003/">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/05092022-D-KHP-flashdeals-brands-upto50.jpg"
              alt=""
            />
          </a>
          <a href="http://localhost:3003/">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/05092022-D-KHP-banner1-p1-brands-boyscollection-3070.jpg"
              alt=""
            />
          </a>
          <a href="http://localhost:3003/">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/19082022-D-KHP-trendscarousel-brands-3070.jpg"
              alt=""
            />
          </a>
          <a href="http://localhost:3003/">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/19082022-D-KHP-bestbrands-campus-upto60.jpg"
              alt=""
            />
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}
