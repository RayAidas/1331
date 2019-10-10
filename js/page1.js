	var option_map = {
		title: {
			text: '山西高校地图',
			left: 74,
			top:'3%',
			textStyle: {
				color: '#fff',
				fontSize: 15
			},
		},
		color:'#0ce5ff',
		// toolbox: {
		// 	show: true,
		// 	feature: {
		// 		dataView: {
		// 			readOnly: false
		// 		},
  //                   // restore: {},
  //                   // saveAsImage: {}
  //               },
  //               iconStyle:{
  //               	normal:{
  //             borderColor:'#fff',//设置颜色
  //         }
  //     }
  // },
	legend: {
		orient: 'vertical',
		right:30,
		bottom:40,
		data: ['高校位置'],
		textStyle: {
			color: '#fff'
		}
	},
	geo: {
		map: '山西',
		label: {
			emphasis: {
				show: false
			}
		},
		roam: true,
		zoom: 1,
		itemStyle: {
			normal: {
				areaColor: '#3c396e',
				borderColor: '#3c396e'
			},
			emphasis: {
				areaColor: '#100b60'
			}
		},
		regions: [{
			name: '太原市',
			itemStyle: {
				normal: {
					areaColor: '#3a527a',
					color: '#3a527a'
				}
			}
		}, {
			name: '大同市',
			itemStyle: {
				normal: {
					areaColor: '#3c396e',
					color: '#3c396e'
				}
			}
		}, {
			name: '阳泉市',
			itemStyle: {
				normal: {
					areaColor: '#3c396e',
					color: '#3c396e'
				}
			}
		}, {
			name: '长治市',
			itemStyle: {
				normal: {
					areaColor: '#3c396e',
					color: '#3c396e'
				}
			}
		}, {
			name: '晋城市',
			itemStyle: {
				normal: {
					areaColor: '#415d8b',
					color: '#415d8b'
				}
			}
		}, {
			name: '朔州市',
			itemStyle: {
				normal: {
					areaColor: '#3a527a',
					color: '#3a527a'
				}
			}
		}, {
			name: '晋中市',
			itemStyle: {
				normal: {
					areaColor: '#415d8b',
					color: '#415d8b'
				}
			}
		}, {
			name: '运城市',
			itemStyle: {
				normal: {
					areaColor: '#3c396e',
					color: '#3c396e'
				}
			}
		}, {
			name: '忻州市',
			itemStyle: {
				normal: {
					areaColor: '#415d8b',
					color: '#415d8b'
				}
			}
		}, {
			name: '临汾市',
			itemStyle: {
				normal: {
					areaColor: '#3a527a',
					color: '#3a527a'
				}
			}
		}, {
			name: '吕梁市',
			itemStyle: {
				normal: {
					areaColor: '#3c396e',
					color: '#3c396e'
				}
			}
		}]

	},
	tooltip: {
		trigger: 'item',
		position: 'right',
		confine: false,
		enterable: true,
		formatter: function(params, ticket, callback) {
			//			params.marker = '<span style="display:block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:#dd6b66;word-wrap: break-word;word-break: break-all;white-space: pre-wrap !important;"></span>'
			//			console.log(params.marker);
			var part = params.value[2].split("/");
			//			console.log(part.length);
			var res = "";
			for(var i = 0; i < part.length; i++) {
				res = res + part[i] + '<br>';
			}
			return res;
		}
		//		formatter: function(params, ticket, callback) {
		//
		//			return "";
		//		}
		//		formatter: function(val) {
		//			return val.split(" ").join("\n");
		//		}

	},
	//数据			
	series: [{
		name: '高校位置',
		type: 'scatter',
		coordinateSystem: 'geo',

		label: {
			normal: {
				show: false
			},
			emphasis: {
				show: false
			}
		},
		itemStyle: {

			emphasis: {
				borderColor: '#fff',
				borderWidth: 1
			}
		},
		data: [{
			name: "太原理工大学",
			value: [112.52293, 37.8603, '太原理工大学是一座有着近115年悠/久办学历史的世纪学府，由原太原/工业大学和原山西矿业学院合并组/建而成。历经百余年传承发展，学/校业已建设成为以工为主、理工文/法经管哲体多学科协调发展的综合/性大学。']
		}, {
			name: "山西大学",
			value: [112.58679, 37.80079, '山西大学是中国最早的三所国立大/学之一，与京师大学堂、北洋大学/堂一起，开创了中国近代高等教育/发展的新纪元，形成了“中西会通、/求真至善、登崇俊良、自强报国”的/光荣传统，是三晋大地百年文化科/教的重镇。']
		}, {
			name: "中北大学",
			value: [112.44299, 38.01135, '中北大学是一所由山西省人民政府/与国家国防科技工业局共建、山西/省人民政府管理的多科性教学研究/型大学。学校的前身是1941年八路/军总司令部在太行抗日根据地创/办的我党我军第一所兵工学校——/太行工业学校，2004年6月经教/育部批准更名为中北大学。']
		}, {
			name: "山西财经大学",
			value: [112.58754, 37.79049, '山西财经大学始建于1951年，是新/中国成立后建校最早的高等财经类/院校之一，该校60余年来学校秉承/“修德立信、博学求真”的校训，弘/扬“明礼诚信、艰苦创业”晋商精神，/已经发展成为一所以经济学、管理/学为特色和优势的多科性高校。']
		}, {
			name: "山西师范大学",
			value: [111.50678, 36.08077, '山西师范大学创建于1958年，是培/养山西省基础教育师资的重要基地/。建校近60年来，学校不断上层/次、上水平，现已发展成为一所培/养体系完备、办学特色鲜明的省属/重点师范大学。']
		}, {
			name: "山西农业大学",
			value: [112.58224, 37.42388, '山西农业大学是山西省唯一的农业/高校，建国前山西省两所本科高校/之一，首批获得博士、硕士学位授/权的高校之一，省政府与农业部共/建高校，全国首批深化创新创业教/育改革示范高校，国家中西部基础/能力建设高校。']
		}, {
			name: "山西医科大学",
			value: [112.55377, 37.85044, '山西医科大学的前身是山西医学传/习所，创建于1919年。经过90余/年的发展，学校建成了以医学学科/为主，理、管、法、文、工等学科/相互渗透、协调发展的教学研究型/医科大学。']
		}, {
			name: "太原科技大学",
			value: [112.49176, 37.87568, '太原科技大学是新中国第一所重型机/械本科院校，是一所具有鲜明办学特/色和光荣办学传统的多科性大学，是/我国重大技术装备领域重要的人才培/养和科学研究基地。1998年，学校改/为教育部与山西省共建共管，以山西/省管理为主。2004年学校更名为太原/科技大学。']
		}, {
			name: "山西大同大学",
			value: [113.35493, 40.09153, '山西大同大学']
		}, {
			name: "太原师范学院",
			value: [112.5694400000, 37.8409700000, '太原师范学院']
		}, {
			name: "运城学院",
			value: [110.9325500000, 35.1223600000, '运城学院']
		}, {
			name: "山西中医学院",
			value: [112.5300200000, 37.8415100000, '山西中医学院']
		}, {
			name: "长治医学院",
			value: [113.1172500000, 36.1727600000, '长治医学院']
		}, {
			name: "忻州师范学院",
			value: [112.7275500000, 38.4299100000, '忻州师范学院']
		}, {
			name: "长治学院",
			value: [113.1364400000, 36.2103300000, '长治医学院']
		}, {
			name: "太原学院",
			value: [112.6082900000, 37.6947600000, '太原学院']
		}, {
			name: "晋中学院",
			value: [112.7212600000, 37.7410400000, '晋中学院']
		}, {
			name: "太原工业学院",
			value: [112.5453900000, 37.9579600000, '太原工业学院']
		}, {
			name: "吕梁学院",
			value: [111.1469800000, 37.5799100000, '吕梁学院']
		}, {
			name: "山西工程技术学院",
			value: [113.6075100000, 37.8812800000, '山西工程技术学院']
		}

		]

	}]
};
var option_sandiantu1 = {
	title: {
		text: '"1331工程"重点学科建设计划',
		left: 20,	
			top:'3%',
			textStyle: {
				color: '#fff',
				fontSize: 15
			},
	},
	legend: {
		textStyle: { 
			color:'#fff',

		},
		bottom:10,
		data: ['重点实验室','重点学科','重点创新团队']
	},
	xAxis: {
		data:['太原理工大学','山西大学',  '山西农业大学', '山西医科大学', '山西师范大学', '山西财经大学', '中北大学', '太原科技大学'],
		axisLine: {
			lineStyle: {
				color: '#fff'
			}
		},
		axisLabel: {
			interval: 0,
			rotate:0,
			color: "#fff"
		},
		splitLine: {
			lineStyle: {
				type: 'dashed'
			}
		}
	},
	yAxis: {
		axisLine: {
			lineStyle: {
				color: '#fff'
			}
		},
		splitLine: {
			lineStyle: {
				type: 'dashed'
			}
		},
		scale: true
	},
	tooltip: {
		trigger: 'axis',
	},
	series: [{
		name: '重点学科',
		data:[35,36,15,13,10,11,13,10],
		type: 'scatter',
		symbolSize: function (data) {
			return data*2+5;
		},
		label: {
			emphasis: {
				show: true,
				formatter: function (param) {
					return param.data[3];
				},
			}
		},
		itemStyle: {
			normal: {
				shadowBlur: 10,
				shadowColor: 'rgba(120, 36, 50, 0.5)',
				shadowOffsetY: 5,
				color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
					offset: 0,
					color: 'rgb(251, 118, 123)'
				}, {
					offset: 1,
					color: 'rgb(204, 46, 72)'
				}])
			}
		}
	},{
		name: '重点创新团队',
		data:[29,13,7,9,4,2,10,5],
		type: 'scatter',
		symbolSize: function (data) {
			return data*2+5;
		},
		label: {
			emphasis: {
				show: true,
				formatter: function (param) {
					return param.data[3];
				},
			}
		},
		itemStyle: {
			normal: {
				shadowBlur: 10,
				shadowColor: 'rgba(120, 36, 50, 0.5)',
				shadowOffsetY: 5,
				color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
					offset: 0,
					color: 'rgb(129, 227, 238)'
				}, {
					offset: 1,
					color: 'rgb(0, 255, 76)'
				}])
			}
		}
	},{
		name: '重点实验室',
		data:[18,10,4,11,2,0,9,4],
		type: 'scatter',
		symbolSize: function (data) {
			return data*2+5;
		},
		label: {
			emphasis: {
				show: true,
				formatter: function (param) {
					return param.data[3];
				},
			}
		},
		itemStyle: {
			normal: {
				shadowBlur: 10,
				shadowColor: 'rgba(120, 36, 50, 0.5)',
				shadowOffsetY: 5,
				color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
					offset: 0,
					color: 'rgb(129,227,238)'
				}, {
					offset: 1,
					color: 'rgb(98,165,110)'
				}])
			}
		}
	}]
};

