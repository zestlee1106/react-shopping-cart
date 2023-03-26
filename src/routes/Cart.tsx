import { useEffect, useState } from "react";
import CartPaymentController from "../components/cart/CartPaymentController";
import CartProductController from "../components/cart/CartProductController";
import { Cart as CartType } from "../types/cart";
import { api } from "../utils/api";

function Cart() {
  const [carts, setCarts] = useState<CartType[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const carts = await api.get<CartType[]>("/carts");
        setCarts(carts);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <>
      <CartProductController carts={carts} />
      <CartPaymentController />
    </>
  );
}

export default Cart;
