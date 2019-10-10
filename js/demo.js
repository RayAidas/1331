/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

$(document).ready(function() {
  $('#particles').particleground({
    dotColor: 'rgba(250,250,250,0.15)',
    lineColor: 'rgba(250,250,250,0.15)',
    proximity:60,
    density:8000,
    parallaxMultiplier:100
    // minSpeedX：0.1,	
	// maxSpeedX：0.7,	
	// minSpeedY：0.1,	
	// maxSpeedY：0.7
  });
});