import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import BottomNav from "../components/BottomNav";
import "../styles/Home.css";


const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm,setSearchTerm] = useState("");

  const filteredProducts =
    products.filter((product)=>{
      const categoryMatch =
      selectedCategory === "All" ||
      product.category ===selectedCategory;

      const searchMatch =
      product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

  return categoryMatch && searchMatch;
    });

  return (
    <>
      <Navbar searchTerm={searchTerm} 
      setSearchTerm = {setSearchTerm}
      />

      <div className="home-content">

        <div className="sidebar-wrapper">
          <Sidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>

        <div className="main-content">

          <div className="hero-section">
            <div className="hero-content">
              <span className="delivery-tag">
                ⚡ 10-MIN DELIVERY
              </span>

              <h1>
                Farm Fresh,
                <br />
                Right Now.
              </h1>

             <div className="hero-buttons">
  <button className="shop-btn">
    🛒 Shop Now
  </button>

  <button className="offer-btn">
    🎁 See Offers
  </button>
</div>
            </div>

            <div className="hero-image">
              <img
                src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=700"
                alt="fresh vegetables"
              />
            </div>
          </div>

          <div className="products-grid">
            {filteredProducts.length>0?(
            filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                weight={product.weight}
              />
            ))
          ):(
            <h2>No products found</h2>
          )
        }
          </div>

        </div>
      </div>
      <BottomNav/>
    </>
    
  );
  
};

export default Home;