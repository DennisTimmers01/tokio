const isDetailed = state => state.isDetailed
const products = state => state.products
const activeItem = state => state.activeItem
const activeProduct = state => state.products.find(product => product.id === state.activeItem)

const nextProduct = state => {
  if (state.activeItem === state.products.length - 1) {
    return state.products.find(product => product.id === 0)
  } else {
    return state.products.find(product => product.id === (state.activeItem + 1))
  }
}

const previousProduct = state => {
  if (state.activeItem === 0) {
    return state.products.find(product => product.id === (state.products.length - 1))
  } else {
    return state.products.find(product => product.id === (state.activeItem - 1))
  }
}

export {
  activeItem,
  products,
  activeProduct,
  nextProduct,
  previousProduct,
  isDetailed
}
