<template>
  <img src="../static/images/fbt.png" alt="prev item" class="product__image product__image--previous">
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'activeProduct',
      'isDetailed'
    ])
  }
}
</script>

<style>
</style>
