const swipeHandler = (ctx, direction) => {
  switch (direction) {
    case 'left':
      ctx.commit('selectNextItem')
      break
    case 'right':
      ctx.commit('selectPreviousItem')
      break
  }
}

const toggleDetailed = ctx => ctx.commit('toggleDetailed')

export {
  swipeHandler,
  toggleDetailed
}
