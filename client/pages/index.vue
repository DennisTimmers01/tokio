<template>
  <main>
    <count-down-timer/>
    <productView />
  </main>
</template>

<script>
import countDownTimer from '~/components/countDownTimer'
import productView from '~/components/productView'
export default {
  components: {
    countDownTimer,
    productView
  }
}
</script>

<style>
</style>
