<template>
  <div class="container">
    <h3>Strategien</h3>
    <strategy-entry
      name="filterNeighbours"
      description="Welche der Nachbarn eines Elements werden berücksichtigt?"
    ></strategy-entry>
  </div>
</template>

<script>
import StrategyEntry from "./StrategyPanelStrategyEntry.vue";
//import strategiesStore from '../strategies/strategies';

export default {
  name: "BrainSynapsis",
  props: {
    config: Object,
  },
  methods: {},
  watch: {

  },
  components: {
    StrategyEntry,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  padding: 10px;
  border-radius: 10px;
  border: 1px solid gray;
}
h3 {
  margin-top: 0px;
}
</style>
