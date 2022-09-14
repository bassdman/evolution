<template>
  <div class="container">
      <b>{{name}} </b><br>
      {{description}}<br>
      <select v-on:change="change">
          <option v-for="opt in options" :key="opt" :value="opt.name">{{opt.text}} ({{opt.name}})</option>
    </select>
  </div>
</template>

<script>
import strategiesStore from '../strategies/strategies';

export default {
  name: "StrategyPanelStrategyEntrys",
  props: {
    name: String,
    description: String,
  },
  setup(props){
      const val = strategiesStore.getters.getDefaultOption(props.name);

      strategiesStore.commit('setStrategy',{name:props.name,value: val});
      return {
          val,
          options: strategiesStore.getters.getAllOptions(props.name)
      }
  },
  methods: {
   change(e){
       strategiesStore.commit('setStrategy',{name:this.name,value: e.target.value});
   }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
    margin: auto;
}
</style>
