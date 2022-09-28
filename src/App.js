import "./App.css";
import CartPage from "./Pages/CartPage";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import ProductsInfo from "./Pages/ProductsInfo";
import RegisterPage from "./Pages/RegisterPage";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import './stylesheets/layout.css'
import './stylesheets/products.css'
import './stylesheets/authentication.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Home" exact element={<HomePage />} />
          <Route path="/Cart" exact element={<CartPage />} />
          <Route path="/Login" exact element={<LoginPage />} />
          <Route path="/Register" exact element={<RegisterPage />} />
          <Route path="/ProductsInfo" exact element={<ProductsInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
