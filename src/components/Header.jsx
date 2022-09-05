import { Link } from "react-router-dom";

// Header images
import wishlistIcon from "../assets/images/wishlistIcon.svg";
import Ajio from "../assets/images/Ajio.svg";

const Header = (props) => {
  return (
    <>
      <section className="header">
        <div className="guest">
          <ul className="abc">
            <li>
              <a href="http://localhost:3001/">Sign In / Join AJIO</a>
            </li>
            <li>
              <a href="http://localhost:3001/">Customer Care</a>
            </li>
            <li>
              <a href="http://localhost:3001/">Visit AJIOLUXE</a>
            </li>
          </ul>
        </div>
        <div className="logo">
          <Link to="/">
            <img src={Ajio} alt="Logo" />
          </Link>
        </div>
        <div className="menu-bar abc">
          <Link to="/men">MEN</Link>
          <Link to="/women">WOMEN</Link>
          <Link to="/kids">KIDS</Link>
          <Link to="/indie">INDIE</Link>
          <Link to="/kitchen">HOME AND KITCHEN</Link>
          <input type="text" placeholder="Search AJIO" />
          <a href="http://localhost:3001/">
            <img src={wishlistIcon} alt="WishList" />
          </a>
        </div>
      </section>
    </>
  );
};
export default Header;
