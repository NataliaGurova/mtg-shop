
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
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
