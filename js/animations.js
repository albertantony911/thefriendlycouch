   var bouncingBall = anime({
	targets: '.couch',
	translateY: '0.3rem',
	duration: 400,
	loop: true,
	direction: 'alternate',
	easing: 'easeInCubic',
	scaleY: {
		value: 0.98,
		duration: 250,
		delay: 250
    },
    scaleX: {
		value: 1.01,
		duration: 250,
		delay: 250
    }
     
   });


   var bouncingButton = anime({
	targets: '.bouncingbutton',
	translateY: '0.7rem',
	duration: 400,
	loop: true,
	direction: 'alternate',
	easing: 'easeInCubic',
	scaleY: {
		value: 0.9,
		duration: 250,
		delay: 250
    },
    scaleX: {
		value: 1.03,
		duration: 250,
		delay: 250
    }
     
   });

     var bouncingButton = anime({
	targets: '.bouncingbutton-m',
	translateY: '0.3rem',
	duration: 500,
	loop: true,
	direction: 'alternate',
	easing: 'easeInCubic',
	scaleY: {
		value: 0.98,
		duration: 250,
		delay: 250
    },
    scaleX: {
		value: 1.01,
		duration: 250,
		delay: 250
    }
     
	 });





document.addEventListener("DOMContentLoaded", function () {
  const steps = document.querySelectorAll('.color-change');
  const splide = new Splide('.splide', {
    type: 'fade',
    pagination: false,
    heightRatio: 1,
    speed: 1000,
  }).mount();

  let currentIndex = 0;
  let automaticMode = true;
  let intervalId = null;

  function changeColorAndSlide(index) {
    for (let i = 0; i < steps.length; i++) {
      if (i <= index) {
        steps[i].classList.add('active-step');
      } else {
        steps[i].classList.remove('active-step');
      }
    }

    // Move Splide to the corresponding slide with fade transition
    splide.go(index);
  }

  function startAutomaticMode() {
    automaticMode = true;

    intervalId = setInterval(() => {
      if (currentIndex < steps.length - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }

      changeColorAndSlide(currentIndex);
    }, 1650); // Adjust the delay between automatic mode changes
  }

  function handleKeyPress(event) {
    automaticMode = false; // Switch to manual mode
    clearInterval(intervalId); // Clear the interval

    if (event.key === 'ArrowLeft') {
      currentIndex = Math.max(0, currentIndex - 1);
    } else if (event.key === 'ArrowRight') {
      currentIndex = Math.min(steps.length - 1, currentIndex + 1);
    } else {
      return;
    }

    // Change the color and move Splide based on the current index
    changeColorAndSlide(currentIndex);

    // Restart automatic mode after manual change
    startAutomaticMode();
  }

  function handleStepClick(index) {
    automaticMode = false; // Switch to manual mode
    clearInterval(intervalId); // Clear the interval
    currentIndex = index;

    // Change the color and move Splide based on the clicked index
    changeColorAndSlide(currentIndex);

    // Restart automatic mode after manual change
    startAutomaticMode();
  }

  // Listen for slide changes and update the active step
  splide.on('moved', function (newIndex) {
    automaticMode = false; // Set automaticMode to false when the slide changes manually
    clearInterval(intervalId); // Clear the interval

    currentIndex = newIndex; // Update currentIndex based on the moved event
    changeColorAndSlide(newIndex);

    // Restart automatic mode after manual change
    startAutomaticMode();
  });

  // Manually set the initial state
  changeColorAndSlide(currentIndex);

  // Start the animation from the first step
  startAutomaticMode();

  // Listen for keyboard events
  document.addEventListener('keydown', handleKeyPress);

  // Listen for click events on each step
  const clickableDivs = document.querySelectorAll('.touch-control');
  clickableDivs.forEach((div, index) => {
    div.addEventListener('click', () => {
      handleStepClick(index);
    });
  });

  // Handle page visibility changes
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') {
      // Page is hidden, stop automatic mode
      automaticMode = false;
      clearInterval(intervalId);
    } else {
      // Page is visible again, restart automatic mode
      startAutomaticMode();
    }
  });
});




























