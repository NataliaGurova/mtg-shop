
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';

import SinglesPage from './pages/SinglesPage/SinglesPage';
import CartPage from './pages/CartPage/CartPage';
import SetsPage from './pages/SetsPage/SetsPage';
import TokensPage from './pages/TokensPage/TokensPage';
import SealedPage from './pages/SealedPage/SealedPage';


const App = () => {

  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage/>} />
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
      </Layout>
    </div>
  );
};


export default App;

