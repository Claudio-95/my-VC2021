<template>
  <div>
    <h1>First project with D3 and Vue.js</h1>
    <p>{{numbers}}</p>
    <button @click="shuffleNumbers()">Shuffle</button> <!-- pulsante che genera numeri casuali -->
    <BarChartVisualizer :numbers="numbers"></BarChartVisualizer>  <!-- property numbers has same value of numbers variable -->
  </div>
</template>

<script>

import BarChartVisualizer from "@/components/BarChartVisualizer";
const d3 = require("d3");

export default {
  name: 'App',  //it's a class
  components: {
    BarChartVisualizer,
  },
  data: function () {  //function serve per non dare l'array numbers come costante
    return {
      numbers: [1,3,4,6,9], //use command Fix ESLint Problems with right click for fix code
    }
  }, // we store, for example, numbers or newNumbers variable in second visualization of d3.js
  methods: {
    shuffleNumbers: function () {
      this.numbers = d3
          .range(Math.round(Math.random() * 20))
          .map(() => Math.round(Math.random() * 100))
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
