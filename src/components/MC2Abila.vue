<template>
  <b-container>
    <b-row>
      <h1>MC2 2021</h1>
    </b-row>
    <b-row>
      <b-col>
        <b-row>
          <h2>Abila Map</h2>
          <svg width="100%" height="500">
            <g class="building" ref="building"></g>
            <g class="trajectories" ref="trajectories"></g>
          </svg>
        </b-row>
        <b-row></b-row>
      </b-col>
      <b-col cols="3">
        <h2>Persons</h2>
        <b-list-group class="personList">
        </b-list-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "MC2Abila"
}
</script>

<style scoped>

</style>
