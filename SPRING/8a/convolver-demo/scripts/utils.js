window.utils  = (function(){

	//Function to create a color using sliders or just inputed levels.
	function makeColor(Reds, Greens, Blues, Alphas){
   		var color='rgba('+Reds+','+Greens+','+Blues+', '+Alphas+')';
   		return color;
	}

	// returns a random color of alpha 1.0
	// http://paulirish.com/2009/random-hex-color-code-snippets/
	function getRandomColor(){
		var red = Math.round(Math.random()*254+1);
		var green = Math.round(Math.random()*254+1);
		var blue = Math.round(Math.random()*254+1);
		var color ='rgb(' + red + ','+ green + ',' + blue + ')';
		//	var color = 'rgba(' + red + ',' + green + ',' + blue + ',0.50)'; // 0.50 alpha
		return color;
	}

	return{
		makeColor : makeColor,
		getRandomColor : getRandomColor
	};

}());