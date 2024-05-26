import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../style/theme";
import { useNavigate } from "react-router-dom";

//svg
import mypage from "../../assets/mypage.svg";
import cart from "../../assets/cart.svg";

const Nav = ({ children }) => {
  // eslint-disable-next-line
  const [isLoggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();
  const moveToHome = () => {
    navigate("/");
  };
  const moveToLogin = () => {
    navigate("/login");
  };
  const moveToSignup = () => {
    navigate("/signup");
  };
  const moveToMypage = () => {
    navigate("/mypage");
  };
  const moveToCart = () => {
    navigate("/cart");
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Title onClick={moveToHome}>super24</Title>
          <ButtonWrapper>
            {isLoggedIn ? (
              <>
                <MyPageButton onClick={moveToMypage}>
                  <Icon src={mypage} />
                  <ButtonText>마이페이지</ButtonText>
                </MyPageButton>
                <CartButton onClick={moveToCart}>
                  <Icon src={cart} />
                  <ButtonText>장바구니</ButtonText>
                </CartButton>
              </>
            ) : (
              <>
                <LoginButton onClick={moveToLogin}>로그인</LoginButton>
                <SignupButton onClick={moveToSignup}>회원가입</SignupButton>
              </>
            )}
          </ButtonWrapper>
        </Wrapper>
      </Container>
      <ContentWrapper>{children}</ContentWrapper>
    </>
  );
};
export default Nav;

const Container = styled.div`
  width: 100%;
  height: 67px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #ffffff;
`;

const Wrapper = styled.div`
  width: 1267px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 20px;
  margin-left: 20px;
  cursor: pointer;
`;

const ButtonWrapper = styled.div``;

const LoginButton = styled.button`
  border-radius: 20px;
  border: 0px;
  background-color: ${theme.mainColor};
  color: #ffffff;
  font-weight: 700;
  padding: 10px 17px 10px 17px;
  margin-right: 12px;
  cursor: pointer;
`;

const SignupButton = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  padding: 10px 17px 10px 17px;
  margin-right: 20px;
  outline: 0;
  cursor: pointer;
  background-color: #ffffff;
`;

const MyPageButton = styled.button`
  border: none;
  border-radius: 10px;
  padding: 3px;
  margin-right: 20px;
  background-color: #ffffff;
  cursor: pointer;
`;

const CartButton = styled.button`
  border: none;
  border-radius: 10px;
  padding: 3px;
  margin-right: 20px;
  background-color: #ffffff;
  cursor: pointer;
`;

const ButtonText = styled.div`
  font-weight: 500;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

const ContentWrapper = styled.div`
  padding-top: 67px; /* 내비게이션 바의 높이와 동일하게 설정 */
`;
