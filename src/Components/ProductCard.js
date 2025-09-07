import "./ProductCard.css";
function ProductCard({ data, onAdd }) {
  return (
    <div style={{ border: "1px solid #aaa", padding: "15px", margin: "10px" }}>
      <img src={data.image} alt={data.name} width="150" height="150" />
      <h3>{data.name}</h3>
      <p>Price: ₹{data.price}</p>
      <button onClick={() => onAdd(data)}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
