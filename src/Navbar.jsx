import logo from "./assets/Logo.png";
import searchicon from "./assets/searchicon.png";
import cartpic from "./assets/cart.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="daraz__navbar">
      <div className="daraz__navbar-logo">
        <img src={logo} alt="Daraz logo" />
      </div>
      <div className="daraz__navbar-searchbar">
        <input type="text" placeholder="Search in Daraz..." />
        <div className="">
          <img src={searchicon} alt="" />
        </div>
      </div>

      <div className="daraz__navbar-cart">
        <div className="">
          <img src={cartpic} alt="" />
        </div>
      </div>
      <div className="daraz__navbar-livebanner">
        <img
          src="https://icms-image.slatic.net/images/ims-web/5f6edc41-ecbe-4328-8fdf-da3ad500c7c7.gif"
          alt=""
        />
      </div>
    </div>
  );
};

export default Navbar;
