// https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills

(function(){
	"use strict";

	// WEB AUDIO API
	// http://www.html5rocks.com/en/tutorials/webaudio/intro/
	try {
   		window.AudioContext = window.AudioContext||window.webkitAudioContext;
   		var ctx = new AudioContext(); // throws error in FireFox
  	}
  		catch(e) {
    	alert('Web Audio API is not supported in this browser');
  	}
  	
  	// FILEREADER API
  	if(! window.FileReader) alert('FileReader API is not supported in this browser');
  	
  	
  	// HTML5 DRAG AND DROP
  	// ...
	 // we'll just let HTML5 Drag and Drop fail quietly
	 // ...
	 
	 
	 // FULL SCREEN MODE
	window.requestFullscreen = function(element) {
		if (element.requestFullscreen) {
		  element.requestFullscreen();
		} else if (element.mozRequestFullscreen) {
		  element.mozRequestFullscreen();
		} else if (element.mozRequestFullScreen) { // camel-cased 'S' was changed to 's' in spec
		  element.mozRequestFullScreen();
		} else if (element.webkitRequestFullscreen) {
		  element.webkitRequestFullscreen();
		}
		// .. and do nothing if the method is not supported
	};
	
	
	
	// REQUEST ANIMATION FRAME
	// https://www.khronos.org/registry/webgl/sdk/demos/common/webgl-utils.js
	/**
	 * Provides requestAnimationFrame in a cross browser way.
	 */
	window.requestAnimFrame = (function() {
	  return window.requestAnimationFrame ||
			 window.webkitRequestAnimationFrame ||
			 window.mozRequestAnimationFrame ||
			 window.oRequestAnimationFrame ||
			 window.msRequestAnimationFrame ||
			 function(/* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
			   return window.setTimeout(callback, 1000/60);
			 };
	})();
	
	/**
	 * Provides cancelAnimationFrame in a cross browser way.
	 */
	window.cancelAnimFrame = (function() {
	  return window.cancelAnimationFrame ||
			 window.webkitCancelAnimationFrame ||
			 window.mozCancelAnimationFrame ||
			 window.oCancelAnimationFrame ||
			 window.msCancelAnimationFrame ||
			 window.clearTimeout;
	})();


	

}());