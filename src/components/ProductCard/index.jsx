import { useCart } from "../../context/cart_context"
import { findProductInCart } from "../../utils/findProductInCart";
import { useNavigate } from "react-router-dom";
import { findProductInWishlist } from "../../utils/findProductInWishlist";
import { useWishlist } from "../../context/wishlist_context";

export const ProductCard = ({ product }) => {

    const { cart, cartDispatch } = useCart();

    const { wishlist, wishlistDispatch } = useWishlist()

    const navigate = useNavigate();

    const isProductInCart = findProductInCart(cart, product.id)
    const isProductInWishlist = findProductInWishlist(wishlist, product.id)

    const onCartClick = (product) => {
        if (!isProductInCart) {
            localStorage.setItem('cart',JSON.stringify([...cart,product]))
            cartDispatch({
                type: "ADD_TO_CART",
                payload: { product },
            });
        } else {
            navigate("/cart");
        }
    };

    const onWishlistClick = (product) => {
        if(!isProductInWishlist){
            wishlistDispatch({
                type: "ADD_TO_WISHLIST",
                payload: { product },
            });
            localStorage.setItem('wishlist',JSON.stringify([...wishlist,product]))
        }
        else{
            navigate("/wishlist")
        }
    }

    return (
    <>
        <div className="card card-vertical d-flex direction-column relative shadow">
            <div className="card-image-container">
                <img className="card-image" src={product.images[0]} alt="shoes" />
            </div>
            <div className="card-details">
                <div className="card-des">{product.title}</div>
                <div className="card-description">
                    <p className="card-price">
                        Rs. {product.price}
                    </p>
                </div>
                <div className="cta-btn">
                    <button onClick={() => onWishlistClick(product)}
                     className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">
                    <span className="material-symbols-outlined"
                        style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24", fontSize: '2rem' }}>
                            {isProductInWishlist ? "heart_minus" : "favorite"}
                    </span>
                        {isProductInWishlist ? "Go To Wishlist" : "Add To Wishlist"}
                    </button>
                    <button
                    onClick={() => onCartClick(product)}
                    className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin"
                    >
                    <span className="material-symbols-outlined">
                        {isProductInCart ? "shopping_cart_checkout" : "shopping_cart"}
                    </span>
                    {isProductInCart ? "Go To Cart" : "Add To Cart"}
                    </button>
                </div>
            </div>
        </div>
    </>
    )
}