var option_sandiantu2 = {
	title: {
		text: '"1331工程"平台建设计划',
		left: 20,
			top:'3%',
			textStyle: {
				color: '#fff',
				fontSize: 15
			},
	},
	legend: {
		textStyle: { 
			color:'#fff',

		},
		bottom:10,
		data: ['工程技术研究中心','协同创新中心','省产业技术联盟']
	},
	xAxis: {
		data:['太原理工大学','山西大学',  '山西农业大学', '山西医科大学', '山西师范大学', '山西财经大学', '中北大学', '太原科技大学'],
		axisLine: {
			lineStyle: {
				color: '#fff'
			}
		},
		axisLabel: {
			interval: 0,
			rotate:0,
			color: "#fff"
		},
		splitLine: {
			lineStyle: {
				type: 'dashed'
			}
		}
	},
	yAxis: {
		axisLine: {
			lineStyle: {
				color: '#fff'
			}
		},
		splitLine: {
			lineStyle: {
				type: 'dashed'
			}
		},
		scale: true
	},
	tooltip: {
		trigger: 'axis',
	},
	series: [{
		name: '工程技术研究中心',
		data:[14,7,9,2,1,0,16,10],
		type: 'scatter',
		symbolSize: function (data) {
			return data*2+5;
		},
		label: {
			emphasis: {
				show: true,
				formatter: function (param) {
					return param.data[3];
				},
			}
		},
		itemStyle: {
			normal: {
				shadowBlur: 10,
				shadowColor: 'rgba(120, 36, 50, 0.5)',
				shadowOffsetY: 5,
				color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
					offset: 0,
					color: 'rgb(251, 118, 123)'
				}, {
					offset: 1,
					color: 'rgb(204, 46, 72)'
				}])
			}
		}
	},{
		name: '协同创新中心',
		data:[3,5,3,1,2,1,2,2],
		type: 'scatter',
		symbolSize: function (data) {
			return data*2+5;
		},
		label: {
			emphasis: {
				show: true,
				formatter: function (param) {
					return param.data[3];
				},
			}
		},
		itemStyle: {
			normal: {
				shadowBlur: 10,
				shadowColor: 'rgba(120, 36, 50, 0.5)',
				shadowOffsetY: 5,
				color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
					offset: 0,
					color: 'rgb(129, 227, 238)'
				}, {
					offset: 1,
					color: 'rgb(0, 255, 76)'
				}])
			}
		}
	},{
		name: '省产业技术联盟',
		data:[0,7,0,4,0,0,3,0],
		type: 'scatter',
		symbolSize: function (data) {
			return data*2+5;
		},
		label: {
			emphasis: {
				show: true,
				formatter: function (param) {
					return param.data[3];
				},
			}
		},
		itemStyle: {
			normal: {
				shadowBlur: 10,
				shadowColor: 'rgba(120, 36, 50, 0.5)',
				shadowOffsetY: 5,
				color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
					offset: 0,
					color: 'rgb(129,227,238)'
				}, {
					offset: 1,
					color: 'rgb(98,165,110)'
				}])
			}
		}
	}]
};

