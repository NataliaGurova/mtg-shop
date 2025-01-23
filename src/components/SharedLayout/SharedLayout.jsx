
import { Suspense } from "react";
import Loader from "../Loader/Loader";

const SharedLayout = ({ children }) => {
  return (
    <div>
      {/* <AppBar /> */}
      <Suspense fallback={<Loader />}>{children}</Suspense>
      {/* <Footer/> */}
    </div>
  );
};

export default SharedLayout;
