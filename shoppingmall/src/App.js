import { ThemeProvider } from "styled-components";
import { theme } from "./style/theme";
import { GlobalStyle } from "./style/GlobalStyle";
import { Route, Routes } from "react-router-dom";
//components
import AppLayout from "./components/commom/AppLayout";
// pages
import MyPage from "./pages/myPage/MyPage";
import ProductListPage from "./pages/productPage/ProductListPage";
import ProductWritePage from "./pages/productPage/ProductWritePage";
import Login from "../src/components/userAccount/Login";
import Signup from "./components/userAccount/Signup";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppLayout>
        <Routes>
          <Route path="/settings" element={<MyPage />} />
          <Route path="/" element={<ProductListPage/>}/>
          <Route path="/write"  element={<ProductWritePage/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </AppLayout>
    </ThemeProvider>
  );
}

export default App;
