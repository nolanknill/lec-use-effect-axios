import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import ProductPage from "./pages/ProductPage";
import ProductsPage from "./pages/ProductsPage";
import NotFoundPage from "./pages/NotFoundPage";
import Header from "./components/Header";

function App() {
  const username = "Last Minute Shopper";

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage username={username}/>} />
        <Route path="contact" element={<ContactPage username={username}/>} />
        <Route path="products" element={<ProductsPage />} /> 
        <Route path="products/:productId" element={<ProductPage />} /> 
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
