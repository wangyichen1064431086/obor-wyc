import {control} from './control.js';

function controlVideo(){
	const videoAtStart = document.getElementById("vsAtStart");
	const videoAtEnd = document.getElementById("vsAtEnd");
	if(control.testMode == 2 && control.video == "atStart"){
		videoAtStart.style.display = "block";
		videoAtEnd.style.display = "none";
	} else if(control.testMode == 2 && control.video == "no"){
		videoAtStart.style.display = "none";
		videoAtEnd.style.display = "none";
	} else {
		videoAtStart.style.display = "none";
		videoAtEnd.style.display = "block";
	}
}

export default controlVideo;
