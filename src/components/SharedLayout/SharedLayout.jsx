
import { Suspense } from "react";
import Loader from "../Loader/Loader";
import AppBar from "../AppBar/AppBar";

const SharedLayout = ({ children }) => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<Loader />}>{children}</Suspense>
      {/* <Footer/> */}
    </div>
  );
};

export default SharedLayout;
