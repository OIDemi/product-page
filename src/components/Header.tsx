import HeaderCartIcon from "../assets/images/icon-cart.svg?react";
import AvatarIcon from "../assets/images/image-avatar.png";
import CompanyLogo from "../assets/images/logo.svg";
import MenuIcon from "../assets/images/icon-menu.svg";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown";
import { DropdownMenuContent } from "@radix-ui/react-dropdown-menu";
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
        <DropdownMenu>
          <DropdownMenuTrigger>
            <HeaderCartIcon />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            sideOffset={20}
            className=' z-10 bg-white shadow-md rounded-lg w-[98vw] max-w-[500px] mx-auto sm:w-80'
          >
            <DropdownMenuLabel className='dropdown-heading'>
              Cart
            </DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuItem className='dropdown-item'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              sunt.
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

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
