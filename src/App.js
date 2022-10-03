import "./App.css";
import CartPage from "./Pages/CartPage";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import ProductInfo from "./Pages/ProductInfo";
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
          <Route path="/" exact element={<HomePage />} />
          <Route path="/Cart" exact element={<CartPage />} />
          <Route path="/Login" exact element={<LoginPage />} />
          <Route path="/RegisterPage" exact element={<RegisterPage />} />
          <Route path="/ProductInfo/:productid" exact element={<ProductInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
