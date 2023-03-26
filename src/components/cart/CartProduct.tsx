import { useEffect, useState } from "react";
import styled from "styled-components";
import { Product } from "../../types/product";
import { formatPrice } from "../../utils/common";

interface CartProductProps {
  product: Product;
  cartQuantity: number;
  onChangeSelectStatus: Function;
  onChangeQuantity: Function;
}

const NUMBER_CONTROL = {
  UP: "up",
  DOWN: "down",
};

function CartProduct({
  product,
  cartQuantity,
  onChangeSelectStatus,
  onChangeQuantity,
}: CartProductProps) {
  const [quantity, setQuantity] = useState(cartQuantity);
  const [isSelect, setIsSelect] = useState(true);

  const onClick = (control: string) => {
    if (control === NUMBER_CONTROL.UP) {
      if (quantity === 20) {
        return;
      }

      setQuantity((quantity) => quantity + 1);
      return;
    }

    if (quantity === 1) {
      return;
    }

    setQuantity((quantity) => quantity - 1);
  };

  const onChangeCheckbox = () => {
    setIsSelect((isSelect) => !isSelect);
  };
  const onChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
    const value = Number(e.currentTarget.value);

    if (value > 20) {
      return;
    }

    if (value === 0) {
      setQuantity(1);
      return;
    }

    setQuantity(value);
  };

  useEffect(() => {
    onChangeQuantity();
  }, [quantity, onChangeQuantity]);

  useEffect(() => {
    onChangeSelectStatus();
  }, [isSelect, onChangeSelectStatus]);

  return (
    <>
      <Container>
        <Box>
          <Checkbox
            name="checkbox"
            type="checkbox"
            checked={isSelect}
            onChange={onChangeCheckbox}
          />
          <Img src={product.imageUrl} alt={product.name} />
          <CartName>{product.name}</CartName>
        </Box>
        <RightSide>
          <TrashImg src="svgs/trash.svg" alt="삭제" />
          <NumberInputContainer>
            <NumberInput
              type="number"
              value={quantity}
              onChange={onChangeInput}
            />
            <div>
              <NumberInputButton onClick={() => onClick(NUMBER_CONTROL.UP)}>
                ▲
              </NumberInputButton>
              <NumberInputButton onClick={() => onClick(NUMBER_CONTROL.DOWN)}>
                ▼
              </NumberInputButton>
            </div>
          </NumberInputContainer>
          <CartPrice>{formatPrice(quantity * product.price)}원</CartPrice>
        </RightSide>
      </Container>
      <DivideLine />
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Box = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
`;

const Checkbox = styled.input`
  appearance: none;
  border: 1px solid #2ac1bc;
  border-radius: 2px;
  width: 1.75rem;
  height: 1.75rem;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:checked {
    background-color: #2ac1bc;
  }

  &:after {
    content: "✔";
    width: 100%;
    height: 100%;
    font-size: 0.75rem;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Img = styled.img`
  width: 144px;
  height: 144px;
`;

const CartName = styled.span`
  font-size: 20px;
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: end;
  gap: 15px;
`;

const TrashImg = styled.img`
  align-self: flex-end;
`;

const NumberInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NumberInput = styled.input`
  width: 72px;
  height: 58px;
  border: 1px solid #dddddd;
  text-align: center;
  font-size: 24px;
`;

const NumberInputButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 12px;
  border: 1px solid #dddddd;
  font-size: 100%;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const CartPrice = styled.span`
  color: #333333;
  align-self: flex-end;
`;

const DivideLine = styled.hr`
  width: 100%;
  border: 1px solid #aaaaaa;
  margin-top: 10px;
`;

export default CartProduct;
