import { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";
import styled from "styled-components";
import Product from "../components/product/ProductDetail";
import { ROUTE } from "../constants/route";
import { Cart } from "../types/cart";
import { Product as ProductType } from "../types/product";
import { api } from "../utils/api";

interface RouteParams {
  id: string;
}

interface RouteState {
  product: ProductType;
}

function Detail() {
  const { id } = useParams<RouteParams>();
  const { state } = useLocation<RouteState>();
  const [product, setProduct] = useState<ProductType>();

  useEffect(() => {
    if (state && String(state.product.id) === id) {
      setProduct(state.product);

      return;
    }

    (async () => {
      try {
        const product = await api.get<ProductType>(`/products/${id}`);
        setProduct(product);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [state, id]);

  const history = useHistory();

  const handleCartClick = async () => {
    const cart = product;
    await api.post<string, Cart[]>("/carts", JSON.stringify(cart));
    history.push(ROUTE.CART);
  };

  return (
    <Container>
      <Box>
        <Img src={product?.imageUrl} alt={product?.name} />
        <Info>
          <Product product={product} />
        </Info>
        <Button onClick={handleCartClick}>장바구니</Button>
      </Box>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 520;
`;

const Img = styled.img`
  width: 480px;
  height: 480px;
  margin-bottom: 10px;
`;

const Info = styled.div`
  width: 100%;
`;

const Button = styled.button`
  width: 100%;
  padding: 24px;
  background: #73675c;
  font-size: 24px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export default Detail;
