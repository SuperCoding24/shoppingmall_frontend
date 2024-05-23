import React, { useState } from 'react';
import { useNavigate , Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from "../../style/theme";
import ModalComponent from '../../components/modal/ModalComponent';
import Pagination from "../../components/commom/Pagination";
// svg
import unlike from "../../assets/unlike.svg";
import pencil from "../../assets/pencil.svg"
import categoryDropDown from "../../assets/categoryDropDown.svg";

const ProductListPage = () => {
   const navigate = useNavigate();
   const [btnActive, setBtnActive] = useState(1);
   const [isVisible, setIsVisible] = useState(false);
   const [isChecked, setIsLike] = useState([]);
   const [isLogin, setIsLogin] = useState(true);
   const productsPerRow = 3;
   const pages = [1, 2, 3, 4, 5];
   const [currentPage, setCurrentPage] = useState(1);

   const [productList, setProductList] = useState([
    {
        id: 1,
        image: "https://via.placeholder.com/150",
        productName: "아디다스",
        productPrice: "56,000",
        description:
          "상품 설명 상품 설명 상품 설명 상품 설명",
      },
      {
        id: 2,
        image: "https://via.placeholder.com/150",
        productName: "아디다스",
        productPrice: "56,000",
        description:
          "상품 설명 상품 설명 상품 설명 상품 설명",
      },
      {
        id: 3,
        image: "https://via.placeholder.com/150",
        productName: "아디다스",
        productPrice: "56,000",
        description:
          "상품 설명 상품 설명 상품 설명 상품 설명",
      },
      {
        id: 4,
        image: "https://via.placeholder.com/150",
        productName: "아디다스",
        productPrice: "56,000",
        description:
          "상품 설명 상품 설명 상품 설명 상품 설명",
      },
      {
        id: 5,
        image: "https://via.placeholder.com/150",
        productName: "아디다스",
        productPrice: "56,000",
        description:
          "상품 설명 상품 설명 상품 설명 상품 설명",
      },
      {
        id: 6,
        image: "https://via.placeholder.com/150",
        productName: "아디다스",
        productPrice: "56,000",
        description:
          "상품 설명 상품 설명 상품 설명 상품 설명",
      },

   ]);

   const closeModal = () => {
        setIsVisible(false);
   };

   const onPageChange = (page) => {
        setCurrentPage(page);
        console.log(`Page changed to ${page}`);
    };

   const checkLogin = () => {
       if (isLogin === true) {
        navigate("/PR");
        setIsVisible(false);
       } else {
        setIsVisible(true);
       }
   };

   const handleClickButton = idx => {
    setBtnActive(idx);
   };

   const handleHeart = (index) => {
    setIsLike(() => {
      const newLike = [...isChecked];
      newLike[index] = !newLike[index];
      return newLike;  
    })
   };

   const clickProduct = (id) => {
       navigate(`/product/${id}`);
   }

    return (
        <ProductListPageWrapper >
            <ProductListFilterWrapper>
                <LeftWrapper>
                    <ButtonDivs>
                        <Menu 
                            onClick={() => handleClickButton(0)}
                            isActive={btnActive === 0}>
                            추천순    
                        </Menu>
                        <Menu 
                            onClick={() => handleClickButton(1)}
                            isActive={btnActive === 1}>
                            가격 낮은순    
                        </Menu>
                        <Menu 
                            onClick={() => handleClickButton(2)}
                            isActive={btnActive === 2}>
                            가격 높은순    
                        </Menu>
                    </ButtonDivs>
                    <Selector name="category">
                        <Icon src={categoryDropDown}/>
                        <option value="cloth">의류</option>
                        <option value="home">가전</option>
                        <option value="digital">디지털</option>
                    </Selector>
                </LeftWrapper>
                <RightWrapper>
                    <button onClick={checkLogin}>상품 등록 &nbsp;
                            <Icon src={pencil}/>
                    </button>
               </RightWrapper>
            </ProductListFilterWrapper>
            <ProductListContainer>
                {productList.map((product, index) => (
                   
                        <ProductItem key={index} productsPerRow = { productsPerRow} onClick={() => {clickProduct(product.id)}} >
                             
                            <ProductImage src={product.image} alt={product.productName}/>
                            <ProductInfoWrapper>
                                <div>

                                    <ProductName>{product.productName}</ProductName>
                                    <ProductPrice>{product.productPrice + " 원"}</ProductPrice>
                                    <ProductDescription>{product.description}</ProductDescription>
                                </div>
                                <IconWrapper onClick={() => {handleHeart(index)}}>
                                        <Icon src={unlike} fill="grayBgColor"/>
                                </IconWrapper>
                            </ProductInfoWrapper>
                            
                        </ProductItem>
                   
                    
                ))}     
            </ProductListContainer>
            <Pagination
                pages={pages}
                currentPage={currentPage}
                onPageChange={onPageChange}
            />
           
            {isVisible && (
                <ModalComponent 
                    title="로그인이 필요한 기능입니다." 
                    subText="로그인 페이지로 이동하시겠습니까?" 
                    urlPath="/login" 
                    isClosed={closeModal}/>
                )}     
        </ProductListPageWrapper>
    );
};

export default ProductListPage;

const ProductListPageWrapper = styled.div`
    width: 1920px;
    hegith: 1080px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px; 
    margin-top: 99px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content:space-around;
    align-items:space-around;
`;

const ProductListFilterWrapper = styled.div`
    display: flex;
    width: 74%;
    margin-bottom: 62px;
`;

const LeftWrapper  = styled.div`
    margin-left: 21%;
    display: flex;
    justify-content: flex;
`;

const ButtonDivs = styled.div`
    width: 100%;
    display: flex;
`;

const Menu = styled.button`
    background-color:  ${props => (props.isActive ? "#EB4646" : "")};
    color:  ${props => (props.isActive ? "#FFFFFF" : "#000000")};
    width: 86px;
    height: 30px;
    margin-right: 11px;
    padding: 6px 12px 7px 12px;
    border: 1px solid ${theme.border};
    border-radius: 15px;
    font-size: 11px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
        background-color: ${theme.grayBgColor};
        color: ${theme.black};
      }
`;

const Selector = styled.select`
    width: 92px;
    height: 30px;
    margin-left: 5px;
   
    border: 1px solid ${theme.border};
    border-radius: 15px;
    text-align: center;
    cursor: pointer;
    > option {
        &:hover {
            background-color: ${theme.grayBgColor};
        }
    }
`;

const RightWrapper = styled.div`
    width: 100%;
    border: 1px solid black;
    margin-left: 46%;
    > button {
        width: 124px;
        height: 40px;
        border: 1px solid ${theme.white};
        font-size: 14px;
        font-weight: 600;
        line-height: 16.94px;
        padding-right: 5px;
        background-color: ${theme.grayBgColor};
        cursor: pointer;
        
        > svg {
            margin-right: 3px;
            line-height: 16.94px;
            margin-top: 2px;
        }
    }
`;

const ProductListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    // margin-top: 74px;
    margin-left: 120px;
    border: 1px solid red;
`;

const ProductItem = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2px;
    margin: 10px;
    margin-right: 8px;
    // width: calc(100% / ${(props) => props.productsPerRow} - 20px);
    box-sizing: border-box;
    cursor:pointer;
`;

const ProductImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 10px;
  background-color: red;
  margin-bottom: 10px;
`;

const ProductInfoWrapper = styled.div`
    display: flex;
`;

const ProductName = styled.div`
    font-size: 17px;
    font-weight: 500;
    line-heigh: 19.36px;
    margin-bottom: 5px;
`;

const ProductPrice = styled.div`
    font-size: 17px;
    font-weight: 600;
    line-heigh: 16.94px;
    margin-bottom: 5px;
`;

const ProductDescription = styled.div`
    font-size: 14px;
    font-weight: 500;
    line-heigh: 16.94px;
`;

const IconWrapper = styled.div`
    padding: 10px;
    height: 100%
    background-color: ${theme.grayBgColor};
`;

const Icon = styled.img`
    background-color: ${(props) => (props.isActive ? "#EB4646" : "#f4f4f4")};














































`;

const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
`;

const PageButton = styled.button`
  color: ${(props) => (props.isActive ? "white" : "#858585")};
  background-color: ${(props) => (props.isActive ? "#EB4646" : "#f4f4f4")};
  width: 45px;
  height: 45px;
  border-radius: 5px;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  cursor: pointer;
  &:hover {
    background-color: #eb4646;
    color: white;
  }
`;

const ArrowIcon = styled.div`
  width: 10px;
  height: 18px;
  &:hover {
    background-color: #eb4646;
    color: white;
  }
`;
