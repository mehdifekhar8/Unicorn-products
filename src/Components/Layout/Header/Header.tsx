import "./Header.scss";
import Logo from "../../../UIAppBundle/icons/Logo";
import Call from "../../../UIAppBundle/icons/Call";
import Truck from "../../../UIAppBundle/icons/Truck";
import InputWithIcon from "../../Input/Input";
import SvgHeart from "../../../UIAppBundle/icons/Heart";
import SvgSearch from "../../../UIAppBundle/icons/Search";
import SvgShopping from "../../../UIAppBundle/icons/ShoppingCart";
import Profile from "../../../UIAppBundle/icons/Profile";
import SvgNotification from "../../../UIAppBundle/icons/Notification";
import NotificationBadge from "../../NotificationBadge/NotificationBadge";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <Logo />
        </div>
        <div className="menu-items">
          <a href="/" className="menu-item">
            <Call />
            <span className="menu-text">Call Center</span>
          </a>
          <a href="/" className="menu-item">
            <Truck />
            <span className="menu-text">Shipping & Returns</span>
          </a>
        </div>
      </div>
      <div className="row">
        <div className="left-icons">
          <a href="/" className="menu-item">
            <span className="menu-text">Shop</span>
          </a>
          <a href="/" className="menu-item">
            <span className="menu-text">Promo</span>
          </a>
          <a href="/" className="menu-item">
            <span className="menu-text">About</span>
          </a>
          <a href="/" className="menu-item">
            <span className="menu-text">Blog</span>
          </a>
        </div>
        <div className="input-container">
          <InputWithIcon
            icon={<SvgSearch />}
            placeholder="Search what you need"
            className="custom-input-class"
          />
        </div>
        <div className="right-icons">
          <a href="/" className="menu-item">
            <SvgHeart />
          </a>
          <NotificationBadge
            icon={<SvgShopping />}
            number={3}
          ></NotificationBadge>

          <a href="/" className="menu-item">
            <Profile />
          </a>
          <a href="/" className="menu-item">
            <SvgNotification />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
