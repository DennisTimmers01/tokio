<template>
  <div class="count-down">
    <span class="count-down__text">Coming</span>
    <br>
    <span class="count-down__text">Soon</span>
    <br>
    <span class="count-down__clock">{{activeProduct.release}}</span>
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

<style lang='scss'>
  .count-down {
    position: fixed;
    top: auto;
    right: 0;
    bottom: .5em;
    left: 0;
    z-index: -1;
  }
</style>
