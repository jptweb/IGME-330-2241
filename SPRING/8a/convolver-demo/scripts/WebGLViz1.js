window.WebGLViz1 = function(){
	"use strict";
	
	function WebGLViz1(element, canvasID){
		// create a new canvas
		var c = document.createElement("canvas");
		
		// assign attributes to canvas
		if(canvasID === undefined) canvasID = "canvas";
		c.id = canvasID;
		c.style.height = "100%";
		c.style.width = "100%";
		c.style.backgroundColor = "red";
		element.appendChild(c);
		
		// private instance variables
		this._canvas = c;
		this._gl = initGL(this._canvas);
		this._shaderProgram = initShaders.call(this);
		this._stardata = null; // new Float32Array()
		this._starBuffer = initBuffers.call(this);
		
		// start drawing
		this._gl.clearColor(0.0, 0.0, 0.3, 1.0);
		this.update();
	};
	
	// public methods
	WebGLViz1.prototype.update = function(dataList){
		drawScene.call(this,dataList);
	};
	
	WebGLViz1.prototype.getCanvas = function(){
		return this._canvas;
	};
	
	WebGLViz1.prototype.getGL = function(){
		return this._gl;
	};
	
	
	
	// private methods
	// http://graphic-sim.com/webgl_lesson_03.html
	// http://stackoverflow.com/questions/5497722/how-can-i-animate-an-object-in-webgl-modify-specific-vertices-not-full-transfor
	function drawScene(dataList){
		var gl = this._gl;
		gl.clear(gl.COLOR_BUFFER_BIT);
		gl.useProgram(this._shaderProgram);
		gl.bindBuffer(gl.ARRAY_BUFFER, this._starBuffer);
		
		// move stars
		var i, percent, step;
		var MAX_VALUE = 255; // audio data range is 0-255
		
		if (dataList !== undefined){
			step = Math.floor(dataList.length / this._stardata.length);
			if (step < 1) step = 1;
			
			for (i=0; i< this._stardata.length/2;i++){
				percent = dataList[i*step] / MAX_VALUE;
				if (percent > 1) percent = 1;
				if (percent < 0) percent = 0;
				var newY = 2 * percent - 1; //(+1 to -1 inclusive)
			
				// update each star's Y
				this._stardata[i * 2 + 1] = newY;
				
			}
		}
		
		//
		gl.bufferSubData(gl.ARRAY_BUFFER, 0, this._stardata);
		gl.vertexAttribPointer(this._shaderProgram.vertexPositionAttribute, this._starBuffer.itemSize, gl.FLOAT, false, 0, 0);
		gl.drawArrays(gl.TRIANGLE_STRIP, 0, this._starBuffer.numItems);
	};
	
	
	
	function initGL(canvas) {
		 var gl;
        try {
            gl = canvas.getContext("experimental-webgl");
            gl.viewportWidth = canvas.width;
            gl.viewportHeight = canvas.height;
            return gl;
        } catch (e) {
        }
        if (!gl) {
            alert("Could not initialise WebGL, sorry :-(");
        }
    }
    
    
    function initShaders() {
    		var gl = this._gl;
			var shaderProgram = createShader(gl,"shader-vs", "shader-fs");
	
			shaderProgram.vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "position");
			gl.enableVertexAttribArray(shaderProgram.vertexPositionAttribute);
			
			return shaderProgram;
		}

    
    function initBuffers() {
		var gl = this._gl;
        var starBuffer = gl.createBuffer();
        var numStars = 256;
        gl.bindBuffer(gl.ARRAY_BUFFER, starBuffer);
       	this._stardata = createStars(numStars);
        gl.bufferData(gl.ARRAY_BUFFER, this._stardata, gl.DYNAMIC_DRAW);
        starBuffer.itemSize = 2;
        starBuffer.numItems = numStars;

		return starBuffer;
    }
    
    // Helper Functions
     function createShader(gl,vsname, fsname) {
        var vertexShader = getShader(gl, vsname);
        var fragmentShader = getShader(gl, fsname);
        var newShaderProgram = gl.createProgram();
        gl.attachShader(newShaderProgram, vertexShader);
        gl.attachShader(newShaderProgram, fragmentShader);
        gl.linkProgram(newShaderProgram);

        if (!gl.getProgramParameter(newShaderProgram, gl.LINK_STATUS)) {
            alert("Could not initialise shaders");
        }

        gl.useProgram(newShaderProgram);

        return newShaderProgram;
    	}
    	
    function getShader(gl, id) {
     	var shaderScript, shader, str = "", textNode;
        shaderScript = document.getElementById(id);
        if (!shaderScript) {
            return null;
        }

       textNode = shaderScript.firstChild;
        while (textNode) {
            if (textNode.nodeType == 3) {
                str += textNode.textContent;
            }
            textNode = textNode.nextSibling;
        }

        if (shaderScript.type == "x-shader/x-fragment") {
            shader = gl.createShader(gl.FRAGMENT_SHADER);
        } else if (shaderScript.type == "x-shader/x-vertex") {
            shader = gl.createShader(gl.VERTEX_SHADER);
        } else {
            return null;
        }

        gl.shaderSource(shader, str);
        gl.compileShader(shader);

        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            alert(gl.getShaderInfoLog(shader));
            return null;
        }

        return shader;
    }
    
    
    /////// TEST  ///////
     // Create the star field. Returns a Float32Array with
    // 2D star coordinates in [-1, 1]
    function createStars(numStars) {
        var starPositions = new Float32Array(numStars * 2);
        var step = 2.0/numStars;
        var starY = -1.0 + step * numStars/20;
        for (var i=0; i<numStars; i++) {
        	var starX = -1.0 + i * step;
            starPositions[i*2] = starX;
            starPositions[i*2+1] = starY;
        }
        return starPositions;
    }
    
    
    /////////////////////
    	
    	
	
	return WebGLViz1;
}();