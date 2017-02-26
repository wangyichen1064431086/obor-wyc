import {opts} from '../controlOpts.js';


const data=[//共65国
			//东盟10国 + 蒙古
			{name:'新加坡',value:'37.3'},
			{name:'马来西亚',value:'64.5'},
			{name:'印度尼西亚',value:'73.7'},
			{name:'缅甸',value: '3'}, 
			{name:'泰国',value:'11.6'},
			{name:'老挝',value:'0'},
			{name:'柬埔寨',value:'19.1'},
			{name: '越南',value: '0'}, 
			{name:'文莱',value:'2'},
			{name:'菲律宾',value:'10'},
			{name:'蒙古',value:'0'},

			//南亚8国
			{name:'印度',value:'36.1'},
			{name:'巴基斯坦',value:'143.2'},
			{name:'孟加拉国',value:'37.7'},
			{name:'阿富汗',value:'0'},
			{name: '斯里兰卡',value: '37.1'}, 
			{name: '马尔代夫',value: '0'}, 
			{name:'尼泊尔',value:'17.4'},
			{name:'不丹',value:'0'},

			//中亚5国
			{name:'哈萨克斯坦',value:'38'},
			{name: "乌兹别克斯坦",value: "4.4"}, 
			{name: "土库曼斯坦",value: "6"}, 
			{name: "塔吉克斯坦", value: "2.5"}, 
			{name:'吉尔吉斯斯坦',value:'38'},

			//独联体7国
			{name:'俄罗斯',value:'103'},
			{name: "乌克兰",value: "0"},
			{name: "白俄罗斯",value: '0'},
			{name: "格鲁吉亚",value: '0'},
			{name: "阿塞拜疆",value: '0'},
			{name: "亚美尼亚",value: '0'},
			{name: "摩尔多瓦",value: '0'},

			//西亚18国
			{name:'伊朗',value:'6.9'},
			{name:'伊拉克',value:'28.6'},
			{name: "土耳其 ",value: "4.8"},
			{name: "叙利亚",value: "0"}, 
			{name:'约旦',value:'6.2'},
			{name: "黎巴嫩",value: "0"}, 
			{name:'以色列',value:'54.7'},
			{name: "巴勒斯坦",value: "0"}, 
			{name: "沙特阿拉伯",value: "47.2"}, 
			{name: "也门",value: "5.1"},
			{name: "阿曼",value: "3"}, 
			{name: "阿联酋",value: "13.8"},
			{name: "卡塔尔",value: "1.7"}, 
			{name:'科威特',value:'4.6'},
			{name:'巴林',value:'0'},
			{name:'希腊',value:'0'},
			{name:'塞浦路斯',value:'0'},
			{name:'埃及',value:'36.9'},//西奈半岛

			//中东欧16国
			{name: "波兰",value: "3.9"},
			{name: "立陶宛",value: "0"},
			{name: "爱沙尼亚",value: "0"},
			{name: "拉脱维亚",value: "0"},
			{name: "捷克",value: "0"},
			{name: "斯诺伐克",value: "0"},
			{name: "匈牙利",value: "0"},
			{name: "斯洛文尼亚",value: ""},
			{name:'克罗地亚',value:'1.3'},
			{name: "波黑",value: "0"},
			{name:'黑山',value:'11.2'},
			{name: "塞尔维亚", value: "19.2"}, 
			{name: "阿尔巴尼亚",value: "0"},
			{name: "罗马尼亚",value: "5.4"}, 
			{name: "保加利亚",value: "0"},		
			{name:'马其顿',value:'4'},
		];

