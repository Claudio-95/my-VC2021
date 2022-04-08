<template>
  <div>
    <svg id="viz" width="600" height="400"></svg>
  </div>
</template>

<script>
  const d3 = require("d3");

  //const barChart = BarChart().barColor(value: "orange"); it's not a correct solution because it's the same instance even if we have multiple instance
  // we want a local copy of each instance

  function BarChart () {
    let barColor = "orange";
    const scaleLength = d3.scaleLinear()
        .domain([0, 40])
        .range([0, 200]);

    const scaleY = d3.scaleBand()
        .domain(d3.range(10))
        .range([0, 300])
        .paddingInner(0.05);

    function my (selection) { //selection will be a d3 selection
      const myData = selection.datum();
      scaleY.domain(d3.range(myData.length));

      const gs = selection
          .selectAll("g")
          .data(myData)
          .join("g")
          .attr("transform", (d, i) => `translate(${10},${scaleY(i)})`);
      gs
          .selectAll("rect")
          .data((d) => [d])
          .join("rect")
          .attr("height", scaleY.bandwidth())
          .attr("width", scaleLength)
          .attr("fill", barColor);
      gs
          .selectAll("text")
          .data((d) => [d])
          .join("text")
          .attr("x", 15)
          .attr("dx", -5)
          .attr("y", scaleY.bandwidth())
          .attr("dy", -3)
          .text( (d) => d);
    }

    my.barColor = function (value) {
      if (!arguments.length)
        return barColor;
      barColor = value;
      return my;
    }

    return my;
  } //it's the declaration of class BarChart

export default {
  name: "BarChartVisualizer",
  props: {  //because numbers variable is a property in App.vue
    numbers: Array, //declare the type of property
  },
  data: function () {
    return {
      barChart: BarChart().barColor("orange"),  //this is the correct solution
    }
  },
  mounted(){  // force refreshPlot call at loading page
    this.refreshPlot();
  },
  methods: {
    refreshPlot: function () {
      d3.select("svg#viz").datum(this.numbers).call(this.barChart);
    }
  },
  watch: {  //execute everytime the property is changing
    numbers: function () {
      this.refreshPlot();
    }
  }
}
</script>

<style scoped>

</style>