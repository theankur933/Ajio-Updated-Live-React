import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Men = () => {
  return (
    <>
      <Header />
      <section className="images">
        <div className="img">
          <a href="http://localhost:3003/">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/05092022-D-MHP-clearancesale-topbanner-5080.jpg"
              alt=""
            />
          </a>
          <a href="http://localhost:3003/">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/1440x128-.jpg"
              alt=""
            />
          </a>
          <a href="http://localhost:3003/">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/Flash%20header.jpg"
              alt=""
            />
          </a>
          <a href="http://localhost:3003/">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/05092022-D-MHP-flashdeal-jack&jones-startingat399.jpg"
              alt=""
            />
          </a>
          <a href="http://localhost:3003/">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/D-header-23.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="flat abc">
          <a href="http://localhost:3003/">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/19082022-D-MHP-covetedbrands-marks&spencer-upto60.jpg"
              alt=""
            />
          </a>
          <a href="http://localhost:3003/">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/19082022-D-MHP-covetedbrands-ucb-3060.jpg"
              alt=""
            />
          </a>
          <a href="http://localhost:3003/">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/19082022-D-MHP-covetedbrands-adidas-4060.jpg"
              alt=""
            />
          </a>
          <a href="http://localhost:3003/">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/19082022-D-MHP-footwear&accessories-sports&casualshoes-brands-startingat1199.jpg"
              alt=""
            />
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Men;
