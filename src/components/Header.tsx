import HeaderCartIcon from "../assets/images/icon-cart.svg?react";
import AvatarIcon from "../assets/images/image-avatar.png";
import CompanyLogo from "../assets/images/logo.svg";
import MenuIcon from "../assets/images/icon-menu.svg";
import DeleteIcon from "../assets/images/icon-delete.svg";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown";
import { DropdownMenuContent } from "@radix-ui/react-dropdown-menu";

type TCart = {
  id: number;
  image: string;
  imageThumbnail: string;
};

type TProps = {
  cart: TCart[];
  quantity: number;
};
const Header = ({ cart, quantity }: TProps) => {
  const totalAmount = quantity * 125.0;
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
              <ul>
                {cart.map((item) => (
                  <li key={item.id} className='flex items-center gap-[1rem]'>
                    <img
                      src={item.imageThumbnail}
                      alt='shoe image'
                      className='rounded-[4px]'
                      width={50}
                      height={50}
                    />
                    <div className='flex  flex-col'>
                      <p className=' '>Fall Limited Edition Sneakers</p>
                      <div className='flex gap-[8px]'>
                        <div className='flex'>
                          <p>$125.00</p>
                          <p>x</p>
                          <p>{quantity}</p>
                        </div>
                        <p className=' font-bold'>${totalAmount.toFixed(2)}</p>
                      </div>
                    </div>
                    <img
                      src={DeleteIcon}
                      alt='Delete product'
                      className='cursor-pointer'
                    />
                  </li>
                ))}
              </ul>
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
