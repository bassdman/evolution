<template>
  <HeaderMenu class="header"></HeaderMenu>
  <MatchField :width="40" :height="30" :nrGood="10" :nrEvil="10"/>
</template>

<script setup>
import HeaderMenu from './components/HeaderMenu.vue';
import MatchField from './components/MatchField.vue'



</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
