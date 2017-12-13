const activeItem = state => state.activeItem
const products = state => state.products
const activeProduct = (state, getter) => state.products.find(product => product.id === getter.activeItem)
const nextProduct = (state, getter) => state.products.find(product => (product.id) === (getter.activeItem + 1))
const isDetailed = state => state.isDetailed

export {
  activeItem,
  products,
  activeProduct,
  nextProduct,
  isDetailed
}
