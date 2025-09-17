import { useCart } from "../../context/cart_context";
import { useWishlist } from "../../context/wishlist_context";
import { findProductInWishlist } from "../../utils/findProductInWishlist";
import { useNavigate } from "react-router-dom";

export const HorizontalProductCard = ({ product }) => {
  const { cartDispatch } = useCart();
  const { wishlist, wishlistDispatch } = useWishlist();
  const navigate = useNavigate();

  const isProductInWishlist = findProductInWishlist(wishlist, product.id);

    const onWishlistClick = (product) => {
    if (!isProductInWishlist) {
        wishlistDispatch({
        type: "ADD_TO_WISHLIST",
        payload: { product },
        });

        cartDispatch({
        type: "REMOVE_FROM_CART",
        payload: { id: product.id },
        });
        
    } else {
        navigate("/wishlist");
    }
    };

  const onRemoveClick = (product) => {
    cartDispatch({
      type: "REMOVE_FROM_CART",
      payload: { id: product.id },
    });
  };

  return (
    <div className="card-horizontal d-flex shadow">
      <div className="card-hori-image-container relative">
        <img
          className="card-image"
          src={product.images[0]}
          alt={product.title}
        />
      </div>
      <div className="card-details d-flex direction-column">
        <div className="card-des">{product.title}</div>
        <div className="card-description">
          <p className="card-price">Rs. {product.price}</p>
        </div>
        <div className="quantity-container d-flex gap">
          <p className="q-title">Quantity: </p>
          <div className="count-container d-flex align-center gap">
            <button className="count">-</button>
            <span className="count-value">1</span>
            <button className="count">+</button>
          </div>
        </div>
        <div className="cta-btn d-flex gap">
          <div className="cta-btn">
            <button
              onClick={() => {
                onRemoveClick(product);
              }}
              className="button hori-btn btn-primary btn-icon d-flex align-center justify-center cursor btn-margin"
            >
              <span className="material-symbols-outlined">
                remove_shopping_cart
              </span>
              <span className="text-[15px]">Remove from Cart</span>
            </button>
          </div>
          <div className="cta-btn">
            <button
              onClick={() => onWishlistClick(product)}
              className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin"
            >
              {isProductInWishlist ? "Go To ❤️" : "Move to ❤️"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
