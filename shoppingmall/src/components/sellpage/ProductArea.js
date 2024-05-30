import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ModifyIcon from "../../assets/modify.svg";
import ModifyHIcon from "../../assets/modifyh.svg";

const ProductArea = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [image, setImage] = useState([]);
  const [title, setTitle] = useState([]);
  const [price, setPrice] = useState([]);
  const [description, setDescription] = useState([]);
  const [startDate, setStartDate] = useState([]);
  const [endDate, setEndDate] = useState([]);
  const [stock, setStock] = useState([]);
  useEffect(() => {
    {
      const url = `${process.env.REACT_APP_API_URL}/products/user/35`;
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
        },
      };

      fetch(url, options)
        .then((response) => {
          if (!response.ok) {
            throw new Error("상품 정보를 가져오는데 실패했습니다.");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Success:", data);
          // Base64 이미지 데이터를 이미지 URL로 변환하여 상태에 저장
          const imagesArray = data.map((item) => ({
            imageUrl: `data:image/jpeg;base64,${item.imageBase64}`,
            alt: item.productName,
          }));
          setImage(imagesArray);

          const titlesArray = data.map((item) => item.productName);
          setTitle(titlesArray);

          const pricesArray = data.map((item) => item.price);
          setPrice(pricesArray);

          const descriptionsArray = data.map((item) => item.description);
          setDescription(descriptionsArray);

          const startDatesArray = data.map((item) => item.startDate);
          setStartDate(startDatesArray);

          const endDatesArray = data.map((item) => item.endDate);
          setEndDate(endDatesArray);

          const stocksArray = data.map((item) => item.stock);
          setStock(stocksArray);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, []);

  const products = Array.from({ length: 8 }, (_, index) => {
    if (image.length > index) {
      return {
        image: image[index].imageUrl,
        title: title[index],
        price: price[index],
        description: description[index],
      };
    } else {
      return {
        image: "https://via.placeholder.com/150",
        title: "제목란",
        price: "가격란",
        description: "설명란",
      };
    }
  });

  // 제품 수정 함수
  const handleProductEdit = () => {
    // 여기서 제품 수정 로직을 구현합니다.
    console.log(`제품 수정`);
  };

  return (
    <Wrapper>
      {products.map((product, index) => (
        <StyledProductItem key={index}>
          <ProductImage src={product.image} alt={product.title} />
          <ProductInfo>
            <ProductTitle onClick={() => handleProductEdit(index)}>
              {product.title}
            </ProductTitle>
            <ProductButton
              src={hoveredIndex === index ? ModifyHIcon : ModifyIcon}
              alt="수정"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={handleProductEdit}
            />
          </ProductInfo>
          <ProductPrice>{product.price}</ProductPrice>
          <ProductDescription>{product.description}</ProductDescription>
        </StyledProductItem>
      ))}
    </Wrapper>
  );
};

export default ProductArea;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  margin-left: 10px;
  margin-bottom: 20px;
`;

const StyledProductItem = styled.div`
  width: 250px;
  margin: 0 20px 20px 0;
  box-sizing: border-box;
`;

const ProductImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 10px;
`;

const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 19.36px;
`;

const ProductTitle = styled.h2`
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 19.36px;
  text-align: left;
`;

const ProductButton = styled.img`
  width: 17px;
  height: 17px;
  padding: 10px;
  border: none;
  cursor: pointer;
`;

const ProductPrice = styled.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 16.94px;
  text-align: left;
  margin-top: -6px;
  margin-bottom: 5px;
`;

const ProductDescription = styled.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 16.94px;
  text-align: left;
`;