const geoCoordMap = {
	        '俄罗斯':[119.9,63.3],
			'哈萨克斯坦':[69.8,48.3],
			'巴基斯坦':[70.2,30.5],
			'孟加拉国':[90.017658,23.819976],
			'尼泊尔':[83.524562,28.473021],
			'印度':[78.851649,20.709355],
			'泰国':[101.296351,16.073827],
			'柬埔寨':[104.275563,12.877402],
			'新加坡':[103.853575,1.436461],
			'马来西亚':[109.887889,3.656815],
			'菲律宾':[122.913175,11.362623],
			'印度尼西亚':[120.116786,-2.637429],
			'文莱':[114.449268,4.491369],
			'克罗地亚':[15.839757,45.587474],
			'埃及':[33.52071,29.500215],
			'伊朗':[55.338754,32.279197],
			'伊拉克':[42.828592,33.150186],
			'以色列':[34.954549,31.777653],
			'约旦':[36.16877,30.956764],
			'科威特':[47.648684,29.422477],
			'吉尔吉斯斯坦':[74.69271,41.82567],
			'老挝':[104.790688,18.155548],
			'马其顿':[21.46933,41.5913],
			'蒙古':[103.245315,47.391657],
			'黑山':[19.097229,43.022776],
			"缅甸":[95.812807,21.222123],
			"阿曼":[56.516181,20.807509],
			"波兰":[19.868765,52.333245],
			"卡塔尔":[51.088978,25.3843],
			"罗马尼亚":[24.136938,46.178526],
			"沙特阿拉伯":[44.116403,24.394168], 
			"塞尔维亚":[21.009398,44.227838],
			"斯里兰卡":[80.397022,7.921631],
			"叙利亚":[39.185927,35.334854],
			"塔吉克斯坦":[72.153883,38.292747],
			"土耳其 ":[35.469673,39.014079],
			"土库曼斯坦":[58.173087,39.46943],
			"阿联酋":[54.333514,23.595508],
			"乌克兰":[31.275089,49.448635],
			"乌兹别克斯坦":[62.734467,41.577487],
			"越南":[105.305812,19.347374],
			"也门":[48.862905,16.316889]
};

const convertData = function (data) {
    const res = [];
    for (let i = 0; i < data.length; i++) {
        const geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
    /*最后convertData数据形式为：
    [
		{name:'Russia',value:[经度值，纬度值，数据值]}
    ]
	*/
};

const map1Option ={
	title:{
		text:'2013年至今，\n中国对一带一路国家的投资概况',
		subtext:opts.mapSubtext,
		subtextStyle:{
			color:'#333',
			fontSize:14
		},
		left:'center',
		top:'top'
	},
	// 如要实现地图上区域数据可视化：应使用visualMap组件
	/*
	visualMap:{
		type:'continuous',
		min:0,
		max:150,
		text:['High','Low'],
		realtime:false,
		calculable:true,
		inRange:{
			color:['#fff1e0','#9E2F50'],
		}
	},
	*/
	// 如要实现地图上点数据或线数据可视化：在 ECharts 3 中不再建议在地图类型的图表使用series中的 markLine 和 markPoint。应使用在地理坐标系组件geo上的散点图和线图。
	geo:{
		map:'world',
		center:[72.168543,35.30823],
		zoom:2,
		roam:opts.geoRoam,
		scaleLimit:{
			min:2,
			max:5
		},
		top:100,
		label:{
			emphasis:{
				show:false
			}
		},
		itemStyle:{
			normal:{
				areaColor:'#fff',
				borderColor:'#666'
			},
			emphasis:{
				areaColor:'#fff',
				borderColor:'#666'
			}

		}
	},
	

	series:[
		/*
		{
			name:'2013年至今中国对一带一路国家的投资概况',
			type:'map',
			map:'world',
			roam:'scale',
			data:data
		},
		*/
		{
			name:'2013年至今中国对一带一路国家的投资概况',
			type:'scatter',//散点图
			coordinateSystem:'geo',//地图坐标系
			symbol:'circle',
			label:opts.serieslabelMap,
			hoverAnimation:opts.hoverAni,
			data:convertData(data),
			symbolSize: function(val){
				return 5* Math.sqrt(val[2]);
			},

			itemStyle:{
				normal:opts.itemstyle5N,
				emphasis:opts.itemstyle5E
			}
		}	
	],
	
	tooltip:{
		show:opts.tooltipShow,
		trigger:'item',
		confine:true,
		formatter:function(data){
			return '投资金额<br>'+data.name + ':' +data.value[2]+'亿';
		}
	},
	
}

export { map1Option };