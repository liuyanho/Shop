import { Link } from "react-router-dom";

function ProductCard({ product, onAddToCart }) {
  return (
    <article className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.images[0]} alt={product.title} />
      </Link>

      <div className="product-card-info">
        <Link to={`/product/${product.id}`}>
          <h3>{product.title}</h3>
        </Link>

        <p>NT$ {product.price}</p>

        <button onClick={() => onAddToCart(product)}>
          Add to Cart
        </button>
      </div>
    </article>
  );
}

export default ProductCard;