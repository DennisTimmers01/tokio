<template>
    <div class="product">
      <div class="product__carousel" v-touch:swipe="swipeHandler">
        <product-previous @click.native="clickPreviousItem" v-show="!isDetailed"/>
        <img :src="activeProduct.img" alt="Product image" class="product__image product__image--active">
        <product-next @click.native="clickNextItem" v-show="!isDetailed"/>
      </div>
      <div class="product__info">
        <h2 class="product__brand">{{activeProduct.brand}}</h2>
        <h1 class="product__title">{{activeProduct.title}}</h1>
        <nuxt-link class="btn" :to="`/product/${activeProduct.id}`">Details</nuxt-link>
        <nuxt-link class="btn" :to="`/order/${activeProduct.id}`">Order</nuxt-link>
      </div>
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
      'isDetailed',
      'newProducts'
    ])
  },
  methods: {
    ...mapActions([
      'swipeHandler',
      'toggleDetailed',
      'clickNextItem',
      'clickPreviousItem'
    ])
  }
}
</script>

<style lang='scss'>
  .product {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all .7s ease-in-out;
    overflow: hidden;

    &__info {
      padding: 0 1em;
    }

    &__image {
      display: inline-block;
      vertical-align: middle;
      max-width: 80%;
      margin: 0 auto;
      cursor: pointer;

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

    .btn {
      display: inline-block;
      margin: 0 1em 0 0;
    }
  }

  .product--detailed {
    padding: 2em 1em 0 1em;

    .product__image {
      display: block;
    }
  }

  .btn {
    display: block;
    background: #0a0a0a;
    padding: .5em 0;
    width: 5em;
  }

  @media screen and (min-width: 54em) {
    .product {
      left: 50%;
      transform: translate(-50%, -50%);

      &__carousel {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        margin: 0 auto;
        max-width: 50em;
      }

      &__image {
        align-self: center;
        max-width: 30%;

        &--previous {
          margin-left: 0;
          max-width: 20%;
          opacity: .5;
        }

        &--next {
          margin-right: 0;
          max-width: 20%;
          opacity: .5;
        }
      }

      &__info {
        margin: 0 auto;
        max-width: 30em;
      }
    }
  }
</style>