	var data9 = [{
		"time": "国家重点学科",
		"data": [{
			"name": "湖北",
			"value": [99, 52.941176, "湖北",82,17]
		}, {
			"name": "湖南",
			"value": [46, 24.59893, "湖南",43,3]
		}, {
			"name": "安徽",
			"value": [22, 11.764706, "安徽",18,4]
		}, {
			"name": "河南",
			"value": [9, 4.812834, "河南",5,4]
		}, {
			"name": "山西",
			"value": [8, 4.278075, "山西",5,3]
		}, {
			"name": "江西",
			"value": [3, 1.604278, "江西",2,1]
		}]
	}, {
		"time": "重点实验室",
		"data": [{
			"name": "湖北",
			"value": [50, 40, "湖北",17,33,2]
		}, {
			"name": "湖南",
			"value": [20, 16, "湖南",5,15,4]
		}, {
			"name": "山西",
			"value": [19, 15.2, "山西",4,8,7]
		}, {
			"name": "河南",
			"value": [15, 12, "河南",1,11,3]
		}, {
			"name": "安徽",
			"value": [14, 11.2, "安徽",5,8,1]
		}, {
			"name": "江西",
			"value": [7, 5.6, "江西",2,5,0]
		}]
	}, {
		"time": "协同创新中心",
		"data": [{
			"name": "湖南",
			"value": [3, 42.857143, "湖南",3]
		}, {
			"name": "湖北",
			"value": [2, 28.571429, "湖北",2]
		}, {
			"name": "安徽",
			"value": [1, 14.285714, "安徽",1]
		}, {
			"name": "河南",
			"value": [1, 14.285714, "河南",1]
		}, {
			"name": "山西",
			"value": [0, 0, "山西",0]
		}, {
			"name": "江西",
			"value": [0, 0, "江西",0]
		}]
	}, {
		"time": "工程技术研究中心",
		"data": [{
			"name": "湖北",
			"value": [31, 35.632184, "湖北",14,17]
		}, {
			"name": "河南",
			"value": [18, 20.689655, "河南",12,6]
		}, {
			"name": "安徽",
			"value": [13, 14.942529, "安徽",4,9]
		}, {
			"name": "湖南",
			"value": [13, 14.942529, "湖南",9,4]
		}, {
			"name": "江西",
			"value": [7, 8.045977, "江西",4,3]
		}, {
			"name": "山西",
			"value": [5, 5.747126, "山西",0,5]
		}, ]
	}]

	var option_map1 = {
		baseOption: {
			animationDurationUpdate: 1000,
			animationEasingUpdate: 'quinticInOut',
			timeline: {
				axisType: 'category',
				orient: 'vertical',
				autoPlay: true,
				inverse: 3,
				playInterval: 5000,
				left: null,
				right: 5,
				top: 20,
				bottom: 20,
				width: 150,
				height: null,
				label: {
					normal: {
						textStyle: {
							color: '#fff',
							fontSize: 14
						},
						position: 'left'
					},
					emphasis: {
						textStyle: {
							color: '#fff'
						}
					}
				},
				symbol: 'none',

				lineStyle: {
					color: '#fff'
				},
				checkpointStyle: {
					color: '#bbb',
					borderColor: '#777',
					borderWidth: 1
				},
				controlStyle: {
					showNextBtn: true,
					showPrevBtn: true,
					normal: {
						color: '#fff',
						borderColor: '#fff'
					},
					emphasis: {
						color: '#fff',
						borderColor: '#fff'
					}
				},
				data: data9.map(function(ele) {
					return ele.time
				})
			},
			title: {
				text: '中部六省数据对比',
				subtext: '单位:个',
				left: 55,
				top:'1%',
				textStyle: {
					color: '#fff',
					fontSize: 15
				},
			},
			tooltip: {
				formatter: function(params) {
				
					return params.data.value[2] + ': ' + params.data.value[0];
				
				}
			},
			grid: {
				top: '10%',
				bottom: '60%',
				left: '58%',
				right: 50,

				width: '35%'
			},
			xAxis: {
				axisLine: {
					lineStyle: {
						color: '#fff'
					}
				}

			},
			yAxis: {},
			series: [{
				id: 'map',
				type: 'map',
				mapType: 'china',
			//			top: '10%',
			//bottom: '25%',
			left: '5%',
			//right: '10%',
			width: '50%',
			itemStyle: {
				normal: {
					areaColor: '#323c48',
					borderColor: '#404a59'
				},
				emphasis: {
					label: {
						show: true
					},
					areaColor: 'rgba(255,255,255, 0.5)'
				}
			},
			data: []
		}, {
			id: 'bar',
			type: 'bar',
			// tooltip: {
			// 	show: false
			// },
			label: {
				normal: {
					show: true,
					position: 'right',
					textStyle: {
						color: '#fff',
						fontSize:14
					}
				}
			},
			data: []
		}, {
			id: 'pie',
			type: 'pie',
			radius: ['21%', '30%'],
			center: ['75%', '70%'],
			//roseType: 'area',
			// tooltip: {
			// 	formatter: '{b} {d}%'
			// },
			data: [],
			label: {
				normal: {
					textStyle: {
						color: '#fff',
						fontSize:14
					}
				}
			},
			labelLine: {
				normal: {
					lineStyle: {
						color: '#fff'
					}
				}
			},
			itemStyle: {
				normal: {
					borderColor: 'rgba(0,0,0,0.3)',
					borderSize: 1
				}
			}
		}]
	},
	options: []
}

