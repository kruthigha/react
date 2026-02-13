import { LOGO_URL } from "../utils/constants";
const Header = () => {
  return (
    <div id="header-container" className="headerContainer">
      <div id="logo-container" className="logoContainer">
        <img
          id="img-container"
          className="imgContainer"
          src= {LOGO_URL}
        />
      </div>
      <div id="nav-items" className="navItems">
        <ul>
          <li id="nav-item" className="navItem">
            Home
          </li>
          <li id="nav-item" className="navItem">
            About
          </li>
          <li id="nav-item" className="navItem">
            Contact
          </li>
          <li id="nav-item" className="navItem">
            Cart
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;