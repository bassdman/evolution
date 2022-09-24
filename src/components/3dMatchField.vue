

<template>
    <div id="scene-container" ref="canvas" class="canvas">
        <!-- Our <canvas> will be inserted here -->
    </div>
</template>
  
<script>
import { ref } from 'vue';

import { World } from './worldMap/World.js';

export default {
    name: "gamefield-3d",
    props: {
        width: Number,
        height: Number
    },
    components: {

    },
    mounted() {
        // 1. Create an instance of the World app
        const world = new World(this.$refs.canvas, this.props);

        world.render();
    },
    setup(props) {
        const canvas = ref(null);



        return {
            canvas,
            props
        };
    },
};
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.canvas {
    width: 100%;
    height: 700px;
    background: gray;
}
</style>
  