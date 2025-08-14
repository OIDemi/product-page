import { data } from "../data/data";
import ReduceQuantityIcon from "../assets/images/icon-minus.svg?react";
import IncreaseQuantityIcon from "../assets/images/icon-plus.svg?react";
import CartIcon from "../assets/images/icon-cart.svg?react";
import PreviousIcon from "../assets/images/icon-previous.svg?react";
import NextIcon from "../assets/images/icon-next.svg?react";
import { useState } from "react";

const Product = () => {
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

  console.log(count);
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
            <img src={data[count].image} alt='image 1' />
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
          <div>
            <div>
              <p>$125.00</p>
              <p>50%</p>
            </div>
            <p>$250.00</p>
          </div>

          <div className='btn-container'>
            <button type='button' className='quantity-btn btn'>
              <ReduceQuantityIcon className='reduce-icon' />
              <p>0</p>
              <IncreaseQuantityIcon className='increase-icon' />
            </button>
            <button type='button' className='add-to-cart-btn btn'>
              <CartIcon />
              <p>Add to cart</p>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Product;
