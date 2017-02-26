import {opts} from '../controlOpts.js';

const line2Option = {
	title:{
		text:'其次，中国对外投资也同时放缓',
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
		data:['中国非金融类对外直接投资同比增长率'],
		right:'5%',
		top:100
	},

	xAxis:{
		type:'category',
		name:'年份',
		nameGap:5,
		position:'bottom',
		axisLabel:{
			rotate:45,
			interval:0
		},
		axisLine:{
			onZero:true
		},
		axisTick:{
			alignWithLabel:true,
			interval:0
		},
		data:['2005','2006','2007','2008','2009','2010','2011','2012','2013','2014']
	},
	yAxis:{
		type:'value',
		name:'同比\n增长率 %',
		nameGap:10,
		min:0,
		max:140,
		interval:20
	},
	tooltip:{
		show:opts.tooltipShow,
		trigger:'item',
		triggerOn:'mousemove',
		position:'top',
		formatter:'{b} <br/>{c}%',
		backgroundColor:'rgba(50,50,50,0.5)',
	},
	series:[
		{
			type:'line',
			name:'中国非金融类对外直接投资同比增长率',
			symbol:'circle',
			symbolSize:8,
			showAllSymbol:true,
			label:opts.serieslabel,
			hoverAnimation:opts.hoverAni,

			itemStyle:{
				normal:opts.itemstyle1N,
				emphasis:opts.itemstyle1E
				/*
				normal:{
					color:'#9e2f50',
					borderColor:'rgba(158,47,80,0)',
					borderWidth:10
				},
				emphasis:{
					color:'#9e2f50',
					borderColor:'rgba(158,47,80,0.5)',
					borderWidth:10,
					borderType:'solid'
				}
				*/
			},
			lineStyle:{
				normal:{
					color:'#9e2f50',
					width:2,
					type:'solid'
				}
			},
			data:[123,31.6,6.2,63.6,6.5,36.3,1.8,28.6,16.8,14.1]
		}
	]
};

export { line2Option };