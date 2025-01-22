import { Suspense } from 'react';
// import Footer from '../Footer/Footer';
import AppBar from '../AppBar/AppBar';
import Loader from '../Loader/Loader';


export const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<Loader />}>{children}</Suspense>
      {/* <Footer/> */}
    </div>
  );
};