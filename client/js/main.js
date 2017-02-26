import echarts from 'echarts';
import $ from 'jquery';

import { bar1Option } from './echartOptions/bar1Option.js';//使用这种办法也必须加上前缀./
import { line1Option } from './echartOptions/line1Option.js';
import { line2Option } from './echartOptions/line2Option.js';
import { bar2Option } from './echartOptions/bar2Option.js';
import { map1Option } from './echartOptions/map1Option.js';

const optionArr = [];
import { line_inline1Option } from './echartOptions/line_inline1Option.js';
optionArr.push(line_inline1Option);
import { line_inline2Option } from './echartOptions/line_inline2Option.js';
optionArr.push(line_inline2Option);
import { line_inline3Option } from './echartOptions/line_inline3Option.js';
optionArr.push(line_inline3Option);
import { line_inline4Option } from './echartOptions/line_inline4Option.js';
optionArr.push(line_inline4Option);
import { line_inline5Option } from './echartOptions/line_inline5Option.js';
optionArr.push(line_inline5Option);
import { line_inline6Option } from './echartOptions/line_inline6Option.js';
optionArr.push(line_inline6Option);
import { line_inline7Option } from './echartOptions/line_inline7Option.js';
optionArr.push(line_inline7Option);
import { line_inline8Option } from './echartOptions/line_inline8Option.js';
optionArr.push(line_inline8Option);
import { line_inline9Option } from './echartOptions/line_inline9Option.js';
optionArr.push(line_inline9Option);
import { line_inline10Option } from './echartOptions/line_inline10Option.js';
optionArr.push(line_inline10Option);

import controlVideo from './controlVideo.js';
import TrackOnload from './addGa/trackOnload.js';
import TrackEvents from './addGa/trackEvents.js';



const line1= echarts.init(document.getElementById('line1'));

line1.setOption(line1Option);


const line2 = echarts.init(document.getElementById('line2'));
line2.setOption(line2Option);


const bar2 = echarts.init(document.getElementById('bar2'));
bar2.setOption(bar2Option);


$.get('../mapSource/world.json', function (worldJson) {//这个jQuery的get方法只能针对obor.html目录设置路径
    echarts.registerMap('world', worldJson);
    const map1 = echarts.init(document.getElementById('map1'));
    map1.setOption(map1Option);
});

for(let i=1,n=10;i<=n;i++){
	const elem = 'inlineLine'+i;
	const chart = echarts.init(document.getElementById(elem));
	const option = optionArr[i-1];
	chart.setOption(option);
}
controlVideo();

TrackOnload.init();
TrackEvents.init();
