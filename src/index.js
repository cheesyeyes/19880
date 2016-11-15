import {WebGLRenderer,
        Mesh,
        MeshBasicMaterial,
        PerspectiveCamera,
        Scene,
        CubeGeometry} from '../lib/three/three.modules';

var renderer, camera, scene;
var geometry,material,mesh;

function init(){
  document.body.style.margin = 0;

  renderer = new WebGLRenderer({antialias:true});
  renderer.setSize(innerWidth,innerHeight);
  document.body.appendChild(renderer.domElement);

  scene = new Scene();

  camera = new PerspectiveCamera(75, innerWidth/innerHeight,0.01,1000);
  scene.add(camera);

  geometry = new CubeGeometry(5,5,5);
  material = new MeshBasicMaterial({color:0x0000ff, wireframe:true})
  mesh = new Mesh(geometry, material);

  scene.add(mesh);

  camera.position.z = 10;
}

function render(){
  requestAnimationFrame( render );
  renderer.render(scene, camera);

  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;
  mesh.rotation.z += 0.01;
}

init();
render();
