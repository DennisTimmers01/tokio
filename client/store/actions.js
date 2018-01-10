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

const clickNextItem = ctx => ctx.commit('selectNextItem')
const clickPreviousItem = ctx => ctx.commit('selectPreviousItem')

const toggleDetailed = ctx => ctx.commit('toggleDetailed')

export {
  swipeHandler,
  toggleDetailed,
  clickNextItem,
  clickPreviousItem
}
