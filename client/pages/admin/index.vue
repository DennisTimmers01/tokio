<template>
  <h1>admin</h1>
</template>

<script>
import axios from 'axios'
export default {
  async fetch ({store}) {
    const { data } = await axios.get('http://localhost:8080/api/appointments')
    store.commit('setAppointments', data)
  }
}
</script>

<style>

</style>
