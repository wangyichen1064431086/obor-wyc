import {control} from '../control.js';

class TrackOnload {
	constructor(pagecategory){
		window.onload=function(){
			console.log('onload');
			ga('send','event',pagecategory,'onload');
		}
	}

	static init(){
		const pageCategory = control.testMode==1?control.interactive:control.video;

		new TrackOnload(pageCategory);
	}
}

export default TrackOnload;