import { Routes, Route } from "react-router-dom";
import Home from "./component/pages/home/Home";
import Navbar from "./component/pages/navbar/Navbar";
import Gaming from "./component/pages/gaming/Gaming";
import Media from "./component/pages/media/Media";
import ProductDetail from "./component/pages/productDetail/ProductDetail";
import Footer from "./component/pages/footer/Footer";
import Toys from "./component/pages/toys/Toys";
import Beauty from "./component/pages/beauty/Beauty";
import PetSupplies from "./component/pages/petSupplies/PetSupplies";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "grid",
        gridTemplateRows: "1fr auto",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/baby" element={<Gaming />} />
          <Route path="/pet-supplies" element={<PetSupplies />} />
          <Route path="/health" element={<Media />} />
          <Route path="/toys" element={<Toys />} />
          <Route path="/beauty" element={<Beauty />} />
          <Route path="/detail/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
