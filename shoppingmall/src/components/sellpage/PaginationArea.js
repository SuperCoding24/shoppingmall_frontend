import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LeftArrowIcon from "../../assets/leftarrow.svg";

const PaginationArea = () => {
  const maxPages = 7;
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = new URLSearchParams();
        params.append("page", currentPage);
        params.append("size", maxPages);
        params.append("sort", "asc");

        const url = `${
          process.env.REACT_APP_API_URL
        }/product?${params.toString()}`;
        const options = {
          method: "GET",
        };

        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error("상품 정보를 가져오는데 실패했습니다.");
        }
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [currentPage, maxPages]);

  const totalPages = maxPages; // 총 페이지 수

  const onPageChange = (page) => {
    if (page >= 0 && page <= totalPages) {
      setCurrentPage(page);
      console.log(`Page changed to ${page}`);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    let startPage = currentPage - 2;
    let endPage = currentPage + 2;

    if (startPage < 0) {
      startPage = 0;
      endPage = 4;
    } else if (endPage > totalPages) {
      endPage = totalPages;
      startPage = totalPages - 4;
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <PageButton
          key={i}
          onClick={() => onPageChange(i)}
          isActive={currentPage === i}
        >
          {i + 1}
        </PageButton>
      );
    }
    return pageNumbers;
  };

  return (
    <Wrapper>
      <PaginationContainer>
        <PageButton
          onClick={() =>
            onPageChange(currentPage - 1 >= 0 ? currentPage - 1 : 0)
          }
        >
          <ArrowIcon src={LeftArrowIcon} alt="Previous" />
        </PageButton>
        {renderPageNumbers()}
        <PageButton
          onClick={() =>
            onPageChange(
              currentPage + 1 <= totalPages ? currentPage + 1 : totalPages
            )
          }
        >
          <ArrowIcon src={LeftArrowIcon} alt="Next" flipped />
        </PageButton>
      </PaginationContainer>
    </Wrapper>
  );
};

export default PaginationArea;

const Wrapper = styled.div`
  width: 100%;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 64px 120px 26px 0;
`;

const PageButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  font-size: 16px;
  font-weight: 500;
  line-height: 19.36px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 5px;
  background-color: ${(props) => (props.isActive ? "#EB4646" : "#f4f4f4")};
  color: ${(props) => (props.isActive ? "white" : "#858585")};
  cursor: pointer;

  &:hover {
    background-color: #eb4646;
    color: white;
  }
`;

const ArrowIcon = styled.img`
  width: 7px;
  height: 15px;
  transform: ${(props) => (props.flipped ? "scaleX(-1)" : "none")};

  &:hover {
    background-color: #eb4646;
    color: white;
  }
`;
