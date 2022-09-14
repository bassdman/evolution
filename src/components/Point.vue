<template>
  <div
    class="point"
    :title="title"
    v-bind:class="{ ['point' + point.type]: true, selected: point.isSelected}"
    v-on:click="toggleSelected"
  ></div>
</template>

<script>
export default {
  name: "BrainSynapsis",
  props: {
    point: Object,
  },
  methods: {
    toggleSelected() {
      this.$emit("pointSelected", {nr: this.point.nr, value: !this.point.isSelected});
    },
  },
  computed: {
    title() {
      return `point: ${this.point.nr}, 
type: ${this.point.type}, 
neighbours: ${this.point.neighbours}, 
weight: ${this.point.weight}`;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.point {
  width: 5px;
  height: 5px;
  border-radius: 10px;
  background: gray;
  margin: 10px;
  cursor: pointer;
  display: inline-block;
}

.selected {
  width: 9px;
  height: 9px;
  margin: 8px;
}

.pointstart{
  background: white;
}
.pointdestination {
  background: black;
}
.pointgood{
  background:green;
  width: 9px;
  height: 9px;
  margin: 8px;
}
.pointevil{
  background:red;
  width: 9px;
  height: 9px;
  margin: 8px;
}
</style>
