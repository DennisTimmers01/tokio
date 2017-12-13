const activeItem = state => state.activeItem
const products = state => state.products
const activeProduct = (state, getter) => state.products.find(product => product.id === getter.activeItem)
const isDetailed = state => state.isDetailed

export {
  activeItem,
  products,
  activeProduct,
  isDetailed
}
