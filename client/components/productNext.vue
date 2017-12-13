<template>
  <img :src="nextProduct.img" alt="next item" class="product__image product__image--next">
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'activeProduct',
      'nextProduct',
      'isDetailed'
    ])
  }
}
</script>

<style>
</style>

