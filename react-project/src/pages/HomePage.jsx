import React from "react";
import { Loading } from "../components/Loading";
import ProductList from "../components/ProductList";
import PageContainer from "../container/PageContainer";

const HomePage = () => {
  return (
    <PageContainer>
      <ProductList />
      <Loading />
    </PageContainer>
  );
};

export default HomePage;
