import './style/index.scss';


document.addEventListener("DOMContentLoaded", function(){

    console.log('WHITNEY IS BEAUTIFUL')

    function main(){
        const canvas = document.querySelector('.canvas-test');
        const renderer = new THREE.WebGLRenderer({canvas});
    }

    let fov = 75;
    let aspect = 2;
    let near = 0.1;
    let far = 5;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 2;

    const scene = new THREE.Scene;

    let boxWidth = 1;
    let boxHeight = 1;
    let boxDepth = 1;
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
    let material = new THREE.MeshBasicMaterial({color: white});

    const cube = new THREE.Mesh(geometry, material)
    
    scene.add(cube);

    renderer.render(scene, camera);
});