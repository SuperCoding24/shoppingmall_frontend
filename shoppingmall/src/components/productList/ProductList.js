import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import PaginationArea from "../sellpage/PaginationArea";
import ProducFilter from "./ProducFilter";
// svg
import unlike from "../../assets/unlike.svg";
import { LoadingSpinner } from "../../style/CommonStyles";
import { ClipLoader } from "react-spinners";

const ProductList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const productId = searchParams.get("productId");
  const productsPerRow = 4;
  const size = 8;
  const pages = [1, 2, 3, 4, 5];
  const [currentPageNum, setCurrentPageNum] = useState(1);
  const [images, setImages] = useState([]);
  const [listData, setListData] = useState([]);
  const [sort, setSort] = useState("");
  const [loading, setLoading] = useState(true);

  const products = listData.map((item) => ({
    image: item.files,
    title: item.title,
    price: item.price,
    description: item.description,
    productId: item.productId,
  }));

  const ListData = (data) => {
    setListData(data);
    console.log(data);
  };

  const clickProduct = (productId) => {
    navigate(`/product/${productId}`, { state: { productId: productId } });
  };

  return (
    <Container>
        <Wrapper>
          <ProducFilter sort={setSort} />
          <ListContainer>
            <CardList>
              {products.map((product) => (
                <Item
                  key={product.productId}
                  productsPerRow={productsPerRow}
                >
                  <ImageWrapper>
                    <Image
                      src={product.image}
                      alt={product.title}
                      onClick={() => clickProduct(product.productId)}
                    />
                  </ImageWrapper>
                  <InfoWrapper>
                    <Info>
                      <ProductName>
                        <div onClick={() => clickProduct(product.productId)}>
                          {product.title}
                        </div>
                        <IconWrapper>
                          <Icon src={unlike} />
                        </IconWrapper>
                      </ProductName>
                      <ProductDescription>
                        {product.description}
                      </ProductDescription>
                      <ProductPrice>
                        {product.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        <PriceText>원</PriceText>
                      </ProductPrice>
                    </Info>
                  </InfoWrapper>
                </Item>
              ))}
            </CardList>
          </ListContainer>
          <PaginationArea
            currentPageNum={currentPageNum}
            size={size}
            sort={sort}
            pageNum={1}
            onPageChange={currentPageNum}
            ListData={ListData}
          />
      </Wrapper>
    </Container>
  );
};

export default ProductList;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 1267px;
  display: flex;
  flex-direction: column;
  margin-top: 32px;
`;

const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 28px;
  width: 100%;
`;

const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  width: 100%;
`;

const Item = styled.div`
  max-width: calc(25% - 20px);
  flex: 1 1 calc(25% - 20px);
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;

  cursor: pointer;
`;

const ImageWrapper = styled.div`
  width: 296px;
  height: 300px;
  background-color: gray;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
`;

const Info = styled.div`
  flex-grow: 1;
`;

const ProductName = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  font-size: 16px;
  font-weight: bold;
  text-decoration: underline;
`;

const ProductPrice = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
`;

const PriceText = styled.div`
  font-weight: 300;
  font-size: 14px;
  color: #5d5d5d;
`;

const ProductDescription = styled.div`
  padding-bottom: 15px;
  font-size: 14px;
  color: #5d5d5d;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;
