import styled from "styled-components";

export default function CartPaymentController() {
  return (
    <Wrapper>
      <Header>
        <Title>결제예상금액</Title>
      </Header>
      <Divide />
      <div>
        <Info>
          <HighlightText>결제예상금액</HighlightText>
          <HighlightText>21,800원</HighlightText>
        </Info>
        <ButtonWrapper>
          <Button>주문하기(3개)</Button>
        </ButtonWrapper>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 35%;
  height: 260px;
  margin-left: 5%;
  margin-top: 80px;

  border: 1px solid #dddddd;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 30px;
`;

const Title = styled.h3`
  display: flex;
  align-items: center;
  font-size: 20px;
`;

const Divide = styled.hr`
  width: 100%;
  border: 1px solid #aaaaaa;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin-top: 20px;
`;

const HighlightText = styled.span`
  position: relative;
  font-weight: 700;
  display: inline-block;
  text-align: center;
  padding: 0 2px;
  font-size: 20px;

  &::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 8px;
    background-color: #2ac1bc;
    opacity: 0.5;
    z-index: -1;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-left: 10px;
  margin-right: 10px;
`;

const Button = styled.button`
  background: #2ac1bc;
  font-size: 24px;
  color: white;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
