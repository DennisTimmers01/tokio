<template>
    <div
      :class="['product', isDetailed ? 'product--detailed' : '']"
      v-touch:swipe="swipeHandler"
    >
      <img src='../static/images/bag.png' alt="Product image" class="product__image">
      <h2 class="product__brand">{{activeProduct.brand}}</h2>
      <h1 class="product__title">{{activeProduct.title}}</h1>
      <nuxt-link 
        v-if="!isDetailed"
        @click.native="toggleDetailed" 
        :to="`/${activeProduct.id}`">Details
      </nuxt-link>
      <nuxt-link 
        v-else
        @click.native="toggleDetailed"
        :to="'/'">Back
      </nuxt-link>
      <nuxt-child :key="`/${activeProduct.id}`"></nuxt-child>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'activeProduct',
      'isDetailed'
    ])
  },
  methods: {
    ...mapActions([
      'swipeHandler',
      'toggleDetailed'
    ])
  }
}
</script>

<style lang='scss'>
  .product {
    padding: 5em 1em 0 1em;
    transition: all .7s ease-in-out;

    &__image {
      display: block;
      max-width: 80%;
      margin: 0 auto;
    }

    &__brand {
      padding: 2em 0 0;
    }
  }

  .product--detailed {
    padding: 2em 1em 0 1em;
  }
</style>