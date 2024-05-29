import { ThemeProvider } from "styled-components";
import { theme } from "./style/theme";
import { GlobalStyle } from "./style/GlobalStyle";
import { Route, Routes } from "react-router-dom";
//components
import AppLayout from "./components/commom/AppLayout";
// pages
import Login from "../src/components/userAccount/Login";
import Signup from "./components/userAccount/Signup";
import Cart from "./pages/cart/Cart";
import MyPage from "./pages/myPage/MyPage";
import Sell from "./pages/sellPage/SellPage";
import Write from "./pages/ProductWritePage/ProductWritePage";
import OrderDetailsPage from "./pages/orderDetails/OrderDetailsPage";
import ItemListPage from "./pages/productPage/ItemListPage";
import ItemDetailPage from "./pages/productPage/ItemDetailPage";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppLayout>
        <Routes>
          <Route path="/settings" element={<MyPage />} />
          <Route path="/" element={<ItemListPage/>} />
          <Route path="/write" element={<Write />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/product/:id" element={<ItemDetailPage/>} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/order-details" element={<OrderDetailsPage />} />
        </Routes>
      </AppLayout>
    </ThemeProvider>
  );
}

export default App;
