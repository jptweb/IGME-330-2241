window.DOMGraph = function(){
	"use strict";
	
	function DOMGraph(element, numBars){
		// private
		this._barsList = [];
		this._element = element;
		
		var barWidth = Math.floor((element.offsetWidth - (numBars * DOMGraph.BAR_GAP)) / numBars);
		var i, barElement;
		
		// Create new bars (which are <div>s)
		for (i=0;i< numBars;i++){
			barElement = document.createElement("div");
			barElement.className = "bar";
			barElement.style.width =  barWidth + "px";
			barElement.style.height =  DOMGraph.DEFAULT_BAR_HEIGHT + "px";
			barElement.style.marginLeft = DOMGraph.BAR_GAP + "px";
			barElement.style.left = i *    (barWidth + DOMGraph.BAR_GAP) + "px";
			barElement.style.top = (element.offsetHeight - DOMGraph.DEFAULT_BAR_HEIGHT) + "px";
			this._element.appendChild(barElement);
			this._barsList.push(barElement);
		}
		
	}
	
	DOMGraph.DEFAULT_BAR_HEIGHT = 5;
	DOMGraph.BAR_GAP = 4;
	DOMGraph.MAX_VALUE = 255;
	
	DOMGraph.prototype.update = function(dataList){
		var bar, i, step, maxHeight, barHeight;
		maxHeight = this._element.offsetHeight - 10;
		
		step = Math.floor(dataList.length / this._barsList.length);
		if (step < 1) step = 1;
		
		for (i=0; i< this._barsList.length;i++){
			var percent = dataList[i*step] / DOMGraph.MAX_VALUE;
			if (percent > 1) percent = 1;
			var barHeight = Math.floor(maxHeight * percent);
			if	(barHeight < 0 || barHeight === undefined) barHeight = DOMGraph.DEFAULT_BAR_HEIGHT;
			
			// update each bar's height
			bar = this._barsList[i];
			bar.style.top = (this._element.offsetHeight - barHeight) + "px";
			bar.style.height = barHeight + "px";
		//	percent = Math.round(percent * 100);
		//	bar.style.backgroundColor = "rgb(" + (100 - percent) + "%,70%," + (percent) + "%)";
		}
	};

	return DOMGraph;

}();