const selectNextItem = (state) => {
  if (state.activeItem >= (state.products.length - 1)) {
    state.activeItem = 0
  } else {
    state.activeItem++
  }
}

const selectPreviousItem = (state) => {
  if (state.activeItem <= 0) {
    state.activeItem = (state.products.length - 1)
  } else {
    state.activeItem--
  }
}

const toggleDetailed = (state) => (state.isDetailed = !state.isDetailed)

const setProducts = (state, payload) => (state.newProducts = payload)

export {
  selectNextItem,
  selectPreviousItem,
  toggleDetailed,
  setProducts
}
