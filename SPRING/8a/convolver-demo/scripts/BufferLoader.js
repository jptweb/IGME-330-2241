// BufferLoader class borrowed from HTML5 rocks
// http://www.html5rocks.com/en/tutorials/webaudio/intro/js/buffer-loader.js
window.BufferLoader = function(){
	"use strict";
	
	function BufferLoader(context,urlList,callback){
		this.context=context;
		this.urlList=urlList;
		this.onload=callback;
		this.bufferList=new Array();
		this.loadCount=0;
	}
	
	BufferLoader.prototype.loadBuffer=function(url,index){
		var request=new XMLHttpRequest();
		request.open("GET",url,true);
		request.responseType="arraybuffer";
		var loader=this;
		request.onload=function(){
			loader.context.decodeAudioData(request.response,function(buffer){
				if(!buffer){
					alert('error decoding file data: '+url);
					return;
				}
				loader.bufferList[index]=buffer;
				if(++loader.loadCount==loader.urlList.length) loader.onload(loader.bufferList);
			},
			function(error){
				console.error('decodeAudioData error',error);
			});
		};
			
		request.onerror=function(){
			alert('BufferLoader: XHR error');
		}
		
		request.send();
	}
	
	BufferLoader.prototype.load=function(){
		for(var i=0;i<this.urlList.length;++i){
			this.loadBuffer(this.urlList[i],i);
		}
	}

	return BufferLoader;
}();