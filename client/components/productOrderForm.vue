<template>
  <form action="#" class="orderform">
    <label for="">First name</label>
    <input type="text" id="" name="firstname" required>
    <label for="">Last name</label>
    <input type="text" id="" name="firstname" required>
    <label for="">pick-up date</label>
    <input type="date" name="pickup-date" min="2018-01-08" max="2018-01-16" required>
    <button class="btn" type="submit">Submit</button>
  </form>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  @import '../static/css/color';
  .orderform {
    padding: 1em 0;
    input[type=text],
    input[type=date] {
      display: block;
      border: 2px solid $primaryColor;
      border-radius: 5px;
      appearance: none;
      padding: .5em;
      margin: 0 0 1em;
    }
  }
</style>
