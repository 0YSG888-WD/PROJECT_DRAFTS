
document.addEventListener("DOMContentLoaded", function(){
    var mySwiper = new Swiper('.swiper-container', {    
        speed: 800,
        direction: 'vertical',
        mousewheel: true,
        parallax: true,
    });

    const controller = new ScrollMagic.Controller({});
    const pageOneTimeline = gsap.timeline();
    pageOneTimeline.from("#page-one", {opacity: 0, delay: 0.05});
    pageOneTimeline.from(".fuck-it", {opacity: 0, x: -50, delay: -0.25});
    const pageOneScene = new ScrollMagic.Scene({
        triggerElement: "#page-one",
        triggerHook: 0.3
    })
    .setTween(pageOneTimeline)
    .addTo(controller);
    const pageTwoTimeline = gsap.timeline();
    pageTwoTimeline.from(".page-two-subtext", {opacity: 0, delay: 0.75});
    const pageTwoScene = new ScrollMagic.Scene({
        triggerElement: "#page-two",
        triggerHook: 0.3
    })
    .setTween(pageTwoTimeline)
    .addTo(controller);
    const pageThreeTimeline = gsap.timeline();
    pageThreeTimeline.from("#page-three", {opacity: 0, delay: 0.05});
    const pageThreeScene = new ScrollMagic.Scene({
        triggerElement: "#page-three",
        triggerHook: 0.3
    })
    .setTween(pageThreeTimeline)
    .addTo(controller);

    const pageFourTimeline = gsap.timeline();
    pageFourTimeline.from("#page-four", {opacity: 0, delay: 0.05});
    pageFourTimeline.from(".starting-over", {opacity: 0, x: -50, delay: -0.25});
    pageFourTimeline.from(".welcome-message", {opacity: 0, delay: 4});
    const pageFourScene = new ScrollMagic.Scene({
        triggerElement: "#page-four",
        triggerHook: 0.3
    })
    .setTween(pageFourTimeline)
    .addTo(controller);
});