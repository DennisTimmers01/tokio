<template>
  <div class="admin">
    <h1>Appointments</h1>
    <ul class="appointment-list">
      <li v-for="appointment in getAppointments" :key="appointment.id" class="appointment-list__item">
        <p>First name: {{appointment.firstname}}</p>
        <p>Last name: {{appointment.lastname}}</p>
        <p>Email: {{appointment.email}}</p>
        <p>{{appointment.pickup_date | moment('MMMM Do')}}</p>
        <a href=""></a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
  async fetch ({store}) {
    const { data } = await axios.get('http://localhost:8080/api/appointments')
    store.commit('setAppointments', data)
  },
  computed: {
    ...mapGetters([
      'getAppointments'
    ])
  }
}
</script>

<style lang="scss">
  .admin {
    padding: 1em;
  }

  .appointment-list {
    list-style: none;
    padding: 0;

    &__item {
      padding: 1em;

      &:nth-child(odd) {
        background: rgb(238, 238, 238);
      }
    }
  }
</style>
