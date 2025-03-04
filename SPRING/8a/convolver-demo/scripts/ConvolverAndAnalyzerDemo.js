window.ConvolverAndAnalyzerDemo = function(){
	"use strict";
	function ConvolverAndAnalyzerDemo(soundData,callback){
		// private
		this._isPlaying = false;
		this._soundData = soundData;
		this._audioCtx =  new AudioContext();
		this._audioNodes = {};
		this._impulseBuffers = [];
		this._sourceBuffer = null;
		
		var self = this;
		var bufferLoader = new BufferLoader2(this._audioCtx,this._soundData,onLoaded);
		
		function onLoaded(buffers){
			self._sourceBuffer = buffers[0]; // first sound is our "Convolutee" that we will be distorting
			self._impulseBuffers = buffers.splice(1); // rest of sounds are impulse response sounds
			callback.call(this); // or just callback();
		}
		
		// load sounds
		bufferLoader.load();
		
	}
	
	ConvolverAndAnalyzerDemo.prototype.isPlaying = function(){
		return this._isPlaying;
	};
	
	ConvolverAndAnalyzerDemo.prototype.getAnalyzer = function(){
		return this._audioNodes.analyzer;
	};
	
	
	ConvolverAndAnalyzerDemo.prototype.play = function(index){
		this.stop();
		this._isPlaying = true;
		
		// create Audio Nodes
		this._audioNodes.source = this._audioCtx.createBufferSource();
		this._audioNodes.source.buffer = this._sourceBuffer; 
		this._audioNodes.source.loop = true;
		this._audioNodes.analyzer = this._audioCtx.createAnalyser();
		
		if(index == -1){ // no impulse chosen
			// Hook up Nodes
			this._audioNodes.source.connect(this._audioNodes.analyzer);
			this._audioNodes.analyzer.connect(this._audioCtx.destination);
			
		} else { // impulse chosen
			// create Convolver
			this._audioNodes.convolver = this._audioCtx.createConvolver();
			this._audioNodes.convolver.buffer = this._impulseBuffers[index];
			
			// Hook up Nodes
			this._audioNodes.source.connect(this._audioNodes.convolver);
			this._audioNodes.convolver.connect(this._audioNodes.analyzer);
			this._audioNodes.analyzer.connect(this._audioCtx.destination);
		}
		this._audioNodes.source.start(0);
	}
	
	ConvolverAndAnalyzerDemo.prototype.stop = function(){
		if (this._isPlaying) this._audioNodes.source.stop(0);
		this._isPlaying = false;
	}
	
	ConvolverAndAnalyzerDemo.prototype.setSource = function(arrayBuffer,index){
		var self = this;
		this.stop();
		this._isPlaying = false;
	 	this._audioCtx.decodeAudioData(arrayBuffer, function(buffer) {
				self._sourceBuffer = buffer;
				self.play(index);
		});
				
	 }

	return ConvolverAndAnalyzerDemo;
}();