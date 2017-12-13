const swipeHandler = (ctx, direction) => {
  switch (direction) {
    case 'right':
      ctx.commit('selectNextItem')
      break
    case 'left':
      ctx.commit('selectPreviousItem')
      break
  }
}

export {
  swipeHandler
}
