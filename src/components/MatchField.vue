<template>
  <div>
    <div class="wrapper" :style="{ '--width':width,width: 25 * width + 'px' }">
      <Point v-for="y in points" v-bind:key="y" :point="y" v-on:pointSelected="onPointSelected"></Point>
    </div>
    <div class="panel">
      <button v-on:click="nextStep">Next Step ></button><button v-on:click="oneRun">One Run >>></button>
    </div>
    <div>
      Current: steps: {{ steps }}; succeeded: {{ succeeded }},
      minSuccessfullSteps:
      {{ minSuccessfullSteps == -1 ? "---" : minSuccessfullSteps }}<br />
      History:
      <ul>
        <li v-for="item in log" v-bind:key="item">
          <span v-bind:style="{ color: item.success ? 'green' : 'red' }">{{ item.steps }}x</span>
        </li>
      </ul>
    </div>
    <StrategyPanel v-bind:config="config" @updatestrategies="updateStrategies">
    </StrategyPanel>
  </div>
</template>

<script>
import { ref } from "vue";
import Point from "./Point";
import { nextPoint } from "../helpers/MoveNext";
import { initPoints } from "../helpers/Points";
import StrategyPanel from "./StrategiesPanel.vue";
import { config } from "../../evolution.config";
import { useStrategies }  from '../strategies/strategies';

function reset() {
  this.currentPosition = this.start;
  this.steps = 0;
  this.succeeded = false;
  this.failed = false;
}

function nextStep(ctx) {
  const _nextPoint = nextPoint(ctx.currentPosition, ctx.points, ctx.strategiesStore);

  if (!_nextPoint) {
    ctx.log.push({ steps: ctx.steps, success: false });
    ctx.failed = true;
    return;
  }

  ctx.currentPosition = _nextPoint.nr;
  _nextPoint.visited = true;
  ctx.steps++;
}

export default {
  name: "evolution-brain",
  components: {
    Point,
    StrategyPanel,
  },
  props: {
    width: Number,
    height: Number,
    nrGood: Number,
    nrEvil: Number
  },
  setup(props) {
    const strategiesStore = useStrategies();


    const points = initPoints({
      width: props.width || 20,
      height: props.height || 20,
      nrGood: props.nrGood,
      nrEvil: props.nrEvil,
      strategiesStore 
    });

    return {
      selected: ref(0),
      points: ref(points),
      succeeded: false,
      steps: ref(0),
      minSuccessfullSteps: -1,
      reset,
      log: [],
      config,
      strategiesStore,
      strategies: ref({}),
    };
  },
  methods: {
    updateStrategies(ctx) {
      console.log('updatestrategies', ctx)
      this.strategies = ctx.strategies;
    },
    getPoint(nr) {
      return this.points[nr];
    },
    onPointSelected(value) {
      this.points.forEach((point) => {
        if (point.nr == value.nr) point.isSelected = value.value;
        else point.isSelected = false;
      });

      this.selected = value.nr;
    },
    nextStep() {
      nextStep(this);
      if (this.succeeded || this.failed) this.reset();
    },
    oneRun() {
      if (this.succeeded || this.failed) this.reset();

      while (!this.succeeded && !this.failed) {
        nextStep(this);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  display:grid;
  grid-template-columns: repeat(var(--width),1fr);
  margin: auto;
}
</style>
