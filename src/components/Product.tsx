import { data } from "../data/data";
import ReduceQuantityIcon from "../assets/images/icon-minus.svg?react";
import IncreaseQuantityIcon from "../assets/images/icon-plus.svg?react";
import CartIcon from "../assets/images/icon-cart.svg?react";
import PreviousIcon from "../assets/images/icon-previous.svg?react";
import NextIcon from "../assets/images/icon-next.svg?react";
import { useState } from "react";

type TCart = {
  id: number;
  image: string;
  imageThumbnail: string;
};
type TProps = {
  cart: TCart[];
  setCart: React.Dispatch<React.SetStateAction<TCart[]>>;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
};
const Product = ({ cart, setCart, quantity, setQuantity }: TProps) => {
  const [count, setCount] = useState<number>(0);

  const checkImg = (num: number) => {
    if (count !== num) setCount(num);
  };

  const handleNextImg = () => {
    if (count < data.length - 1) setCount((count) => count + 1);
  };

  const handlePreviousImg = () => {
    if (count > 0) setCount((count) => count - 1);
  };

  const handleIncreaseQuantity = () => {
    setQuantity((num) => num + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 0) setQuantity((num) => num - 1);
  };

  const addToCart = (product: TCart) => {
    if (cart.length > 0) return;
    if (quantity === 0) setQuantity((count) => count + 1);
    const newCart = { ...product };
    setCart([...cart, newCart]);
  };

  console.log(cart);
  return (
    <main>
      <section className='gallery-layout'>
        {/* 1st grid */}
        <div className='img-gallery-container'>
          <div className='img-gallery-subcontainer'>
            <button
              type='button'
              className='previous-btn'
              onClick={handlePreviousImg}
            >
              <PreviousIcon />
            </button>
            <img
              src={data[count].image}
              alt={`Image ${count + 1}`}
              loading='lazy'
            />
            <button type='button' className='next-btn' onClick={handleNextImg}>
              <NextIcon />
            </button>
          </div>

          <ul className='img-thumbnail-container'>
            {data.map((item, index) => (
              <li
                key={item.id}
                onClick={() => checkImg(index)}
                className={
                  count === index
                    ? "thumbnail-img drop-quality"
                    : "thumbnail-img "
                }
              >
                <img
                  src={item.imageThumbnail}
                  alt='thumbnails images'
                  width={88}
                  height={88}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* 2nd grid */}
        <div className='img-gallery-details-container'>
          <h1>SNEAKER COMPANY</h1>
          <h2>Fall Limited Edition Sneakers</h2>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className='price-container'>
            <div className='discount-container'>
              <p className='new-price-tag'>$125.00</p>
              <p className='discount'>50%</p>
            </div>
            <p className='old-price-tag'>$250.00</p>
          </div>

          <div className='btn-container'>
            <button type='button' className='quantity-btn btn'>
              <ReduceQuantityIcon
                className='reduce-icon'
                onClick={handleDecreaseQuantity}
              />
              {quantity}
              <IncreaseQuantityIcon
                className='increase-icon'
                onClick={handleIncreaseQuantity}
              />
            </button>
            <button
              type='button'
              className='add-to-cart-btn btn'
              onClick={() => addToCart(data[count])}
            >
              <CartIcon className='cart-icon' />
              Add to cart
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Product;
