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


	document.addEventListener('DOMContentLoaded', function () {
                const swiper = new Swiper('.swiper', {
					effect: 'fade',
					fadeEffect: {
						crossFade: true,
					},
					direction: 'horizontal',
					loop: true,
					waitForTransition: false,
					autoplay: {
						delay: 1000, // Adjust this value as needed
					},
					keyboard: {
						enabled: true,
						onlyInViewport: true,
					},
					a11y: {
						prevSlideMessage: 'Previous slide',
						nextSlideMessage: 'Next slide',
						firstSlideMessage: 'This is the first slide',
						lastSlideMessage: 'This is the last slide',
					},
					});
            });



document.addEventListener("DOMContentLoaded", function() {
  const steps = document.querySelectorAll('.color-change');

  function changeColor(index) {
    setTimeout(() => {
      // Change background color
      steps[index].style.backgroundColor = '#593F92';
      // Change text color
      steps[index].style.color = 'white';

      if (index < steps.length - 1) {
        changeColor(index + 1);
      } else {
        // All steps have changed color, reset the colors
        setTimeout(() => {
          steps.forEach(step => {
            step.style.backgroundColor = '';
            step.style.color = '';
          });
          // Restart the animation
          changeColor(0);
        }, 1500); // Adjust the delay before restarting the animation
      }
    }, 1500); // Adjust the delay between color changes
  }

  // Start the animation from the first step
  changeColor(0); // Start from the first step
});




document.addEventListener("DOMContentLoaded", function() {
  const textElements = document.querySelectorAll('.text-color-change');

  // Set initial styles for the first text element
  textElements[0].style.color = '#463174';
  textElements[0].style.textShadow = '0.5px 0.5px 2px rgba(70, 49, 116, 0.1)';

  function changeTextColor(index) {
    setTimeout(() => {
      // Change text color and add text shadow
      textElements[index].style.color = '#463174';
      textElements[index].style.textShadow = '0.5px 0.5px 2px rgba(70, 49, 116, 0.1)';

      if (index < textElements.length - 1) {
        changeTextColor(index + 1);
      } else {
        // All text elements have changed color, reset the styles
        setTimeout(() => {
          textElements.forEach(element => {
            element.style.color = '';
            element.style.textShadow = '';
          });
          // Restart the animation
          changeTextColor(0);
        }, 1000); // Adjust the delay before restarting the animation
      }
    }, 1000); // Adjust the delay between color changes
  }

  // Start the animation
  changeTextColor(1); // Start from the second text element to make the first one already colored
});








