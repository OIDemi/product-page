import { useState } from "react";
import Header from "./components/Header";
import Product from "./components/Product";

type TCart = {
  id: number;
  image: string;
  imageThumbnail: string;
};

export default function App() {
  const [cart, setCart] = useState<TCart[]>([]);
  const [quantity, setQuantity] = useState(0);

  return (
    <>
      <Header cart={cart} quantity={quantity} setCart={setCart} />
      <Product
        cart={cart}
        setCart={setCart}
        quantity={quantity}
        setQuantity={setQuantity}
      />
    </>
  );
}
