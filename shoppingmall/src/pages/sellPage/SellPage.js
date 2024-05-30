import React, { useState } from "react";
import PaginationArea from "../../components/sellpage/PaginationArea";
import FilterArea from "../../components/sellpage/FilterArea";
import HeaderArea from "../../components/sellpage/HeaderArea";
import ProductArea from "../../components/sellpage/ProductArea";
import PageLayout from "../../components/commom/PageLayout";
import { Navigate } from "react-router-dom";
import Modal from "../../components/commom/Modal/Modal";

const SellPage = () => {
  //모달
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const navigateToPage = () => {
    return <Navigate to="/sell" />;
  };
  const token = localStorage.getItem("login-token");

  if (!token) {
    console.log("토큰이 유효하지 않습니다. 로그인 페이지로 이동");
    return <Navigate to="/login" />;
  }

  return (
    <PageLayout>
      {isModalOpen == true && (
        <Modal
          onClose={closeModal}
          title="title"
          subText="subTextsubText"
          navigateToPage={navigateToPage}
        />
      )}
      <HeaderArea text="판매 내역" />
      <FilterArea />
      <ProductArea />
      <PaginationArea />
    </PageLayout>
  );
};

export default SellPage;
