import './style/index.scss';
import vertexShader from "./gl/vertex.glsl";
import fragmentShader from "./gl/fragment.glsl";
import img from './images/name.png';


document.addEventListener("DOMContentLoaded", function(){
    console.log('WHITNEY IS BEAUTIFUL')

    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
    });
    renderer.setClearColor( 0xFF0000, 0 )
    const canvas = document.getElementById("canvas");
    const camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        100
    );
    const clock = new THREE.Clock();

    function init(){
        camera.position.z = 1;
        renderer.setSize(window.innerWidth, window.innerHeight);
        canvas.appendChild(renderer.domElement);
    }

    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(img);

    const geometry = new THREE.PlaneGeometry(0.8, 0.09, 60, 60);
    const material = new THREE.ShaderMaterial({
        uniforms: {
            uTime: {value: 0.0},
            uTexture: { value: texture }
        },
        vertexShader,
        fragmentShader,
        side: THREE.DoubleSide
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    function animation(){
        material.uniforms.uTime.value = clock.getElapsedTime();
    };

    function render(){
        animation();
        renderer.render(scene, camera);
        requestAnimationFrame(render);
    }
    init();
    render();
});