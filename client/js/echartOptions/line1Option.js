import {opts} from '../controlOpts.js';

const line1Option = {
	title:{
		text:'和GDP放缓相比，中国出口更显疲弱',
		subtext:opts.interactiveReminder,
		subtextStyle:{
			color:'#333',
			fontSize:14
		},
		left:'center',
		top:'top'
	},

	legend:{
		selectedMode: opts.legendSelect,
		orient:'vertical',
		data:['出口同比增长率','GDP同比增长率'],
		right:'5%',
		top:100
	},

	xAxis:{
		type:'category',
		name:'季度',
		nameGap:5,
		position:'bottom',
		axisLabel:{
			rotate:45,
			interval:1
		},
		axisLine:{
			onZero:false
		},
		axisTick:{
			alignWithLabel:true,
			interval:0
		},
		data:['2010 Q1','2010 Q2','2010 Q3','2010 Q4','2011 Q1','2011 Q2','2011 Q3','2011 Q4','2012 Q1','2012 Q2','2012 Q3','2012 Q4','2013 Q1','2013 Q2','2013 Q3','2013 Q4','2014 Q1','2014 Q2','2014 Q3','2014 Q4','2015 Q1','2015 Q2']
	},
	yAxis:{
		type:'value',
		name:'同比\n增长率 %',
		nameGap:10,
		min:-10,
		max:45,
		interval:5,
	},
	tooltip:{
		show:opts.tooltipShow,
		trigger:'item',
		triggerOn:'mousemove',
		position:'top',
		formatter:'{b} <br/>{c}%',//formatter回调函数方式待研究,默认的tooltip.formatter写法待研究

		backgroundColor:'rgba(50,50,50,0.5)',
		
	},
	series:[
		{
			type:'line',
			name:'出口同比增长率',
			symbol:'circle',
			symbolSize:8,
			showAllSymbol:true,//标志图形默认会随坐标轴标签间隔隐藏策略而隐藏，如需全部显示，则可将showAllSymbol设为true
			label:opts.serieslabel,

			hoverAnimation:opts.hoverAni,

			itemStyle:{//折线拐点标志的样式
				normal:opts.itemstyle1N,
				emphasis:opts.itemstyle1E
			},
			lineStyle:{
				normal:{
					color:'#9e2f50',
					width:2,
					type:'solid'
				}
			},
			data:[28.77,40.92,32.12,24.87,26.4,22.05,20.58,14.22,8.1,10.47,4.45,9.32,18.34,3.74,3.89,7.7,-3.45,4.89,13.02,8.48,4.6,-2.19]
		},
		{
			type:'line',
			name:'GDP同比增长率',
			symbol:'diamond',
			symbolSize:8,
			showAllSymbol:true,
			label:opts.serieslabel,
			hoverAnimation:opts.hoverAni,

			itemStyle:{//折线拐点标志的样式
				normal:opts.itemstyle2N,
				emphasis:opts.itemstyle2E
			},
			lineStyle:{
				normal:{
					color:'#4781aa',
					width:2,
					type:'solid'
				}
			},
			data:[11.9,10.3,9.6,9.8,9.7,9.5,9.1,8.9,8.1,7.6,7.4,7.9,7.7,7.6,7.7,7.7,7.4,7.5,7.3,7.4,7,7]
		}
	]
};

export { line1Option };
