window.ConvolverDemo = function(){
	"use strict";
	function ConvolverDemo(soundData,callback){
		// private
		this._isPlaying = false;
		this._soundData = soundData;
		this._audioCtx =  new webkitAudioContext();
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
	
	ConvolverDemo.prototype.isPlaying = function(){
		return this._isPlaying;
	};
	
	
	ConvolverDemo.prototype.play = function(index){
		this.stop();
		this._isPlaying = true;
		this._audioNodes.source = this._audioCtx.createBufferSource();
		this._audioNodes.source.buffer = this._sourceBuffer; 
		
		if(index == -1){
			this._audioNodes.source.connect(this._audioCtx.destination);
		} else {
			this._audioNodes.convolver = this._audioCtx.createConvolver();
			this._audioNodes.convolver.buffer = this._impulseBuffers[index];
			this._audioNodes.source.connect(this._audioNodes.convolver);
			this._audioNodes.convolver.connect(this._audioCtx.destination);
		}
		this._audioNodes.source.noteOn(0);
	}
	
	ConvolverDemo.prototype.stop = function(){
		if (this._isPlaying) this._audioNodes.source.noteOff(0);
		this._isPlaying = false;
	}

	return ConvolverDemo;
}();