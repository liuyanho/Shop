function CartDrawer({ isOpen, cart, onClose, onRemove, onQtyChange }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <aside className={isOpen ? "cart-drawer open" : "cart-drawer"}>
      <div className="cart-header">
        <h2>Shopping Cart</h2>
        <button onClick={onClose}>×</button>
      </div>

      {cart.length === 0 ? (
        <p className="empty">Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.images[0]} alt={item.title} />

              <div>
                <h4>{item.title}</h4>
                <p>NT$ {item.price}</p>

                <div className="qty-control">
                  <button onClick={() => onQtyChange(item.id, item.qty - 1)}>
                    -
                  </button>
                  <span>{item.qty}</span>
                  <button onClick={() => onQtyChange(item.id, item.qty + 1)}>
                    +
                  </button>
                </div>

                <button className="remove-btn" onClick={() => onRemove(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="cart-total">
            <strong>Total</strong>
            <strong>NT$ {total}</strong>
        </div>

        <button className="checkout-button" onClick={() => alert("結帳成功！感謝您的購買。")}>
            Checkout
        </button>
        </>
      )}
    </aside>
  );
}

export default CartDrawer;