/*
	main.js is primarily responsible for hooking up the UI to the rest of the application 
	and setting up the main event loop
*/

// We will write the functions in this file in the traditional ES5 way
// In this instance, we feel the code is more readable if written this way
// If you want to re-write these as ES6 arrow functions, to be consistent with the other files, go ahead!
import * as audio from './audio';
import * as utils from './utils';
import * as canvas from './canvas';

const drawParams = {
  showGradient  :true,
  showBars      :true,
  showCircles   :true,
  showNoise     :false,
  showInvert    :false,
  showEmboss    :false
};
// 1 - here we are faking an enumeration
const DEFAULTS = Object.freeze({
	sound1  :  "media/New Adventure Theme.mp3"
});

function init(){
	console.log("init called");
	console.log(`Testing utils.getRandomColor() import: ${utils.getRandomColor()}`);
  audio.setupWebaudio(DEFAULTS.sound1);
	let canvasElement = document.querySelector("canvas"); // hookup <canvas> element
	setupUI(canvasElement);
  canvas.setupCanvas(canvasElement,audio.analyserNode);
  loop();
}

function setupUI(canvasElement){
  // A - hookup fullscreen button
  const fsButton = document.querySelector("#fsButton") as HTMLButtonElement;
  // add .onclick event to button
  fsButton.onclick = e => {
    console.log("goFullscreen() called");
    utils.goFullscreen(canvasElement);
  };
  const playButton = document.querySelector("#playButton") as HTMLElement;
	playButton.onclick = e => {
    console.log(`audioCtx.state before = ${audio.audioCtx.state}`);
    //check if context is in suspended state
    if(audio.audioCtx.state == "suspended") {
      audio.audioCtx.resume();
    }
    console.log(`audioCtx.state after = ${audio.audioCtx.state}`);

    const target = e.target as HTMLInputElement;
    if(target.dataset.playing == "no"){
      //if track is currently paused, play it
      audio.playCurrentSound();
      target.dataset.playing = "yes";//Our CSS will set the text to Pause
      //if track is playing, pause it
    }else{
      audio.pauseCurrentSound();
      target.dataset.playing = "no"; //CSS sets to play
    }
  };
  //C - hookup volume slider and label
  let volumeSlider = document.querySelector("#volumeSlider") as HTMLInputElement;
  let volumeLabel = document.querySelector("#volumeLabel") as HTMLSpanElement;
  //add .oninput event to slider
  volumeSlider.oninput = e => {
    //set the gain
    const target = e.target as HTMLInputElement;

    audio.setVolume(target.value);
    //update value of label to match value of slider
    volumeLabel.innerHTML = (Math.round((parseInt(target.value)/2 * 100))).toString();
  };

  //set value of label to match inital value of slider
  volumeSlider.dispatchEvent(new Event("input"));

  //D - hookup track <select>
  let trackSelect = document.querySelector("#trackSelect") as HTMLSelectElement;
  // add .onchange event to <select>
  trackSelect.onchange = e => {
    const target = e.target as HTMLInputElement;
    audio.loadSoundFile(target.value);
    //pause the current track if it is playing
    if(playButton.dataset.playing == "yes"){
      playButton.dispatchEvent(new MouseEvent("click"));
    }
  }

  let gradientCB = document.querySelector("#gradientCB") as HTMLInputElement;
  let barsCB = document.querySelector("#barsCB") as HTMLInputElement;
  let circlesCB = document.querySelector("#circlesCB") as HTMLInputElement;
  gradientCB.checked = true;
  gradientCB.onchange = e =>
  {
    drawParams.showGradient = gradientCB.checked;
  }
  barsCB.checked = true;
  barsCB.onchange = e =>
  {
    drawParams.showBars = barsCB.checked;
  }
  circlesCB.checked = true;
  circlesCB.onchange = e =>
  {
    drawParams.showCircles = circlesCB.checked;
  }
  const noiseCB = document.querySelector("#noiseCB") as HTMLInputElement;
  noiseCB.onchange = e =>
  {
    drawParams.showNoise = noiseCB.checked;
  }
  const invertCB = document.querySelector("#invertCB") as HTMLInputElement;
  invertCB.onchange = e =>
  {
    drawParams.showInvert = invertCB.checked;
  }
  const embossCB = document.querySelector("#embossCB") as HTMLInputElement;
  embossCB.onchange = e =>
  {
    drawParams.showEmboss = embossCB.checked;
  }
} // end setupUI


function loop(){
    requestAnimationFrame(loop);
    canvas.draw(drawParams);
}
export {init};