import { Link } from "react-router-dom";

function Navbar({
  cartCount,
  onCartClick,
  keyword,
  onKeywordChange,
  categories,
  category,
  onCategoryChange,
}) {
  return (
    <header className="navbar">
      <Link to="/" className="logo">STUDIO SHOP</Link>

      <div className="nav-actions">
        <input
          className="nav-search"
          type="text"
          placeholder="Search"
          value={keyword}
          onChange={(e) => onKeywordChange(e.target.value)}
        />

        <select
          className="category-menu"
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <button className="cart-button" onClick={onCartClick}>
          Cart ({cartCount})
        </button>
      </div>
    </header>
  );
}

export default Navbar;