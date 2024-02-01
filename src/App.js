import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage/HomePage";
import Header from "./components/Header/Header";
import Phones from "./pages/Phones/Phones";
import SearchResults from "./pages/SearchResults/SearchResults";
import Corzina from "./pages/Corzina/Corzina";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Laptops from "./pages/Laptops/Laptops";
import Fragrances from "./pages/Fragrances/Fragrances";
import Skincare from "./pages/Skincare/Skincare";
import Groceries from "./pages/Gorceries/Groceries";
import HomeDecoration from "./pages/HomeDecoration/HomeDecoration";
import Furniture from "./pages/Furniture/Furniture";
import Tops from "./pages/Tops/Tops";
import Womensdresses from "./pages/WomensDresses/Womensdresses";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import Loading from "./components/loading/Loading";

function App() {
  const [isloadind, setisloading] = useState(true);
  useEffect(() => {
    const FakeDataFetch = () => {
      setTimeout(() => {
        setisloading(false);
      }, 2000);
    };
    FakeDataFetch();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        {isloadind ? (
          <Loading />
        ) : (
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        )}
        <Routes>
          <Route path="/search-results" element={<SearchResults />} />
          <Route path="/corzina" element={<Corzina />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/phones" element={<Phones />} />
          <Route path="/laptops" element={<Laptops />} />
          <Route path="/fragrances" element={<Fragrances />} />
          <Route path="/skincare" element={<Skincare />} />
          <Route path="/groceries" element={<Groceries />} />
          <Route path="/HomeDecoration" element={<HomeDecoration />} />
          <Route path="/furniture" element={<Furniture />} />
          <Route path="/tops" element={<Tops />} />
          <Route path="/womens-dresses" element={<Womensdresses />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
