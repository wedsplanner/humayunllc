import { Routes, Route } from "react-router-dom";
import Home from "./component/pages/home/Home";
import Navbar from "./component/pages/navbar/Navbar";
import Gaming from "./component/pages/gaming/Gaming";
import Media from "./component/pages/media/Media";
import ProductDetail from "./component/pages/productDetail/ProductDetail";
import Footer from "./component/pages/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/gaming" element={<Gaming />} />
          <Route path="/media" element={<Media />} />
          <Route path="/detail/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
