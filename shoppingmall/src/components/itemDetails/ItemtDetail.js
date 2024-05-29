import React, { useState , useEffect } from 'react';
import { useLocation , useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BlackBtn } from "../../style/CommonStyles";

// svg
import leftarrow from "../../assets/leftarrow.svg";
import profile from "../../assets/profile.svg";
import unlike from "../../assets/unlike.svg";
import Modal from '../commom/Modal/Modal';

const ProductDetail = () => {
   const navigate = useNavigate();
   const location = useLocation();
   const pId = location.state.productId;
   const [productItem, setProductItem] = useState({});
   const [isVisible, setIsVisible] = useState(false);
   const [loginStatus, setLoginStatus] = useState(true);
   const [navigateUrl, setNavigateUrl] = useState("/login");
   
   const closeModal = () => {
        setIsVisible(false);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await fetch(
                `${process.env.REACT_APP_API_URL}/product/${pId}`
              );
              const data = await response.json();
              console.log("data: ", productItem);
              setProductItem(data);
              console.log("data: ", productItem);
      
            } catch (error) {
              console.error("Error fetching data", error);
            }
          };
        fetchData();
    }, productItem);

    const {productName, price, description, userNickName} = productItem;
    const productImages = productItem.imagePaths;

    let productPrice = (price+"").toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')  + " 원";

    const putOnCart = () => {
        console.log("장바구니추가 버튼 클릭");
        // 로그인 여부 검사
        // 1. 로그인이 되어있지 않을때 팝업창을 띄운다
        // 2. 로그인이 되어있을때 Post 요청을 보낸다
        let loginToken = localStorage.getItem("login-token");
        if (loginToken == "" || loginToken == null || loginToken == undefined || ( loginToken != null && typeof loginToken == "object" && !Object.keys(loginToken).length)) {
            setLoginStatus(false);
            setIsVisible(true);
            console.log("로그인 안되있음: ", loginStatus, isVisible);
        } else {
            setLoginStatus(true);
            setNavigateUrl("/cart");
            console.log("로그인 되있음");
            console.log("장바구니 추가 로직 작성");
        }
    };

    const navigateToPage = () => {
        navigate(navigateUrl);
    };

    return (
        <Layout>
            <Wrapper>
                <Nav>
                    <IconWrapper>
                       <img src={leftarrow}/> 
                    </IconWrapper>
                    <Title className="title">
                        상품 정보    
                    </Title>
                </Nav>
                <Content>
                    <ContentWrapper>
                        <LeftContainer>
                            <CarouselContainer>
                                <img src="https://via.placeholder.com/250/#D9D9D9"/>
                            </CarouselContainer>
                        </LeftContainer>
                        <RightContainer>
                            <InfoWrapper>
                                <UserWrapper>
                                    <UserLeftWrapper>
                                        <img src={profile}/>
                                        <UserName>
                                            {userNickName}
                                        </UserName>
                                    </UserLeftWrapper>
                                    <HeartWrapper>
                                        <img src={unlike}/>
                                    </HeartWrapper>
                                </UserWrapper>
                                <Line></Line>
                                <DetailWrapper>
                                    <ProductName>
                                        {productName}
                                    </ProductName>
                                    <ProductPrice>
                                        {productPrice}
                                    </ProductPrice>
                                    <Description>
                                        {description}
                                    </Description>
                                    <Option>
                                        #옵션 #옵션
                                    </Option>
                                </DetailWrapper>
                            </InfoWrapper>
                        </RightContainer>
                    </ContentWrapper>
                </Content>
                <CartButton onClick={putOnCart}>
                    장바구니담기
                </CartButton>
                {isVisible  && (
                <Modal
                    open={isVisible} 
                    onClose={closeModal} 
                    title="로그인이 필요한 기능입니다." 
                    subText="로그인 페이지로 이동하시겠습니까?" 
                    navigateToPage={navigateToPage}/>
                )}
            </Wrapper>
        </Layout>
    );
};

export default ProductDetail;

const Layout = styled.div`
    display: flex;
    justify-content: center;
    width: 1850px;
    height: 1080px;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1700px;
    height:100%;
`;

const Nav = styled.div`
    display: flex;
    justify-content:start;
    width: 1252px;
    height: 50px;
    margin-top: 55px;
`;

const Content = styled.div`
    display: flex;
    justify-content: center;
    width: 1252px;
    height: 600px;
    margin-top: 55px;
`;

const IconWrapper = styled.div`
    width: 24px;
    height: 24px;
    margin-left: 146px;
`;

const Title = styled.div`
    width: 120px;
    height: 29px;
    margin-top: 3px;
    margin-left: 364px;
    text-align:center;
    font-weight: bold;
    font-size: 24px;
    line-height: 29.05px;
`;

const ContentWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 1200px;
    height: 100%;
`;

const LeftContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 500px;
    height: 100%;
`;

const RightContainer = styled.div`
    width: 500px;
    height: 100%;
`;

const CarouselContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 700px;
    height: 448px;
    margin-top: 62px;
`;

const UserWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 500px;
    height: 50px;
`;

const InfoWrapper = styled.div`
    margin-top: 62px;
    height: 500px;
`;

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

const DetailWrapper  = styled.div`
    width: 160px;
    height: 100%;
    margin-top: 26px;
`;

const ProductName  = styled.div`
    width: 150px;
    height: 19px;
    font-size: 16px;
    font-weight: 500;
    line-height: 19.36px;
`;

const ProductPrice  = styled.div`
    width: 120px;
    height: 24px;
    margin-top: 6px;
    font-weight: bold;
    font-size: 20px;
    line-height: 24.2px;
`;

const Description  = styled.div`
    width: 600px;
    height: 150px;
    margin-top: 8px;
    overflow-y: auto;
    font-weight: 500;
    font-size: 16px;
    line-height: 19.38px;
`;

const Option  = styled.div`
    width: 200px;
    height: 18px;
    margin-top: 16px;
    color: #858585;
`;

const CartButton = styled(BlackBtn)`
    margin-top: 58px;
    width: 250px;
    height: 40px;
`;