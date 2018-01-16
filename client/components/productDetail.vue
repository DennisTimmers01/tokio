<template>
  <div>
    <countDownTimer class="count-down--detailed"/>
    <div class="product__detail">
      <img :src="`../${activeProduct.img}`" alt="Product image" class="product__image">
      <h2 class="product__brand">{{activeProduct.brand}}</h2>
      <h1 class="product__title">{{activeProduct.title}}</h1>
      <p class="product__price">&euro; {{activeProduct.price}}</p>
      <p class="product__description">{{activeProduct.description}}</p>
      <nuxt-link class="btn" :to="`/`">Back</nuxt-link>
      <nuxt-link class="btn" :to="`/order/${activeProduct.id}`">Order</nuxt-link>
    </div>
  </div>
</template>

<script>
import countDownTimer from '~/components/countDownTimer'
import { mapGetters } from 'vuex'
export default {
  components: {
    countDownTimer
  },
  computed: {
    ...mapGetters([
      'activeProduct'
    ])
  }
}
</script>

<style lang="scss" scoped>
  .product {
    &__detail {
      padding: 1em;

      .btn {
        display: inline-block;
        margin: 0 1em 0 0;
      }
    }

    &__image {
      display: block;
      max-width: 90%;
      margin: 0 auto;
    }
  }
  @media screen and (min-width: 32em) {
    .product {
      &__detail{
        max-width: 32em;
        margin: 0 auto;
      }

      &__image {
        max-width: 50%;
      }
    }
  }
</style>
