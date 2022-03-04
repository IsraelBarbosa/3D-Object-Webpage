import "./Header.scss";
import tresdObjectLogo from "../../image/Header/3dObjectLogo.png";
import Container from "../Container/Container";
import HeaderLayout from "../../layout/HeaderLayout/HeaderLayout";
import menuIcon from "../../image/Header/menuIcon.svg";
import abrirFecharMenu from "./funcoes/abrirFecharMenu";

function Header() {
  return (
    <HeaderLayout>
      <Container>
        <div className="header">
          <div className="header-container-menu-icon-link-logo">
            <div className="header-container-menu-icon">
              <img
                className="header__menu-icon"
                onClick={abrirFecharMenu}
                src={menuIcon}
                alt="icon menu"
              />
            </div>
            <a className="header-link-logo" href="./index.html">
              <img
                className="header__logo"
                src={tresdObjectLogo}
                alt="logo 3d object"
              />
            </a>
          </div>

          <nav className="header__nav">
            <div className="header-nav-container-menu-icon">
              <img
                className="header__nav__menu-icon"
                onClick={abrirFecharMenu}
                src={menuIcon}
                alt="icon menu"
              />
            </div>
            <a className="header__nav__link" href="#1">
              Home
            </a>
            <a className="header__nav__link" href="#1">
              Products
            </a>
            <a className="header__nav__link" href="#1">
              About Us
            </a>
            <a className="header__nav__link" href="#1">
              Blog
            </a>
            <a className="header__nav__link" href="#1">
              Sign Up
            </a>
          </nav>
        </div>
      </Container>
    </HeaderLayout>
  );
}

export default Header;
