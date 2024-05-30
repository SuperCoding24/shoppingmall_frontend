import React from "react";
import ProductComponent from "../../components/productwritepage/ProductComponent";
import ContentLayout from "../../components/commom/ContentLayout";

const ProductRegistrationPage = () => {
  return (
    <ContentLayout title={"상품 수정"} width="1060px">
      <ProductComponent event="1" />
    </ContentLayout>
  );
};

export default ProductRegistrationPage;
