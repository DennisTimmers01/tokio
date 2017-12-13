<template>
  <img src="../static/images/polkadot-Knit-Black.png" alt="next item" class="product__image product__image--next">
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'activeProduct',
      'isDetailed'
    ])
  }
}
</script>

<style>
</style>

