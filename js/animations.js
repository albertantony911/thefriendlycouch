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
  targets: '.logo .lines path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true
});
    


