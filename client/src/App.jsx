import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import CreateProduct from "./pages/CreateProduct";
import UpdateProduct from "./pages/UpdateProduct";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/create-product"} element={<CreateProduct />} />
        <Route path={"/update-product"} element={<UpdateProduct />} />
      </Routes>
    </BrowserRouter>
  );
}
