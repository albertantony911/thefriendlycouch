   
// Languages transition start


document.addEventListener('DOMContentLoaded', function () {
  const imageSets = document.querySelectorAll('.fade-image-set');
  let currentIndex = 0;

  function fadeInNextImage() {
    imageSets.forEach((set) => {
      const images = set.children;
      const nextIndex = (currentIndex + 1) % images.length;

      images[currentIndex].classList.remove('opacity-100');
      images[currentIndex].classList.add('opacity-0');

      images[nextIndex].classList.remove('opacity-0');
      images[nextIndex].classList.add('opacity-100');
    });

    currentIndex = (currentIndex + 1) % imageSets[0].children.length;
  }

  // Start the transition after a short delay (adjust as needed)
  setTimeout(() => {
    setInterval(fadeInNextImage, 3000); // Change images every 3 seconds (adjust as needed)
  }, 500);
});



     
    // Languages transition end





// India Map Animation start
      const options = {
        root: null, // Use the viewport as the root
        rootMargin: '0px', // No margin
        threshold: 0.5, // Trigger when 50% of the target is visible
      };

      // Callback function for the Intersection Observer
      function handleIntersection(entries, observer) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            draw(); // If the target is in view, trigger the draw function
          }
        });
      }

      // Create an Intersection Observer instance
      const observer = new IntersectionObserver(handleIntersection, options);

      // Target the SVG element
      const svgElement = document.querySelector('.map svg');

      // Start observing the SVG element
      observer.observe(svgElement);

      // We are only adding the 'active' class,
      // the entire animation is defined in the CSS code
      function draw() {
        svgElement.classList.add('active');
        // Stop observing after animation is triggered
        observer.unobserve(svgElement);
      }

// India Map Animation end




// Clock Animation start
var inc = 1000;

        clock();

        function clock() {
            const date = new Date();

            const hours = ((date.getHours() + 11) % 12 + 1);
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();

            const hour = (hours * 30) + (minutes / 2);
            const minute = minutes * 6;
            const second = seconds * 6;

            document.querySelector('.hour').style.transform = `rotate(${hour}deg)`
            document.querySelector('.minute').style.transform = `rotate(${minute}deg)`
            document.querySelector('.second').style.transform = `rotate(${second}deg)`
          }

setInterval(clock, inc);
        

    // Clock Animation end



document.addEventListener("DOMContentLoaded", function () {
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


