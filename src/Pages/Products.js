import { useState } from "react";
import ProductCard from "../Components/ProductCard";
import "./Products.css"

function Products() {
  const [cart, setCart] = useState([]);

const items = [
  { 
    id: 1, 
    name: "Running Shoes", 
    price: 1500, 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPpnK5P-ee0Se4fiCwOX28PsuhfHC0geEbwQ&s" 
  },
  { 
    id: 2, 
    name: "Smart Watch", 
    price: 2000, 
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=300&q=80" 
  },
  { 
    id: 3, 
    name: "T-shirt", 
    price: 800, 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjfx3ZeqR3FdSjS53-H_TeqiuKNMHZ6jw1Lw&s" 
  },
  { 
    id: 4, 
    name: "Backpack", 
    price: 1200, 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRkr7f2-0zPng1QcwZ0S1ATohPscbv6goDoLYFDzb9jw&s&ec=73068120" 
  },
  { 
    id: 5, 
    name: "Headphones", 
    price: 2500, 
    image: "https://m.media-amazon.com/images/I/71rbNPgK-RL._SL1500_.jpg" 
  },
  { 
    id: 6, 
    name: "Laptop", 
    price: 55000, 
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=300&q=80" 
  },
  { 
    id: 7, 
    name: "Sunglasses", 
    price: 900, 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI_kZJ7GHvM0PWI-hhAcAy3K6Z29TQlVAhz1NnrUi-0-997jP33ye6u8OKQg-bO5DQphA&usqp=CAU" 
  },
  { 
    id: 8, 
    name: "Sports Bottle", 
    price: 400, 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQslnwyNAT-faH0mYWh_NRkYbQbey9p_dGFzw&s" 
  },
  { 
    id: 9, 
    name: "Casual Jacket", 
    price: 2200, 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnS-EE2GKYj81GPG-qrxwPxo4hxl3e5Vq0Pw&s" 
  },
  { 
    id: 10, 
    name: "Bluetooth Speaker", 
    price: 1800, 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ2vRGOVhGzpcI2dwX8VpinwxCAJ2TFNz7PTNaEiLfWA&s&ec=73068120" 
  }
];


  const addToCart = (item) => {
    setCart([...cart, item]);
    alert(item.name + " added to cart");
  };

  return (
    <div className="products-container">
      {items.map((p) => (
        <ProductCard key={p.id} data={p} onAdd={addToCart} />
      ))}
    </div>
  );
}

export default Products;
