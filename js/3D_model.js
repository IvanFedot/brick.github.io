import * as THREE from "three"
import { GLTFLoader } from "../node_modules/three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "../node_modules/three/examples/jsm/Addons.js";

const canvas = document.getElementById("canvas")


const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 100

const loader = new GLTFLoader()

const ambLight = new THREE.AmbientLight("white", 3)
scene.add(ambLight)

// const dirLight = new THREE.DirectionalLight("white", 2)
// dirLight.position.set(5, 5, 5)
// scene.add(dirLight)

const render = new THREE.WebGLRenderer({canvas: canvas})
render.setPixelRatio(0.4)
render.autoClearColor = false;

var plane = new THREE.Mesh( new THREE.BoxGeometry( 1000, 1000 ), new THREE.MeshBasicMaterial( { transparent: true, opacity: 0 } ) );
plane.position.z = 0;
scene.add( plane );

const controls = new OrbitControls(camera, render.domElement)
controls.enableDamping = true
controls.dampingFactor = 0.05
controls.screenSpacePanning = false
controls.minDistance = 3
controls.maxDistance = 3
controls.enableZoom = false
controls.panSpeed = 0

// const geometry = new THREE.BoxGeometry()
// const material = new THREE.MeshStandardMaterial({ color: "red" })

// const cube = new THREE.Mesh(geometry, material)
// cube.position.set(0, 0, 0)
// scene.add(cube)

loader.load("../model/brick.glb",
    (gltf) => {
        const model = gltf.scene
        model.scale.set(1, 1, 1)
        model.position.set(0, 0, 0)
        model.rotateY(3.15)
        scene.add(model)
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total * 100) + "% 3D loaded")
    },
    (error) => {
        console.log(error)
    }
)

function animate() {
    requestAnimationFrame(animate)

    controls.update()
    render.render(scene, camera)
}

animate()
