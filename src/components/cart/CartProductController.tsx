import styled from "styled-components";
import { Cart } from "../../types/cart";
import CartProduct from "./CartProduct";

interface ProductControllerProps {
  carts: Cart[];
}

function LeftSection({ carts }: ProductControllerProps) {
  const onChange = () => {};

  return (
    <Section>
      <CheckboxHeader>
        <CheckboxContainer>
          <Checkbox
            name="checkbox"
            type="checkbox"
            checked={true}
            onChange={onChange}
          />
          <Label>선택해제</Label>
        </CheckboxContainer>
        <DeleteButton>상품삭제</DeleteButton>
      </CheckboxHeader>
      <CartTitle>든든배송 상품({carts.length}개)</CartTitle>
      <CartTitleDivide />
      {carts.map((cart, idx) => (
        <CartProduct
          key={idx}
          product={cart.product}
          cartQuantity={cart.quantity}
        />
      ))}
    </Section>
  );
}

const Section = styled.section`
  width: 60%;
  margin-top: 50px;
`;

const CheckboxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
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

const Label = styled.label.attrs({ htmlFor: "checkbox" })`
  padding-left: 7px;
`;

const DeleteButton = styled.button`
  padding: 12px 22px;
  border: 1px solid #bbbbbb;
`;

const CartTitle = styled.h3`
  display: flex;
  align-items: center;
  font-size: 20px;
`;

const CartTitleDivide = styled.hr`
  width: 100%;
  border: 2px solid #aaaaaa;
  margin-top: 10px;
`;

export default LeftSection;
