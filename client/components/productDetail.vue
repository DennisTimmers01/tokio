<template>
  <div class="product__detail ani">
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
  .ani {
    transform: all .5s ease-in-out;
  }
</style>
