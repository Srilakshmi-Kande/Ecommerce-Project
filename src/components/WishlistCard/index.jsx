import { useWishlist } from "../../context/wishlist_context";
import { useCart } from "../../context/cart_context";
import { useNavigate } from "react-router-dom";
import { findProductInCart } from "../../utils/findProductInCart";
import { findProductInWishlist } from "../../utils/findProductInWishlist";

export const WishlistCard = ({product}) => {

    const { cart, cartDispatch } = useCart();

    const { wishlist, wishlistDispatch } = useWishlist()

    const navigate = useNavigate();

    const isProductInCart = findProductInCart(cart, product.id)
    const isProductInWishlist = findProductInWishlist(wishlist, product.id)

    // console.log("isProductInCart:", isProductInCart);
    // console.log("cart:", cart);


    const onCartClick = (product) => {
        if (!isProductInCart) {
        cartDispatch({
            type: "ADD_TO_CART",
            payload: { product },
        });
        } else {
        navigate("/cart");
        }
    };

    const onRemoveClick = (product) => {
        wishlistDispatch({
            type: 'REMOVE_FROM_WISHLIST',
            payload: {id : product.id}
        })
    }

    return (
        <>
            <div class="card card-vertical d-flex direction-column relative">
                <div class="card-image-container relative">
                    <img class="card-image" src={product.images[0]} alt={product.title} />
                    <button class="badge-close cursor absolute" onClick={() => onRemoveClick(product)}>
                            <span className="material-symbols-outlined text-red-600 bg-white rounded-full"
                                style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24", fontSize: '2rem', padding:'0.2rem' }}>
                                    {isProductInWishlist ? "heart_minus" : "favorite"}
                            </span>
                    </button>
                </div>
                <div class="card-details">
                    <div class="card-des">{product.title}</div>
                        <div class="card-description">
                                <p class="card-price">
                                Rs. {product.price}
                                </p>
                        </div>
                    <div class="cta-btn">
                        <button onClick={() => onCartClick(product)} class="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">
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