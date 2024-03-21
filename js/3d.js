import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { stopAnimation } from './script.js';


const shoe3d = document.querySelector('.shoe3d');
const loader = new GLTFLoader();
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true,
});
const camera = new THREE.PerspectiveCamera(47, shoe3d.clientWidth / shoe3d.clientHeight, 0.1, 1000);
const controls = new OrbitControls(camera, renderer.domElement);
controls.autoRotate = true;
controls.rotate = 180



// RENDER 
renderer.setSize(shoe3d.clientWidth, shoe3d.clientHeight);
shoe3d.appendChild(renderer.domElement);



// LIGHT
const pointLight = new THREE.PointLight(0xF6F6F6, 1, 100);
const ambientLight = new THREE.AmbientLight(0xF6F6F6, 4);
pointLight.position.set(0, 6, 3);
scene.add(pointLight, ambientLight);



// TEXTURE
const texture = new THREE.TextureLoader().load('./3d/texture.png');
scene.background = texture;



window.addEventListener('resize', () => {
  camera.aspect = shoe3d.clientWidth / shoe3d.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(shoe3d.clientWidth, shoe3d.clientHeight);
});



// look controls
controls.maxDistance = controls.minDistance = 25;
controls.addEventListener('change', function () {
  this.target.y = 6 ;
  camera.position.y = 6;
});



//LOAD OBJECT
loader.load('./3d/air-jordan.glb', function (gltf) {

  const model = gltf.scene;
  scene.add(model);

  stopAnimation()
}, undefined, function (error) {
  console.error(error);
});




// ANIMATE
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();



