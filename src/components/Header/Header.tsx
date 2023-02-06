import "../Header/header.scss";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <a href="/#" className="logo">
          <LogoIcon />
        </a>
        <nav className="header__navigation">
          <a href="/#" className="header__navigation-link">
            Features
          </a>
          <a href="/#" className="header__navigation-link">
            Partners
          </a>
          <a href="/#" className="header__navigation-link">
            Stories
          </a>
        </nav>
        <button className="header__button">Download for free</button>
      </div>
    </header>
  );
};
