import { vertexShader } from "../app/vertex.glsl";
import { fragmentShader } from "../app/fragment.glsl";
import { img } from "../assets/name.png";

document.addEventListener("DOMContentLoaded", function(){
    console.log('WHITNEY IS BEAUTIFUL!!')

    let SCREEN_WIDTH = window.innerWidth;
    let SCREEN_HEIGHT = window.innerHeight;
    let renderer, scene, camera, mesh;

    function init(){
        renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0xffffff, 1);

        canvas = document.getElementById('container');
        canvas.appendChild(renderer.domElement);

        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(
            45,
            window.innerWidth / window.innerHeight,
            0.1,
            100
          );
        camera.position.z = 1

        const geometry = new THREE.PlaneGeometry(0.4, 0.6, 32, 32);
        const material = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms: {
              uTime: { value: 0.0 },
              uTexture: { value: new THREE.TextureLoader().load(img) }
            },
            // wireframe: true,
            side: THREE.DoubleSide
          });
        mesh = new THREE.Mesh(this.geometry, this.material);
        scene.add(mesh);
    };
    function animate(){
        renderer.render(scene, camera)
    }

    function windowResize(){
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener('resize', windowResize);

    init();
    animate();

});