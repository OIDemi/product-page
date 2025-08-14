import HeaderCartIcon from "../assets/images/icon-cart.svg?react";
import AvatarIcon from "../assets/images/image-avatar.png";
import CompanyLogo from "../assets/images/logo.svg";
import MenuIcon from "../assets/images/icon-menu.svg";
const Header = () => {
  return (
    <header>
      <div className='logo-and-nav-links-mobile'>
        <img src={MenuIcon} alt='open menu' />
        <img src={CompanyLogo} alt='sneakers' />
      </div>
      <div className='logo-and-nav-links'>
        <img src={CompanyLogo} alt='sneakers' />
        <nav>
          <ul>
            <li>
              <a href='#'>Collections</a>
            </li>
            <li>
              <a href='#'>Men</a>
            </li>
            <li>
              <a href='#'>Women</a>
            </li>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className='cart-and-avatar-icon'>
        <HeaderCartIcon />
        <img
          src={AvatarIcon}
          alt='profile picture'
          width={50}
          height={50}
          className='avatar-icon'
        />
      </div>
    </header>
  );
};

export default Header;
