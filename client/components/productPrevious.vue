<template>
  <img :src="previousProduct.img" alt="prev item" class="product__image product__image--previous">
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'activeProduct',
      'previousProduct',
      'isDetailed'
    ])
  }
}
</script>

<style>
</style>
