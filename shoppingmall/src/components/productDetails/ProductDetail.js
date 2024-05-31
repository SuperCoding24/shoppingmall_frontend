import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BlackBtn , WhiteBtn } from "../../style/CommonStyles";

// svg
import leftarrow from "../../assets/leftarrow.svg";
import profile from "../../assets/profile.svg";
import unlike from "../../assets/unlike.svg";
import Modal from "../commom/Modal/Modal";
import ContentLayout from "../commom/ContentLayout";

const ProductDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pId = location.state.productId;
  const [productItem, setProductItem] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const [loginStatus, setLoginStatus] = useState(true);
  const [navigateUrl, setNavigateUrl] = useState("/login");
  const [isOnCart, setIsOnCart] = useState(false);
  const [isAlreadyOnCart, setIsAlreadyOnCart] = useState(false);
  const [modalClose, setModalClose] = useState(false);

  const closeModal = () => {
    setIsVisible(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/product/${pId}`
        );
        const data = await response.json();
        setProductItem(data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, [pId]);

  const { thumbnailUrl, productName, price, description, userNickName } =
    productItem;
  let productPrice =
    (price + "").toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " 원";

    const putOnCart = async () => {
      const cartData = {
          productId: productItem.productId,
          quantity: 1
      };
      console.log("cartData: ", cartData);
     
      let loginToken = localStorage.getItem("login-token");
      let userId = localStorage.getItem("user_Id");
      if (!loginToken) {
          setLoginStatus(false);
          setIsVisible(true);
          console.log("로그인 안되있음: ", loginStatus, isVisible);
      } else {
          try {
              const response = await fetch(`${process.env.REACT_APP_API_URL}/cart`, {
                  method: "POST",
                  headers: {
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${loginToken}`,
                  },
                  body: JSON.stringify(cartData),
              });

              if (!response.ok) {
                  throw new Error("상품추가에 실패했습니다");
              } else {
                  const data = await response.json();
                  console.log("장바구니에 삼품이 담겼습니다: " , data);
                  if (data.cartItemId != 0) {
                      setIsOnCart(true);
                      setNavigateUrl("/cart");
                  } else if (data.message === " 동일한 상품이 이미 장바구니에 있습니다.") {
                      setIsAlreadyOnCart(true);
                      setNavigateUrl("/");
                  }
              }
          } catch (error) {
            console.error(error);
          }  
    }
  };

  const navigateToPage = () => {
    navigate(navigateUrl);
  };

  return (
    <ContentLayout title={"상품 정보"} width="1000px">
      <Wrapper>
        <Content>
          <ContentWrapper>
            <LeftContainer>
              <CarouselContainer>
                <DetailImage
                  src={`data:image/jpeg;base64,${thumbnailUrl}`}
                  alt={productName}
                />
              </CarouselContainer>
            </LeftContainer>
            <RightContainer>
              <InfoWrapper>
                <UserWrapper>
                  <UserLeftWrapper>
                    <img src={profile} />
                    <UserName>{userNickName}</UserName>
                  </UserLeftWrapper>
                  <HeartWrapper>
                    <img src={unlike} />
                  </HeartWrapper>
                </UserWrapper>
                <Line></Line>
                <DetailWrapper>
                  <ProductName>{productName}</ProductName>
                  <ProductPrice>{productPrice}</ProductPrice>
                  <Description>{description}</Description>
                </DetailWrapper>
              </InfoWrapper>
            </RightContainer>
          </ContentWrapper>
        </Content>
        <CartButton onClick={putOnCart}>장바구니 담기</CartButton>
        {isVisible && (
          <Modal
            onClose = {closeModal}
            title="로그인이 필요한 기능입니다."
            subText="로그인 페이지로 이동하시겠습니까?"
            navigateToPage={navigateToPage}
            onConfirm={null}
          />
        )}
        {isOnCart && (
          <Modal
            onClose = {closeModal}
            title="장바구니에 상품이 추가되었습니다"
            subText="확인을 누르시면 메인페이지로 이동됩니다"
            navigateToPage={navigateToPage}
            onConfirm={null}
          />
        )}
        {isOnCart && (
          <Modal
            onClose = {closeModal}
            title="장바구니에 상품이 추가되었습니다"
            subText="확인을 누르시면 메인페이지로 이동됩니다"
            navigateToPage={navigateToPage}
            onConfirm={null}
          />
        )}
        {isAlreadyOnCart && (
          <Modal
            onClose = {closeModal}
            title="동일한 상품이 이미 장바구니에 있습니다"
            subText="다른 상품을 구매해 보는 건 어떨까요?"
            navigateToPage={navigateToPage}
            onConfirm={null}
          />
        )}
      </Wrapper>
    </ContentLayout>
  );
};

export default ProductDetail;

const Wrapper = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
`;

const ContentWrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`;

const LeftContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 30px;
  border-left: 1px solid ${props => props.theme.border};
`;

const CarouselContainer = styled.div`
  width: 100%;
`;

const DetailImage = styled.img`
  width: 100%;
`;

const UserWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
`;

const InfoWrapper = styled.div``;

const UserLeftWrapper = styled.div`
  display: flex;
  width: 160px;
  height: 50px;
`;

const HeartWrapper = styled.div`
  width: 20px;
  height: 18.33px;
  margin-top: 15px;
`;

const UserName = styled.div`
  width: 100px;
  height: 18px;
  margin-left: 8px;
  margin-top: 15px;
  font-size: 16px;
  font-weight: bold;
  line-height: 19.36px;
`;

const Line = styled.hr`
  margin-top: 14px;
`;

const DetailWrapper = styled.div`
  width: 100%;
  margin-top: 26px;
`;

const CartButton = styled.button`
    cursor: pointer;
`;

const ProductName = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  line-height: 19.36px;
`;

const ProductPrice = styled.div`
  width: 100%;
  margin-top: 6px;
  font-weight: bold;
  font-size: 20px;
  line-height: 24.2px;
`;

const Description = styled.div`
  width: 100%;
  max-height: 250px;
  margin-top: 8px;
  overflow-y: auto;
  font-weight: 500;
  font-size: 16px;
  line-height: 19.38px;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
