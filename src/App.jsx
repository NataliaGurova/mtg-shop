
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import SinglesPage from "./pages/SinglesPage/SinglesPage";
import SetsPage from "./pages/SetsPage/SetsPage";
import TokensPage from "./pages/TokensPage/TokensPage";
import SealedPage from "./pages/SealedPage/SealedPage";
import CartPage from "./pages/CartPage/CartPage";



const App = () => {
  return (
      <SharedLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/singles" element={<SinglesPage />} />

          <Route path='/sets' element={<SetsPage />} />
          <Route path="/tokens" element={<TokensPage />} />
          <Route path="/sealed" element={<SealedPage />} />

          {/* <Route path="/login" element={<LoginPage />} /> 
          <Route path="/register" element={<RegisterPage />} /> */}
          {/* <Route path="/wishlist" element={<WishlistPage />} /> */}
          <Route path="/cart" element={<CartPage />} />

          <Route path="*" element={<HomePage />} />
        </Routes>
      </SharedLayout>
  );
};

export default App;
