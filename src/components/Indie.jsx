// Content images import
import indie from "../assets/images/indie.jfif";
import indie2 from "../assets/images/indie2.jfif";
import indie3 from "../assets/images/indie3.jfif";
import indie4 from "../assets/images/indie4.gif";
import Footer from "./Footer";
import Header from "./Header";

const Content = () => {
  return (
    <>
      <Header />
      <section className="images">
        <div className="img">
          <a href="http://localhost:3003/">
            <img src={indie4} alt="Seven" />
          </a>
          <a href="http://localhost:3003/">
            <img src={indie} alt="Eight" />
          </a>
          <a href="http://localhost:3003/">
            <img src={indie2} alt="Nine" />
          </a>
          <a href="http://localhost:3003/">
            <img src={indie3} alt="Ten" />
          </a>
        </div>
        <div className="flat abc">
          <a href="http://localhost:3003/">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/25052022-D-IndiePage-Indiebannercarousel-footertile1.png"
              alt=""
            />
          </a>
          <a href="http://localhost:3003/">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/25052022-D-IndiePage-Indiebannercarousel-footertile2.png"
              alt=""
            />
          </a>
          <a href="http://localhost:3003/">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/25052022-D-IndiePage-Indiebannercarousel-footertile3.png"
              alt=""
            />
          </a>
        </div>
        <div className="img">
          <a href="http://localhost:3003/">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/25052022-D-IndiePage-homebanner-sectionheader.png"
              alt=""
            />
          </a>
          <a href="http://localhost:3003/">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/25052022-D-IndiePage-homebanner.png"
              alt=""
            />
          </a>
          <a href="http://localhost:3003/">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/25052022-D-IndiePage-handloom&handcrafted-sectionheader.png"
              alt=""
            />
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Content;