for(var i = 0; i < data9.length; i++) {
	//计算其余省份GDP
	var restPercent = 100;
	var restValue = 0;
	data9[i].data.forEach(function(ele) {
		restPercent = restPercent - ele.value[1];
	});
	restValue = data9[i].data[0].value[0] * (restPercent / data9[i].data[0].value[1]);
	console.log(restPercent);
	console.log(restValue);
	option_map1.options.push({
		visualMap: [{
			//type:'continous',
			//type: 'continuous',
			calculable: true,
			dimension: 0,
			left: 10,
			bottom:10,
			itemWidth: 12,
			min: data9[i].data[5].value[0],
			max: data9[i].data[0].value[0],
			text: ['High', 'Low'],
			textStyle: {
				color: '#fff'
			},
			inRange: {
				//                color: ['lightskyblue', 'yellow', 'orangered', 'red']
				color: ['lightskyblue', 'yellow', 'orangered']
			}
		}],
		xAxis: {
			type: 'value',
			boundaryGap: [0, 0.1],
			axisLabel: {
				show: false,

			},
			splitLine: {
				show: false
			},

			//			position:'top'
		},
		yAxis: {
			type: 'category',
			axisLabel: {
				show: false,
				textStyle: {
					color: '#fff',

				}
			},

			data: data9[i].data.map(function(ele) {
				return ele.value[2]
			}).reverse(),

		},
		series: [{
			id: 'map',
			data: data9[i].data
		},
		// {
		// 	id: 'bar',
		// 	label: {
		// 		normal: {
		// 			position: 'right',
		// 			formatter: '{b} : {c}'
		// 		}
		// 	},
		// 	data: data9[i].data.map(function(ele) {
		// 		return ele.value[0]
		// 	}).sort(function(a, b) {
		// 		return a > b
		// 	})
		// },
		{

			type: 'bar',
			stack: '总量',
			label: {
				normal: {
					show: true,
					position: 'insideRight'
				}
			},
			data: data9[i].data.map(function(ele) {
				return {
					name: ele.value,
					value: ele.value[3]
				}
			})
		},
		{

			type: 'bar',
			stack: '总量',
			label: {
				normal: {
					show: true,
					position: 'insideRight'
				}
			},
			data: data9[i].data.map(function(ele) {
				return {
					name: ele.value,
					value: ele.value[4]
				}
			})
		},
		{

			type: 'bar',
			stack: '总量',
			label: {
				normal: {
					show: true,
					position: 'insideRight'
				}
			},
			data: data9[i].data.map(function(ele) {
				return {
					name: ele.value,
					value: ele.value[5]
				}
			})
		},
		{
			id: 'pie',
			data: data9[i].data.map(function(ele) {
				return {
					name: ele.value[2],
					value: ele.value
				}
			})
		}]
	})
}

