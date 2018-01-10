<template>
  <form action="#" class="orderform">
    <ul>
      <li>
        <label for="firstname">First name</label>
        <input type="text" id="firstname" name="firstname" required>
      </li>
      <li>
        <label for="lastname">Last name</label>
        <input type="text" id="lastname" name="lastname" required>
      </li>
      <li>
        <label for="email">E-mail</label>
        <input type="email" id="email" name="email" required>
      </li>
      <li>
        <label for="phonenumber">Phone</label>
        <input type="tel" id="phonenumber" name="phone_number" required>
      </li>
      <li>
        <label for="orderdate">pick-up date</label>
        <input type="date" id="orderdate" name="pickup_date" min="2018-01-08" max="2018-01-16" required>
      </li>
      <li>
        <button class="btn" type="submit">Submit</button>
      </li>
    </ul>
  </form>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import "../static/css/color";
.orderform {
  padding: 1em 0;
  input[type="text"],
  input[type="date"],
  input[type="email"],
  input[type="tel"] {
    display: block;
    border: 2px solid $primaryColor;
    border-radius: 5px;
    appearance: none;
    padding: 0.5em;
    margin: 0 0 1em;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  @media screen and (min-width: 32em) {
    ul {
      display: flex;
      flex-wrap: wrap;

      li {
        box-sizing: border-box;
        width: 50%;
        padding: 0 2em 0 0;

        input {
          width: 100%;
        }

        .btn {
          margin-top: 1.8em;
        }
      }
    }
  }
}
</style>
