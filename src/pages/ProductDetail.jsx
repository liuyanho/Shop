import { Link, useParams } from "react-router-dom";
import { products } from "../data/products";
import ImageSlider from "../components/ImageSlider";

function ProductDetail({ onAddToCart }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <main className="product-detail">
        <p>找不到商品</p>
        <Link to="/">回商品列表</Link>
      </main>
    );
  }

  return (
    <main className="product-detail">
      <Link to="/" className="back-link">← Back to shop</Link>

      <section className="detail-layout">
        <ImageSlider images={product.images} title={product.title} />

        <div className="detail-info">
          <p className="category-label">{product.category}</p>
          <h1>{product.title}</h1>
          <p className="detail-price">NT$ {product.price}</p>
          <p className="description">{product.description}</p>

          <button onClick={() => onAddToCart(product)}>
            Add to Cart
          </button>
        </div>
      </section>
    </main>
  );
}

export default ProductDetail;