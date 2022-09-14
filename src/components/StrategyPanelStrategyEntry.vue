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
import {useStrategies } from '../strategies/strategies';

export default {
  name: "StrategyPanelStrategyEntrys",
  props: {
    name: String,
    description: String,
  },
  setup(){
     /* const val = strategiesStore.getDefaultOption(props.name);

      strategiesStore.commit('setStrategy',{name:props.name,value: val});
      return {
          val,
          options: strategiesStore.getAllOptions(props.name)
      }*/
  },
  methods: {
   change(e){
       useStrategies.setStrategy({name:this.name,value: e.target.value});
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
