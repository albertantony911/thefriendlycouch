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

anime({
      targets: '.animate-diagonal',
      keyframes: [
        { opacity: 0, translateX: -20, translateY: 20 },
        { opacity: 1, translateX: 0, translateY: 0 },
        { opacity: 0, translateX: 20, translateY: -20 },
        { opacity: 0, translateX: -20, translateY: 20 }
      ],
      duration: 3500,
      easing: 'linear',
      loop: true
    });
    
