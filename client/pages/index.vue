<template>
  <main>
    <count-down-timer/>
    <productView/>
  </main>
</template>

<script>
import axios from 'axios'
import countDownTimer from '~/components/countDownTimer'
import productView from '~/components/productView'
export default {
  components: {
    countDownTimer,
    productView
  },
  async fetch ({store}) {
    const { data } = await axios.get('http://localhost:8080/api/products/')
    store.commit('setProducts', data)
  }
}
</script>

<style>
</style>