var option_xiangxingzhutu = {
	title: {
		text: '高校平台数据',
		left: 85,
			top:'4.5%',
			textStyle: {
				color: '#fff',
				fontSize: 15
			},
	},
	color:['#dd6b66','#759ba0','#8dc1a9','#ec8155','#eedd78','#73a373'],
	tooltip : {
		trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
    	orient:'vertical',
    	data: ['重点实验室', '创新团队', '协同创新中心', '工程技术研究中心', '产业技术创新战略联盟', '人文社科重点研究基地'],
    	left:'2%',
    	top:'30%',
    	textStyle: { 
    		color:'#fff',
    	}
    },
    grid: {
    	containLabel: true,
    	left: 200,
    	bottom: 20
    },
    xAxis : [
    {
    	axisLine: {
    		lineStyle: {
    			color: '#fff'
    		}
    	},
    	type : 'category',
    	data : ['太原理工大学','山西大学',  '山西农业大学', '山西医科大学', '山西师范大学', '山西财经大学', '中北大学', '太原科技大学']
    }
    ],
    yAxis : [
    {
    	axisLine: {
    		lineStyle: {
    			color: '#fff'
    		}
    	},
    	splitLine: {
    		lineStyle: {
    			type: 'dashed'
    		}
    	},
    	type : 'value'
    }
    ],
    series : [
    {
    	name:'重点实验室',
    	type:'bar',
    	data:[18,10,4,11,2,0,9,4]
    },
    {
    	name:'创新团队',    
    	type:'bar',
            data:[29,13,7,9,4,2,10,5]
        },
        {
        	name:'协同创新中心',
        	type:'bar',
            data:[3,5,3,1,2,1,2,2]
        },
        {
        	name:'工程技术研究中心',
        	type:'bar',
            data:[14,7,9,2,1,0,16,10]
        },
        {
        	name:'产业技术创新战略联盟',
        	type:'bar',
        	data:[0,7,0,4,0,0,3,0],
        	
        },
        {
        	name:'人文社科重点研究基地',
        	type:'bar',
        	barWidth : 5,
            data:[3,12,1,2,4,4,1,2]
        }]
    };
echarts.init(document.getElementById("box11_top")).setOption(option_map);
echarts.init(document.getElementById("box12_top1")).setOption(option_sandiantu1);
echarts.init(document.getElementById("box12_top2")).setOption(option_sandiantu2);
echarts.init(document.getElementById("box12_bottom")).setOption(option_xiangxingzhutu);