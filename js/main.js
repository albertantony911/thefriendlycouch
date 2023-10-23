document.addEventListener("DOMContentLoaded", function() {
  const menuButtonContainer = document.getElementById("menuButtonContainer");
  const nav = document.querySelector("nav");
  const menuItems = document.querySelectorAll(".menudrop li");

  menuButtonContainer.addEventListener("click", function() {
    // Toggle the 'menu-open' class to trigger the animations
    menuButtonContainer.classList.toggle("menu-open");

    // Toggle the 'translate-y-[-100%]' class to open/close the navigation menu
    nav.classList.toggle("translate-y-[-100%]");

    // Toggle the 'toggled' class on the list items
    menuItems.forEach(item => item.classList.toggle("toggled"));
  });
});


// Function to animate a counter
function animatedCounter(target, time = 300, start = 0, elementId) {
    let current = start;
    const increment = (target - current) / time;
    const counterElement = document.getElementById(elementId);

    function updateCounter() {
        if (current < target) {
            current += increment;
            const roundedValue = Math.round(current);
            counterElement.innerHTML = `${roundedValue}<span class="text-dark-purple font-normal animate-pulse">+</span>`;
            requestAnimationFrame(updateCounter);
        }
    }

    // Initialize the counter animation when the element is in the viewport
    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            updateCounter();
            observer.unobserve(counterElement); // Stop observing once it starts
        }
    });

    // Start observing the counter element
    observer.observe(counterElement);
}

// Initialize the animated counters
animatedCounter(8, 100, 0, "counter1");
animatedCounter(12, 100, 0, "counter2");
animatedCounter(2500, 100, 0, "counter3");
animatedCounter(7000, 100, 0, "counter4");
 



document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('navbar-toggle');
  const menu = document.getElementById('navbar-dropdown');

  const dropdownButton = document.getElementById('dropdownNavbarLink');
  const dropdownMenu = document.getElementById('dropdownNavbar');

  const doubleDropdownButton = document.getElementById('doubleDropdownButton');
  const doubleDropdown = document.getElementById('doubleDropdown');

  dropdownButton.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden');
  });

  doubleDropdownButton.addEventListener('click', () => {
    doubleDropdown.classList.toggle('hidden');
  });

  button.addEventListener('click', function () {
    menu.classList.toggle('hidden');
  });
});


