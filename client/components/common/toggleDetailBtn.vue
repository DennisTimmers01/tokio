<template>
<nuxt-link 
  @click.native="toggleDetailed"
  :to="'/'">
  <slot></slot>
</nuxt-link>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'isDetailed'
    ])
  },
  methods: {
    ...mapActions([
      'toggleDetailed'
    ])
  }
}
</script>

<style>

</style>
