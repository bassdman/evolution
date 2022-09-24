import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

function createControls(fields, camera, canvas) {
    const moveFactor = .09;
    const controls = new OrbitControls(camera, canvas);

    controls.enabled = true;
    controls.minDistance = 5;
    controls.maxDistance = 100;


    controls.minPolarAngle = Math.PI / 2;
    controls.maxPolarAngle = Math.PI / 2;

    controls.minAzimuthAngle = 0; // default
    controls.maxAzimuthAngle = 0; // default

    controls.keys = {
        LEFT: 'a', //left arrow
        UP: 'w', // up arrow
        RIGHT: 'd', // right arrow
        BOTTOM: 's' // down arrow
    }

    controls.onChangePosition = function() {}

    document.addEventListener("keydown", (event) => {
        if (event.key == 'w') {
            camera.position.setY(camera.position.y + .5);
        }

        if (event.key == 's') {
            camera.position.setY(camera.position.y - .5);
        }
        if (event.key == 'a')
            camera.position.setX(camera.position.x - .5);
        if (event.key == 'd')
            camera.position.setX(camera.position.x + .5);

        controls.target.set(camera.position.x, camera.position.y, 0);
        controls.update();
        controls.onChangePosition(event.key);
    });

    document.addEventListener("mousedownmove", (event) => {
        //canvas.style.setProperty('--offsetX', event.detail.moveX + 'px');
        //canvas.style.setProperty('--offsetY', event.detail.moveY + 'px');

        controls.target.set(controls.target.x - (event.detail.moveX * moveFactor), controls.target.y + (event.detail.moveY * moveFactor));
        controls.update();
    });
    /**
     *     const controls = {
        onUpdate: function() {}
    }
    let lastPositionScroll = window.scrollY,
        lastPositionX = 0,
        lastPositionY = 0;
    let mouseDown = false;

    document.addEventListener("scroll", () => {
        const direction = lastPositionScroll < window.scrollY ? 'up' : 'down';
        lastPositionScroll = window.scrollY;

        if (direction == 'up')
            camera.fov += 1;
        else
            camera.fov -= 1;

        camera.updateProjectionMatrix();
        controls.onUpdate();
    });

    document.addEventListener("mousedown", () => {
        mouseDown = true;
    });
    document.addEventListener("mouseup", () => {
        mouseDown = false;
    });

    document.addEventListener("mousemove", (event) => {
        if (!mouseDown)
            return;

           const moveY = event.offsetX < lastPositionX ? 'down' : 'up';
           const moveX = event.offsetY < lastPositionY ? 'left' : 'right';

           lastPositionX = event.offsetX;
           lastPositionY = event.offsetY;

           if (moveY == 'up') {
               camera.position.setY(camera.position.y + .05);
           }

           if (moveY == 'down') {
               camera.position.setY(camera.position.y - .05);
           }
           if (moveX == 'left')
               camera.position.setX(camera.position.x - .05);
           if (moveX == 'right')
               camera.position.setX(camera.position.x + .05);

           camera.updateProjectionMatrix();
           controls.onUpdate(event.key);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key == 'w') {
            camera.position.setY(camera.position.y + .5);
        }

        if (event.key == 's') {
            camera.position.setY(camera.position.y - .5);
        }
        if (event.key == 'a')
            camera.position.setX(camera.position.x - .5);
        if (event.key == 'd')
            camera.position.setX(camera.position.x + .5);

        controls.onUpdate(event.key);
    });
     */
    return controls;
}

export { createControls };