
import { Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage/HomePage";
import NotFound from "./page/NotFound/NotFound";
import SharedLayout from "./components/SharedLayout/SharedLayout";



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
