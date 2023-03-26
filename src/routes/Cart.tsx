import { useEffect, useMemo, useState } from "react";
import CartPaymentController from "../components/cart/CartPaymentController";
import CartProductController from "../components/cart/CartProductController";
import { Cart as CartType } from "../types/cart";
import { api } from "../utils/api";

function Cart() {
  const [carts, setCarts] = useState<CartType[]>([]);
  const [selectedCarts, setSelectedCarts] = useState<number[]>([]);
  const price = useMemo(() => {
    return selectedCarts.reduce((acc, cur) => {
      console.log(
        "%c 🤩🤩🤩 영우의 로그 acc: ",
        "font-size: x-large; color: #bada55;",
        "",
        cur
      );
      const currentCart = carts[cur];
      const cartPrice = currentCart.quantity * currentCart.product.price;
      return acc + cartPrice;
    }, 0);
  }, [selectedCarts]);

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

  const onChangeCarts = async (cart: CartType) => {
    await api.patch<string, CartType>("/carts", JSON.stringify(cart));
  };
  const onChangeCartsSelect = (carts: number[]) => {
    setSelectedCarts(carts);
  };

  return (
    <>
      {price}
      <CartProductController
        carts={carts}
        onChangeCarts={onChangeCarts}
        onChangeCartsSelect={onChangeCartsSelect}
      />
      <CartPaymentController />
    </>
  );
}

export default Cart;
