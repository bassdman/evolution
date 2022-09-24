import { PlaneGeometry, MeshBasicMaterial, Scene, Camera, Mesh } from 'three';

var backgroundMesh = new Mesh(
    new PlaneGeometry(2, 2, 0),
    new MeshBasicMaterial({

    }));

backgroundMesh.material.depthTest = false;
backgroundMesh.material.depthWrite = false;

// Create your background scene
var backgroundScene = new Scene();
var backgroundCamera = new Camera();
backgroundScene.add(backgroundCamera);
backgroundScene.add(backgroundMesh);

export { backgroundScene }