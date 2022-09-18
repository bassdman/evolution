<template>
  <div>
    <div class="wrapper" :style="{ '--width':width,width: 25 * width + 'px' }">
        <GroundTile  v-for="p in grounds" v-bind:key="p" :ground="p" :width="width"></GroundTile>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useGround } from '../stores/groundStore';
import { useNurients } from '../stores/nurientStore';
import { useCreatures } from '../stores/creatureStore';

import GroundTile from './GroundTile.vue';

export default {
  name: "evo-sim",
  props: {
    width: Number,
    height: Number,
    nrGood: Number,
    nrEvil: Number
  },
  components: {
  GroundTile
  },
  setup(props) {
    const groundStore = useGround();

    const usedStores = [useNurients, useCreatures];


    //  const _neighbours = neighbours(i, parseInt(config.width), parseInt(config.height)).split(",");
    //  console.log(_neighbours);

    groundStore.initGrounds({
      width: props.width || 20,
      height: props.height || 20
    });

    const allGrounds = groundStore.allGrounds();
  
    for(let currentStore of usedStores){
      const store = currentStore();

      if(store.init)
        store.init(props,allGrounds);

      if(store.uiElements)
        groundStore.addUIElements(store.uiElements);
    }


    return {
      grounds: ref(groundStore.groundAsArray()),
    };
  },
};

/*function neighbours(ground, totalWidth, totalHeigth) {
    const nextX = parseInt(ground) + 1;
    const previousX = parseInt(ground) - 1;
    const nextY = parseInt(ground) + totalHeigth;
    const previousY = parseInt(ground) - totalHeigth;

    const neighbours = [];

    if (nextX % totalWidth !== 1) neighbours.push(nextX);

    if (previousX % totalWidth > 0) neighbours.push(previousX);

    if (parseInt(nextY / totalHeigth) < totalHeigth) neighbours.push(nextY);

    if (previousY > 0 && parseInt(previousY / totalHeigth) >= 0)
        neighbours.push(previousY);

    return neighbours.toString();
}*/
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(var(--width), 1fr);
  margin: auto;
}




</style>
