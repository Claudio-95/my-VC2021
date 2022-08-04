<template>
  <div>
    <MC2Abila></MC2Abila>
  </div>
</template>

<script>

import MC2Abila from "@/components/MC2Abila";
//const d3 = require("d3");

export default {
  name: 'App',  //it's a class
  components: {
    MC2Abila,
  }

}
</script>

<style>
#app {
  font-family: "Roboto Light", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
