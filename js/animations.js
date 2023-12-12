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
  let currentIndex = 0;
  let automaticMode = true;

  function changeColor(index) {
    for (let i = 0; i < steps.length; i++) {
      if (i <= index) {
        steps[i].style.backgroundColor = '#593F92';
        steps[i].style.color = 'white';
      } else {
        steps[i].style.backgroundColor = '';
        steps[i].style.color = '';
      }
    }

    if (automaticMode && index < steps.length - 1) {
      setTimeout(() => {
        changeColor(index + 1);
      }, 1500); // Adjust the delay between color changes
    } else if (automaticMode) {
      setTimeout(() => {
        currentIndex = 0;
        changeColor(currentIndex);
      }, 1500); // Adjust the delay before restarting
    }
  }

  function handleKeyPress(event) {
    automaticMode = false; // Switch to manual mode
    if (event.key === 'ArrowLeft') {
      currentIndex = Math.max(0, currentIndex - 1);
    } else if (event.key === 'ArrowRight') {
      currentIndex = Math.min(steps.length - 1, currentIndex + 1);
    } else {
      return;
    }

    // Change the color based on the current index
    changeColor(currentIndex);
  }

  function handleStepClick(index) {
    automaticMode = false; // Switch to manual mode
    currentIndex = index;

    // Change the color based on the clicked index
    changeColor(currentIndex);
  }

  // Start the animation from the first step
  changeColor(currentIndex);

  // Listen for keyboard events
  document.addEventListener('keydown', handleKeyPress);

  // Listen for click events on each step
  const clickableDivs = document.querySelectorAll('.touch-control');
  clickableDivs.forEach((div, index) => {
    div.addEventListener('click', () => {
      handleStepClick(index);
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector('.slider');
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');
  const slides = document.querySelectorAll('.slide');

  let currentIndex = 0;

  function showSlide(index) {
    const newPosition = -index * 100 + '%';
    slider.style.transform = 'translateX(' + newPosition + ')';
  }

  function updateStepColors(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        // Highlight the current step
        slide.style.backgroundColor = '#593F92';
        slide.style.color = 'white';
      } else {
        // Reset other steps
        slide.style.backgroundColor = '';
        slide.style.color = '';
      }
    });
  }

  function goToSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
    updateStepColors(currentIndex);
  }

  function goToPrevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
    updateStepColors(currentIndex);
  }

  function goToNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
    updateStepColors(currentIndex);
  }

  // Initial setup
  showSlide(currentIndex);
  updateStepColors(currentIndex);

  // Event listeners for navigation buttons
  prevButton.addEventListener('click', goToPrevSlide);
  nextButton.addEventListener('click', goToNextSlide);

  // Event listener for manual step change
  slides.forEach((slide, index) => {
    slide.addEventListener('click', () => {
      goToSlide(index);
    });
  });
});

















