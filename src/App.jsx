
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DiamondCard from "./DiamondCard";
import Header from "./Header";
import ShopByCategory from "./Shopbycategory";
import BraceletDetail from "./BraceletDetail"; // import your Bracelet detail component
import Bracelet from "./Bracelet"
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import Earring from "./Earring";
import Rings from "./Rings";
import Necklace from"./Necklace"
import JewelryShowcase from "./Shopbycategory";
import CustomdesignPage from "./CustomdesignPage";
import Footer from "./Footer";
import Profile from "./Profile";
import ExploreMore from "./ExploreMore";
function Home() {
  return (
    <>
      <Header />
      <DiamondCard />
      <JewelryShowcase></JewelryShowcase>

    </>
  );
}

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Base background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/Forest Website.pdf-image-000.jpg')" }}
      ></div>

      {/* Cream overlay */}
      <div className="absolute inset-0 bg-[#edeae2] bg-opacity-90 mix-blend-lighten"></div>

      {/* Main content */}
      <div className="relative z-10">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bracelet" element={<Bracelet/>} />
            <Route path="/bracelet/:id" element={<BraceletDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/earrings" element={<Earring />} />
            <Route path="/rings" element={<Rings/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/necklaces" element={<Necklace />} />
            <Route path="/custom-design" element={<CustomdesignPage />} />
            <Route path="/explore-more" element={<ExploreMore/>} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
