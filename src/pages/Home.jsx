import { products } from "../data/products";
import ProductList from "../components/ProductList";

function Home({ keyword, category, onAddToCart }) {
  const filteredProducts = products
    .filter((p) => category === "All" || p.category === category)
    .filter((p) => p.title.toLowerCase().includes(keyword.toLowerCase()));

  return (
    <main>
      <ProductList products={filteredProducts} onAddToCart={onAddToCart} />
    </main>
  );
}

export default Home;