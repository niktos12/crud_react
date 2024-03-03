import { ProductsPage } from "./pages/ProductsPage";
import { Route, Routes } from "react-router-dom";
import { InfoPage } from "./pages/InfoPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/crud_react" element={<ProductsPage />} />
        <Route path="/product/:id" element={<InfoPage />} />
      </Routes>
    </>
  );
}

export default App;
