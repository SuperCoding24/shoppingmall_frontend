import React from "react";
import styled from "styled-components";
import LeftArrowIcon from "../../assets/LeftArrow.svg";

const Pagination = ({ pages, currentPage, onPageChange }) => {
  return (
    <PaginationContainer>
      <PageButton
        onClick={() => onPageChange(currentPage > 1 ? currentPage - 1 : 1)}
      >
        <ArrowIcon src={LeftArrowIcon} alt="Previous" />
      </PageButton>
      {pages.map((page, index) => (
        <PageButton
          key={index}
          onClick={() => onPageChange(page)}
          isActive={currentPage === page}
        >
          {page}
        </PageButton>
      ))}
      <PageButton
        onClick={() =>
          onPageChange(
            currentPage < pages.length ? currentPage + 1 : pages.length
          )
        }
      >
        <ArrowIcon src={LeftArrowIcon} alt="Next" flipped />
      </PageButton>
    </PaginationContainer>
  );
};

export default Pagination;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 26px;
`;

const PageButton = styled.button`
  color: ${(props) => (props.isActive ? "white" : "#858585")};
  background-color: ${(props) => (props.isActive ? "#EB4646" : "#f4f4f4")};
  width: 35px;
  height: 35px;
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

const ArrowIcon = styled.img`
  width: 10px;
  height: 18px;
  transform: ${(props) => (props.flipped ? "scaleX(-1)" : "none")};
  &:hover {
    background-color: #eb4646;
    color: white;
  }
`;
