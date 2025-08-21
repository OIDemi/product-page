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
import { useState } from "react";

type TCart = {
  id: number;
  image: string;
  imageThumbnail: string;
};

type TProps = {
  cart: TCart[];
  quantity: number;
  setCart: React.Dispatch<React.SetStateAction<TCart[]>>;
};
const Header = ({ cart, quantity, setCart }: TProps) => {
  const [openModal, setOpenModal] = useState(false);

  const totalAmount = quantity * 125.0;

  const deleteFromCart = (id: number) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };
  return (
    <header>
      <div className='logo-and-nav-links-mobile'>
        <img
          src={MenuIcon}
          alt='open menu'
          onClick={() => setOpenModal(!openModal)}
        />
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
              {cart.length === 0 ? (
                <p className='text-center '>Your cart is empty</p>
              ) : (
                <>
                  <ul>
                    {cart.map((item) => (
                      <li
                        key={item.id}
                        className='flex items-center gap-[1rem]'
                      >
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
                            <p className=' font-bold'>
                              ${totalAmount.toFixed(2)}
                            </p>
                          </div>
                        </div>
                        <img
                          src={DeleteIcon}
                          alt='Delete product'
                          className='cursor-pointer'
                          onClick={() => deleteFromCart(item.id)}
                        />
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </DropdownMenuItem>
            <DropdownMenuItem className='flex justify-center '>
              <button
                className={`bg-[#ff7e1b] w-[80%] p-10 ${
                  cart.length > 0 ? "block" : "hidden"
                }`}
              >
                Checkout
              </button>
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
