<template>
    <div class="groundWrapper" :id="props.ground.id" :data-nr="props.ground.nr" :circle="props.ground.circle">
        <div class="circle" :style="circleStyles"></div>

    </div>
</template>
  
<script setup>
import { defineProps, computed } from 'vue';
//import { useNurients } from '../stores/nurientStore';

const props = defineProps(['ground'])
//const nurientStore = useNurients();
//const nurients = nurientStore.get(props.ground.id);

const circleStyles = computed(() => {
    console.log(props.ground.ui.circle)
    return { 
        background: props.ground.ui.circle.color 
    }
})
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.circle {
    width: 10px;
    height: 10px;
    border-radius: 10px;
    margin: 5px;
    cursor: grounder;
    display: inline-block;
}

.groundWrapper {
    background: saddlebrown;
    border: 1px solid lightgray;
    display: flex;
    justify-content: center;
    align-items: center;
}

.groundgood {
    background: green;
    width: 9px;
    height: 9px;
    margin: 8px;
}

.groundevil {
    background: red;
    width: 9px;
    height: 9px;
    margin: 8px;
}
</style>
  