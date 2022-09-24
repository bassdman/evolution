import { BoxGeometry, Mesh, MeshStandardMaterial } from 'three';

//const radiansPerSecond = MathUtils.degToRad(30);

function createCube(x = 0, y = 0, z = 0) {
    // create a geometry
    const geometry = new BoxGeometry(2, 2, .2);

    // create a default (white) Basic material
    const material = new MeshStandardMaterial({ color: '#D2691E' });

    // create a Mesh containing the geometry and material
    const cube = new Mesh(geometry, material);

    // cube.rotation.set(-0.5, -0.1, 0.8);
    cube.position.x = x;
    cube.position.y = y;
    cube.position.z = z;


    /*   cube.tick = (delta) => {
           // increase the cube's rotation each frame
           cube.rotation.z += radiansPerSecond * delta;
           cube.rotation.x += radiansPerSecond * delta;
           cube.rotation.y += radiansPerSecond * delta;
       };*/

    return cube;
}

export { createCube };