<template>
    <div class="product" v-touch:swipe="swipeHandler">
      <img src='../static/images/bag.png' alt="Product image" class="product__image">
      <h2 class="product__brand">{{activeProduct.brand}}</h2>
      <h1 class="product__title">{{activeProduct.title}}</h1>
      <nuxt-link :to="`/${activeProduct.id}`">Details</nuxt-link>
      <nuxt-child :key="$route.params.id"></nuxt-child>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'activeProduct'
    ])
  },
  methods: {
    ...mapActions([
      'swipeHandler'
    ])
  }
}
</script>

<style lang='scss'>
  .product {
    padding: 3em 1em 0 1em;

    &__image {
      display: block;
      max-width: 80%;
      margin: 0 auto;
    }

    &__brand {
      padding: 2em 0 0;
    }
  }
</style>