<template>
  <div>
    <div class="wrapper" :style="{ '--width':width,width: 25 * width + 'px' }">
      <div class="groundWrapper" v-for="p in grounds" v-bind:key="p" v-on:groundSelected="ongroundSelected">
       <div class="ground" v-bind:class="{ ['ground' + p.type]: true, selected: p.isSelected}"
          v-on:click="toggleSelected" :data-nurient-a="p.nurients.A.nr" :data-nurient-b="p.nurients.B.nr"
          :data-nurient-c="p.nurients.C.nr" :data-nurient-d="p.nurients.D.nr"
          :data-nurient-e="p.nurients.E.nr" :data-nurient-f="p.nurients.F.nr"
          :data-nurient-g="p.nurients.G.nr" :data-nurient-h="p.nurients.H.nr"
          :data-nurient-i="p.nurients.I.nr"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStrategies } from '../stores/strategyStore';
import { useNurients } from '../stores/nurientStore';

function neighbours(ground, totalWidth, totalHeigth) {
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
}

function initgrounds(config) {
  const nrOfgrounds = (config.width || 10) * (config.height || 10);

  const placePeopleOnMap = config.strategiesStore.get('groundType');
  const locationOfPeople = placePeopleOnMap.run(config, nrOfgrounds);

  let grounds = [];
  for (let i = 1; i <= nrOfgrounds; i++) {
    const type = locationOfPeople[i] || 'default';
    const _neighbours = neighbours(i, parseInt(config.width), parseInt(config.height)).split(",");
    const nurients = config.nurientStore.getInitialNrOfNurientsForTile();

    const ground = {
      nr: i,
      isSelected: false,
      neighbours: _neighbours,
      type: type,
      weight: 10,
      nurients
    };
    grounds.push(ground);
  }

  return grounds;
}

export default {
  name: "evo-sim",
  props: {
    width: Number,
    height: Number,
    nrGood: Number,
    nrEvil: Number
  },
  setup(props) {
    const strategiesStore = useStrategies();
    const nurientStore = useNurients();


    const grounds = initgrounds({
      width: props.width || 20,
      height: props.height || 20,
      nrGood: props.nrGood,
      nrEvil: props.nrEvil,
      strategiesStore,
      nurientStore
    });

    return {
      selected: ref(0),
      grounds: ref(grounds),
      steps: ref(0),
    };
  },
  methods: {
    updateStrategies(ctx) {
      console.log('updatestrategies', ctx)
      this.strategies = ctx.strategies;
    },
    getground(nr) {
      return this.grounds[nr];
    },
    ongroundSelected(value) {
      this.grounds.forEach((ground) => {
        if (ground.nr == value.nr) ground.isSelected = value.value;
        else ground.isSelected = false;
      });

      this.selected = value.nr;
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(var(--width), 1fr);
  margin: auto;
}
.ground {
  width: 5px;
  height: 5px;
  border-radius: 10px;
/*  background: gray;*/
  margin: 10px;
  cursor: grounder;
  display: inline-block;
}

.selected {
  width: 9px;
  height: 9px;
  margin: 8px;
}

.groundWrapper{
  background: lightgreen;
  border: 1px solid lightgray;
  display:flex;
  justify-content:center;
  align-items:center;
}

.groundgood{
  background:green;
  width: 9px;
  height: 9px;
  margin: 8px;
}
.groundevil{
  background:red;
  width: 9px;
  height: 9px;
  margin: 8px;
}
</style>
