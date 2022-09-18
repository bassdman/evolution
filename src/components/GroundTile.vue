<template>
    <div class="groundWrapper" :id="props.ground.id" :data-nr="props.ground.nr" :data-nurient-a="nurients.A.nr" :data-nurient-b="nurients.B.nr"
        :data-nurient-c="nurients.C.nr" :data-nurient-d="nurients.D.nr" :data-nurient-e="nurients.E.nr"
        :data-nurient-f="nurients.F.nr" :data-nurient-g="nurients.G.nr" :data-nurient-h="nurients.H.nr"
        :data-nurient-i="nurients.I.nr">
        <div class="ground"></div>
    </div>
</template>
  
<script setup>
    import { defineProps } from 'vue';
import { useNurients } from '../stores/nurientStore';

const props = defineProps(['ground'])
const nurientStore = useNurients();
const nurients = nurientStore.get(props.ground.id);


</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.ground {
  width: 5px;
  height: 5px;
  border-radius: 10px;
  /*  background: gray;*/
  margin: 10px;
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
  