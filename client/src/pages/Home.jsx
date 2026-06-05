import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import "../styles/Home.css";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          product =>
            product.category === selectedCategory
        );

  return (
    <>
      <Navbar />

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
                  Shop Now
                </button>

                <button className="offer-btn">
                  See Offers
                </button>
              </div>

              <div className="stats">
                <div>
                  <h2>200+</h2>
                  <p>Products</p>
                </div>

                <div>
                  <h2>10 min</h2>
                  <p>Delivery</p>
                </div>

                <div>
                  <h2>4.9 ⭐</h2>
                  <p>Rating</p>
                </div>
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
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                weight={product.weight}
              />
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default Home;