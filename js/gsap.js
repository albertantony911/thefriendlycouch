// script.js
gsap.registerPlugin(ScrollTrigger);

gsap.from(".reveal-div", {
    opacity: 0,
    y: 20,
    duration: 1,
    scrollTrigger: {
        trigger: ".reveal-div",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
    },
});

// Add a ScrollTrigger to make the vertical line appear at the end
gsap.to(".vertical-line", {
    opacity: 1,
    scrollTrigger: {
        trigger: ".reveal-div", // Element to trigger the animation
        start: "top 10%", // Start animation when the top of the element is 10% in the viewport
        end: "top 0%", // End animation when the top of the element is at the top of the viewport
        toggleActions: "play none none none", // Control the timeline playback
    },
});

