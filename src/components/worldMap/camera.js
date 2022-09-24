import { PerspectiveCamera } from 'three';

function createCamera() {
    const camera = new PerspectiveCamera(
        65, // fov = Field Of View
        1, // aspect ratio (dummy value)
        0.1, // near clipping plane
        340, // far clipping plane
    );

    // move the camera back so we can view the scene
    camera.position.set(0, 0, 60);
    return camera;
}

export { createCamera };