// export const findProductInCart = (cart,id) => {
//     cart?.length > 0 && cart.some(product => product.id === id)
// }

export const findProductInCart = (cart = [], productId) => {
  return cart.find((item) => item.id === productId) !== undefined;
}
