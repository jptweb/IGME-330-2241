window.CanvasViz1 = function(){
	"use strict";
	
	function CanvasViz1(element, canvasID){
		// create a new canvas
		var c = document.createElement("canvas");
		
		// assign attributes to canvas
		if(canvasID === undefined) canvasID = "canvas";
		c.id = canvasID;
		c.style.height = "100%";
		c.style.width = "100%";
		c.style.backgroundColor = "black";
		element.appendChild(c);
		
		// private instance variables
		this._canvas = c;
		this._ctx = this._canvas.getContext('2d');
		this._counter = 0; // yes, a counter is cheesy
		
		// 
		this._circleRotation = 0;
		this._circleRotationSpeed = .005;
		this._circleRotationDirection = 0.0;
	};
	
	CanvasViz1.MAX_VALUE = 255;
	CanvasViz1.NUM_CIRCLES = 32;
	CanvasViz1.MAX_CIRCLE_RADIUS = 100;
	
	CanvasViz1.prototype.update = function(dataList){
		// ctx.arc(x,y,radius,startAngle,endAngle, clockwise);
		// ctx.fillRect(x,y,width,height);
    	// ctx.clearRect(x,y,width,height);
    	// ctx.strokeRect(x,y,width,height);
    	
    	var i, step, stepPercent, circleRadius;
    	
		this._counter ++;
		//if(this._counter % 60 == 0) 
		this._ctx.clearRect(0,0,this._canvas.width,this._canvas.height);
		if(this._counter % 600 == 0){
			var num = Math.random();
			if(num < .33){
			 this._circleRotationDirection = -1;
			} else if(num < .67){
				 this._circleRotationDirection = 1;
			}  else {
				 this._circleRotationDirection = 0;
			}
		}

		
		// circles
		var centerX = this._canvas.width/2;
		var centerY = this._canvas.height/2;
		
		this._ctx.save();
		this._ctx.translate(centerX,centerY);
		step = Math.floor(dataList.length / CanvasViz1.NUM_CIRCLES);
		stepPercent = 1.0 / step;
		for (i = 0; i < CanvasViz1.NUM_CIRCLES; i ++) {
			
			var percent = dataList[i*step] / CanvasViz1.MAX_VALUE;
			var circleRadius = percent * CanvasViz1.MAX_CIRCLE_RADIUS;
			
			// red-ish circles
			this._ctx.beginPath();
			this._ctx.fillStyle= utils.makeColor(255, 111, 111, .34 - percent/3.0);
			this._ctx.arc(0, 0, circleRadius , 0, 2 * Math.PI, false);
			this._ctx.fill();
			this._ctx.closePath();
			
			// blue-ish circles, bigger, more transparent
			this._ctx.beginPath();
			this._ctx.fillStyle= utils.makeColor(0, 0, 255, .10 - percent/10.0 );
			this._ctx.arc(0, 0, circleRadius * 1.5, 0, 2 * Math.PI, false);
			this._ctx.fill();
			this._ctx.closePath();
			
			
			// yellow-ish circles, smaller
			this._ctx.save();
		//	this._ctx.translate(-centerX,-centerY);
		 this._ctx.setTransform(1, 0, 0, 1, 0, 0);
		 	this._ctx.translate(centerX,centerY);
		 	this._circleRotation += this._circleRotationSpeed;
			this._ctx.rotate(this._circleRotation * this._circleRotationDirection );
			this._ctx.scale(.75,1);
			this._ctx.beginPath();
			this._ctx.fillStyle= utils.makeColor(200, 200, 0, .5 - percent/5.0);
			this._ctx.arc(0, 0, circleRadius * .50, 0, 2 * Math.PI, false);
			this._ctx.fill();
			this._ctx.closePath();
			this._ctx.restore();
		}
	
		
		this._ctx.restore();
	};
	
	CanvasViz1.prototype.getCanvas = function(){
		return this._canvas;
	};
	
	
	return CanvasViz1;
	
}();