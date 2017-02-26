import {elemWithMeasure,clientWithMeasure} from '../someMeasure.js';
import {control} from '../control.js';
//import echarts from 'echarts';

class TrackEvents{

	constructor(trackedEl,type,config){
		/*
		*
		* @param trackedEls: Type String, an id of one HTMLELement,which you want to track the event
		* @param type:Type String ,"click" or "scroll"
		* @param config: Type object,like
			{
				hitType:'event',(必须)
				eventCategory:'Chart',(通常是用户与之互动的对象)（必须）
				eventAction:'Click',(互动类型)（必须）
				eventLabel:'linechart1',(用于对事件进行进一步分类说明)（非必须）
				eventValue:1(与事件相关的数值)（非必须）
			}
		*/
		if(!trackedEl){
			return;
		}else if(!(trackedEl instanceof HTMLElement)){
			trackedEl = document.getElementById(trackedEl);
		}
		this.trackedEl = trackedEl;

		config.eventCategory = control.testMode==1?control.interactive:control.video;

		if(type == "click"){
			this.trackClickEvent(trackedEl,config);
		}  else if(type == "video") {
			this.trackVideoclickEvent(trackedEl,config);
		}  else if(type == "scroll"){
			this.trackScrollEvent(trackedEl,config);
		}
		
	}

	trackClickEvent(trackedEl,config){
		trackedEl.addEventListener('click',function(){
			ga('send',config);
			console.log("tracked:Click");
		},false);
	}

	trackVideoclickEvent(trackedEl,config){
		trackedEl.addEventListener('click',function(){//因为在Chrome上object上无法触发click事件，只能用mousedown代替
			ga('send',config);
			console.log("tracked:Videoclick");
		},false);
		trackedEl.addEventListener('mousedown',function(){//因为在Chrome上object上无法触发click事件，只能用mousedown代替
			ga('send',config);
			console.log("tracked:Videoclick");
		},false);
		
	}
	
	trackScrollEvent(trackedEl,config){
		let recorded = 0;
		window.addEventListener('scroll',function(){
			//进行条件判断，如果元素左上角出现在视口中

			const elem = elemWithMeasure(trackedEl);//调用函数得到对象
			const client = clientWithMeasure;//直接使用对象
		
			/*以元素左上角为基准
			const elemX = elem.leftInView;
			const elemY = elem.topInView;
			*/

			/*以元素中心为基准*/
			const elemX = elem.leftInView+elem.width/2;
			const elemY = elem.topInView+elem.height/2;

	
			if(recorded == 0 && elemX > 0 && elemX < client.width &&
			   elemY > 0 && elemY < client.height){
			
				window.setTimeout(function(){
					if(recorded == 0 && elemX > 0 && elemX < client.width && 
						elemY > 0 && elemY < client.height){
					
						ga('send',config);
						console.log("tracked:Inview");

						recorded = 1;
					}
				
				},1000);//元素左上角要出现在视口中超过1s才算被看见
				

			}
		},false);
	}

	static init(){
		const trackedEls = new Array();
		const eventCategory = control.testMode==1?control.interactive:control.video;
		if(control.testMode == 1){//实验1
		   //以传统click方式监听互动行为
			trackedEls.push(new TrackEvents(
				"line1","click",{
					hitType:'event',
					eventAction:'Click',
					eventLabel:'line1chart'
				}
			));
			trackedEls.push(new TrackEvents(
				"line2","click",{
					hitType:'event',
					eventAction:'Click',
					eventLabel:'line2chart'
				}
			));
			trackedEls.push(new TrackEvents(
				"bar2","click",{
					hitType:'event',
					eventAction:'Click',
					eventLabel:'bar2chart'
				}
			));
			trackedEls.push(new TrackEvents(
				"map1","click",{
					hitType:'event',
					eventAction:'Click',
					eventLabel:'map1chart'
				}
			));
			trackedEls.push(new TrackEvents(
				"table1","click",{
					hitType:'event',
					eventAction:'Click',
					eventLabel:'table1'
				}
			));
		} else if(control.testMode == 2){
			if(control.video == "atStart"){
				trackedEls.push(new TrackEvents(
					"videoAtStart","video",{
						hitType:'event',
						eventAction:'Videoclick',
						eventLabel:'videoAtStart'
					}
				));
			
			} else if(control.video == "atEnd"){
				trackedEls.push(new TrackEvents(
					"videoAtEnd","video",{
						hitType:'event',
						eventAction:'Videoclick',
						eventLabel:'videoAtEnd'
					}
				));
			
			}
		}
	

		///统计各元素被看到的次数
		trackedEls.push(new TrackEvents(
			"titlePart","scroll",{
				hitType:'event',
				eventAction:'Inview',
				eventLabel:'00-titlepart',
			}
		));
		trackedEls.push(new TrackEvents(
			"vsAtStart","scroll",{
				hitType:'event',
				eventAction:'Inview',
				eventLabel:'01-videoAtStart',
			}
		));
		trackedEls.push(new TrackEvents(
			"pureText1","scroll",{
				hitType:'event',
				eventAction:'Inview',
				eventLabel:'02-pureText1',
			}
		));
		trackedEls.push(new TrackEvents(
			"textAroundPic","scroll",{
				hitType:'event',
				eventAction:'Inview',
				eventLabel:'03-textAroundPic',
			}
		));
		trackedEls.push(new TrackEvents(
			"lineGraph1","scroll",{
				hitType:'event',
				eventAction:'Inview',
				eventLabel:'04-lineGraph1',
			}
		));
		trackedEls.push(new TrackEvents(
			"lineGraph2","scroll",{
				hitType:'event',
				//eventCategory:control.interactive,
				eventAction:'Inview',
				eventLabel:'05-lineGraph2',
			}
		));
		trackedEls.push(new TrackEvents(
			"pureText2","scroll",{
				hitType:'event',
				eventAction:'Inview',
				eventLabel:'06-pureText2',
			}
		));
		trackedEls.push(new TrackEvents(
			"barGraph2","scroll",{
				hitType:'event',
				eventAction:'Inview',
				eventLabel:'07-barGraph2',
			}
		));
		trackedEls.push(new TrackEvents(
			"mapGraph1","scroll",{
				hitType:'event',
				eventAction:'Inview',
				eventLabel:'08-mapGraph1',
			}
		));
		trackedEls.push(new TrackEvents(
			"pureText3","scroll",{
				hitType:'event',
				eventAction:'Inview',
				eventLabel:'09-pureText3',
			}
		));
		trackedEls.push(new TrackEvents(
			"tableArea1","scroll",{
				hitType:'event',
				eventAction:'Inview',
				eventLabel:'10-tableArea1',
			}
		));
		trackedEls.push(new TrackEvents(
			"pureText4","scroll",{
				hitType:'event',
				eventAction:'Inview',
				eventLabel:'11-pureText4',
			}
		));
		trackedEls.push(new TrackEvents(
			"vsAtEnd","scroll",{
				hitType:'event',
				eventAction:'Inview',
				eventLabel:'12-videoAtEnd',
			}
		));
		trackedEls.push(new TrackEvents(
			"footerPart","scroll",{
				hitType:'event',
				eventAction:'Inview',
				eventLabel:'13-footerPart',
			}
		));
		console.log(eventCategory);
		return trackedEls;
	}
}

export default TrackEvents;