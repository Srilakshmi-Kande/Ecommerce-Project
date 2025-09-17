export const findProductInWishlist = (wishlist = [], productId) => {
  return wishlist.find((item) => item.id === productId) !== undefined;
}