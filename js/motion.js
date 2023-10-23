import { animate } from "motion"
import { inView } from "motion"

animate(".arrow", { backgroundColor: "red" })

document.addEventListener('DOMContentLoaded', () => {
    // Function to animate a counter using "motion"
    function animatedCounterMotion(target, element) {
        animate(
            (progress) => {
                const value = Math.round(target * progress);
                element.innerHTML = value;
            },
            { duration: 2, easing: "ease-out" }
        );
    }

    // Initialize the animated counters with "motion one" and Intersection Observer
    const counterElements = document.querySelectorAll('.counter');

    counterElements.forEach((counterElement) => {
        const target = parseInt(counterElement.getAttribute('data-target'), 10);
        inView(counterElement, (info) => {
            if (info.is('in')) {
                animatedCounterMotion(target, counterElement);
            }
        });
    });
});
