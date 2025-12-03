import { useCart } from '../contexts/CartContext';
import { useProduct } from '../contexts/ProductContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useProduct();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
   
  };

  const handleToggleWishlist = (e) => {
    e.preventDefault();
    toggleWishlist(product.id);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
        <button 
          className={`wishlist-btn ${isWishlisted(product.id) ? 'active' : ''}`} 
          onClick={handleToggleWishlist}
          aria-label="Add to wishlist"
        >
          <i className="fas fa-heart"></i>
        </button>
      </div>
      <div className="product-info">
        <div className="product-category">{product.type}</div>
        <h3 className="product-title">{product.title}</h3>
        <div className="product-pricing">
          <span className="rental-price">₹ {product.price.toLocaleString()}.00</span>
        </div>
        <button className="rent-btn" onClick={handleAddToCart}>
          RENT NOW
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

