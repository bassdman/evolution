<template>
    <header class="header">
      <div>Round {{roundNr}}</div>
      <div><button>Next round ></button></div>
    </header>
</template>
  
<script setup>
import { useRound } from '@/stores/roundStore';

const roundStore = useRound();

const roundNr = roundStore.getRound();
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
    padding: 10px;
    width: 100%;
    height: 60px;
    background: gray;
    color: white;
    margin-bottom: 0px;
}
</style>
  