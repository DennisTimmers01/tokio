<template>
    <div
      :class="['product', isDetailed ? 'product--detailed' : '']"
      v-touch:swipe="swipeHandler"
    >
      <product-previous v-show="!isDetailed"/>
      <img src="../static/images/bag.png" alt="Product image" class="product__image product__image--active">
      <product-next v-show="!isDetailed"/>
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
import productPrevious from '~/components/productPrevious'
import productNext from '~/components/productNext'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    productPrevious,
    productNext
  },
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
    overflow: hidden;

    &__image {
      display: inline-block;
      vertical-align: middle;
      max-width: 80%;
      margin: 0 auto;

      &--previous {
        margin-left: -40%;
        max-width: 50%;
        opacity: .5;
      }

      &--next {
        margin-right: -40%;
        max-width: 50%;
        opacity: .5;
      }
    }

    &__brand {
      padding: 2em 0 0;
    }
  }

  .product--detailed {
    padding: 2em 1em 0 1em;

    .product__image {
      display: block;
    }
  }
</style>