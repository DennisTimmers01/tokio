<template>
  <div class="product__detail">
    <p class="product__price">&euro; {{activeProduct.price}}</p>
    <p class="product__description">{{activeProduct.description}}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'activeProduct'
    ])
  }
}
</script>

<style>
</style>
