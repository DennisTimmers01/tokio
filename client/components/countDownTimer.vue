<template>
  <div :class="['count-down', isDetailed ? 'count-down--detailed' : '']">
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
      'activeProduct',
      'isDetailed'
    ])
  }
}
</script>

<style lang='scss'>
  .count-down {
    position: fixed;
    bottom: 0;
    z-index: -1;
    transform: translateY(0);
    transition: all .7s ease-in-out;

    &__text {
      opacity: 1;
      transition: all .7s ease-in-out;
    }
  }

  .count-down--detailed {
    bottom: 55%;
    transform: translateY(1.1em);

    .count-down__text {
      opacity: 0;
    }
  }
</style>
