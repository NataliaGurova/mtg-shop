
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import SharedLayout from "./components/SharedLayout/SharedLayout";

import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const SinglesPage = lazy(() => import("./pages/SinglesPage/SinglesPage"));
const SetsPage = lazy(() => import("./pages/SetsPage/SetsPage"));
const TokensPage = lazy(() => import("./pages/TokensPage/TokensPage"));
const SealedPage = lazy(() => import("./pages/SealedPage/SealedPage"));
const CartPage = lazy(() => import("./pages/CartPage/CartPage"));




const App = () => {
  return (
      <SharedLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/singles" element={<SinglesPage />} />

          <Route path='/sets' element={<SetsPage />} />
          <Route path="/tokens" element={<TokensPage />} />
          <Route path="/sealed" element={<SealedPage />} />

          <Route path="/login" element={<LoginPage />} /> 
          <Route path="/register" element={<RegisterPage />} />
          {/* <Route path="/wishlist" element={<WishlistPage />} /> */}
          <Route path="/cart" element={<CartPage />} />

          <Route path="*" element={<HomePage />} />
        </Routes>
      </SharedLayout>
  );
};

export default App;
