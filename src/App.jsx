
import { Route, Routes } from "react-router-dom";
// import NotFound from "./page/NotFound/NotFound";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import HomePage from "./pages/HomePage/HomePage";



const App = () => {
  return (
      <SharedLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="*" element={<HomePage />} />
        </Routes>
      </SharedLayout>
  );
};

export default App;
