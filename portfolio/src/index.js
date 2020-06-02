import './style/index.scss';
import vertexShader from "./gl/vertex.glsl";
import fragmentShader from "./gl/fragment.glsl";
import img from './assets/name.png';


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

    const controller = new ScrollMagic.Controller({});

    const canvasTimeline = gsap.timeline();
    canvasTimeline.to(".left-and-right", {x: -600, delay: 0});
    canvasTimeline.to(".up-and-down", {y: -100, delay: 0.2});
    const canvasTimelineScene = new ScrollMagic.Scene({
        triggerElement: ".section-two",
        triggerHook: 0.99999
    })
    .setTween(canvasTimeline)
    .addTo(controller);

    const sectionOneTimeline = gsap.timeline();
    sectionOneTimeline.to(".line-one", {opacity: 0, y: -25, delay: 0});
    sectionOneTimeline.to(".line-two", {opacity: 0, y: -25,  delay: -0.1});
    sectionOneTimeline.to(".line-three", {opacity: 0, y: -25,  delay: -0.2});
    sectionOneTimeline.to(".line-four", {opacity: 0, y: -25,  delay: -0.3});
    const sectionOneScene = new ScrollMagic.Scene({
        triggerElement: ".section-two",
        triggerHook: 0.999
    })
    .setTween(sectionOneTimeline)
    .addTo(controller);

    const changeBackgroundTimeline = gsap.timeline();
    changeBackgroundTimeline.to("html", {backgroundColor:"rgb(10,0,0)", ease:Power4.easeIn});
    const changeBackgroundScene = new ScrollMagic.Scene({
        triggerElement: ".section-two",
        triggerHook: 0.999
    })
    .setTween(changeBackgroundTimeline)
    .addTo(controller);



    var mySwiper = new Swiper('.swiper-container', { 
        direction: 'horizontal',
        loop: true,
        mousewheel: true,
        mousewheel: {
            forceToAxis: true,
            invert: true
        },
        spaceBetween: 0,
        speed: 900,
        parallax: true
     });
});