import { createCamera } from './camera.js';
import { createCube } from './cube.js';
import { createScene } from './scene.js';
import { createLights } from './lights.js';
import { createControls } from './controls.js';


import { Loop } from './Loop.js';

import { createRenderer } from './renderer.js';
import { Resizer } from './Resizer.js';

import { Group } from 'three';

// These variables are module-scoped: we cannot access them
// from outside the module
let camera;
let renderer;
let scene;
let loop;
let controls;

class World {
    constructor(container, props) {
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();
        loop = new Loop(camera, scene, renderer);
        container.append(renderer.domElement);


        const light = createLights();

        const group = new Group();
        for (let x = 0; x < props.width; x++) {
            for (let y = 0; y < props.height; y++) {
                const cube = createCube(2.3 * x, 2.3 * y);
                group.add(cube);
                loop.updatables.push(cube);
            }
        }

        scene.add(group, light);


        controls = createControls(camera, renderer.domElement);

        const resizer = new Resizer();
        resizer.init(container, camera, renderer);

        controls.addEventListener('change', () => {
            this.render();
        });

        controls.onChangePosition = () => {
            this.render();
        };
    }
    render() {
        // draw a single frame
        renderer.render(scene, camera);
    }
    start() {
        loop.start();
    }
    stop() {
        loop.stop();
    }
}

export { World };