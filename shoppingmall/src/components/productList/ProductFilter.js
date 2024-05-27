import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { theme } from "../../style/theme";
import styled from "styled-components";

// svg
import pencil from "../../assets/pencil.svg";
import categorydropdown from "../../assets/categorydropdown.svg";
import Modal from "../commom/Modal/Modal";

const ProductFilter = () => {
  const navigate = useNavigate();
  const [btnActive, setBtnActive] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isDropdownToggled, setDropdownToggled] = useState(false);
  const selectList = [
    { id: 1, value: "all", name: "전체" },
    { id: 2, value: "cloth", name: "의류" },
    { id: 3, value: "home", name: "가전" },
    { id: 4, value: "digital", name: "디지털" },
  ];

  const closeModal = () => {
    setIsVisible(false);
  };

  const checkLogin = () => {
    if (isLogin === true) {
      navigate("/write");
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  const navigateToPage = () => {
    navigate("/login");
  }

  const handleClickButton = (idx) => {
    setBtnActive(idx);
  };

  return (
    <ProductListFilterWrapper>
      <ButtonWrapper>
        <ButtonDivs>
          <Menu onClick={() => handleClickButton(0)} isActive={btnActive === 0}>
            추천순
          </Menu>
          <Menu onClick={() => handleClickButton(1)} isActive={btnActive === 1}>
            가격 낮은순
          </Menu>
          <Menu
            onClick={() => handleClickButton(2)}
            isActive={btnActive === 2}
            isH
          >
            가격 높은순
          </Menu>
          <CategoryButton
            onCLick={() => {
              setDropdownToggled(true);
            }}
          >
            카테고리
            <CategoryIcon src={categorydropdown} />
          </CategoryButton>
          <Options active={isDropdownToggled}>
            {selectList.map((option, index) => {
              return <button>{option.name}</button>;
            })}
          </Options>
          <WriteButtonWrapper>
            <ItemAddButton onClick={checkLogin}>상품 등록</ItemAddButton>
            <Icon src={pencil} />
          </WriteButtonWrapper>
        </ButtonDivs>
      </ButtonWrapper>
      {isVisible && (
        <Modal
              open={isVisible} 
              onClose={closeModal} 
              title="로그인이 필요한 기능입니다." 
              subText="로그인 페이지로 이동하시겠습니까?" 
              navigateToPage={navigateToPage}/>
      )}
    </ProductListFilterWrapper>
  );
};

export default ProductFilter;

const ProductListFilterWrapper = styled.div`
  display: flex;
  margin-top: 42px;
`;

const ButtonWrapper = styled.div`
    display: flex;
    width: 1000px
    height: 50px;
    margin-left: 20px;
    justify-content: flex-start;
`;

const ButtonDivs = styled.div`
  display: flex;
  padding: 0 0;
  width: 1100px;
`;

const Menu = styled.button`
  width: 92px;
  height: 30px;
  margin-right: 11px;
  padding: 6px 12px 7px 12px;
  border: 1px solid ${theme.border};
  border-radius: 15px;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  background-color: ${(props) => (props.isActive ? "#EB4646" : "#FFFFFF")};
  color: ${(props) => (props.isActive ? "#FFFFFF" : "#000000")};
  &:hover {
    background-color: ${(props) => (props.isActive ? "#EB4646" : "#F4F4F4")};
    color: ${(props) => (props.isActive ? "#FFFFFF" : "#000000")};
  }
`;

const CategoryButton = styled.button`
  width: 92px;
  height: 30px;
  border: 1px solid ${theme.border};
  border-radius: 15px;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  background-color: ${theme.white};
`;

const CategoryIcon = styled.img`
  margin: 0px 0px 1px 4px;
`;

const Options = styled.div`
  display: ${(props) => (props.active ? "visible" : "none")};
`;

const WriteButtonWrapper = styled.div`
  display: flex;
  width: 100px;
  height: 40px;
  margin: 9px 0px 0px 386px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ItemAddButton = styled.button`
  display: flex;
  justify-content: flex-start;
  height: 17.5px;
  margin: 0px 4px 2px 14px;
  padding: 0 0;
  border: none;
  font-size: 14px;
  font-weight: bold;
  line-height: 16.94px;
  background-color: ${theme.white};
  cursor: pointer;
`;

const Icon = styled.img`
  width: 17px;
  height: 17.5px;
  maring-top: 2px;
  color: #858585;
  cursor: pointer;
`;
