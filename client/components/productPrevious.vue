<template>
  <img :src="nextProduct.img" alt="prev item" class="product__image product__image--previous">
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'nextProduct',
      'isDetailed'
    ])
  }
}
</script>

<style>
</style>
