	var option_bingtu2 = {
		color: ['#62a56e', '#56bcbe', '#6b89ae', '#7dcc85','#ff9a20','#149985','#f06261','#699ba1','#f06261','#699ba1','#f49982','#7bc3a7','#fd7747','#f2dd66'],
		title: {
			text: '重点实验室分布',
			left: 65,
			top:'1%',
			textStyle: {
				color: '#fff',
				fontSize: 15
			},
		},

		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b}: {c} ({d}%)"
		},
		legend: {
			textStyle:{
				color:'#fff'
			},
			orient: 'vertical',
			x: 'left',
			bottom: 50,
			data: ['山西大学', '太原理工大学', '山西农业大学', '山西医科大学', '山西师范大学', '山西大同大学', '中北大学', '太原科技大学', '国家重点实验室', '国家培育', '教育部重点实验室', '省部共建部属', '省级重点实验室', '其他部属']
		},
	// toolbox: {
	// 	show: true,
	// 	feature: {
	// 		dataView: { show: true, readOnly: true },
	// 		// restore: { show: true },
	// 	},
	// 	iconStyle:{
 //                	normal:{
 //              borderColor:'#fff',//设置颜色
 //          }
 //      }
	// },
	series: [{
		name: '重点实验室',
		type: 'pie',
		selectedMode: 'single',
		radius: [0, '25%'],

		label: {
			normal: {
				position: 'inner'
			}
		},
		labelLine: {
			normal: {
				show: false
			}
		},

		data: [
		{ value: 1, name: '国家', selected: true },
		{ value: 3, name: '国家培育' },
		{ value: 8, name: '教育部' },
		{ value: 1, name: '省部共建部属' },
		{ value: 40, name: '省级' },
		{ value: 6, name: '其他部属' },
		]
	},
	{
		name: '分布情况',
		type: 'pie',
		radius: ['35%', '50%'],
			label:{            //饼图图形上的文本标签
				normal:{
					textStyle : {
						color:'#fff',
                                    fontSize : 10   //文字的字体大小
                                },


                                
                            }
                        },
                        data: [
                        { value: 1, name: '山西大学' },
                        { value: 0, name: '太原理工大学' },
                        { value: 0, name: '山西农业大学' },
                        { value: 0, name: '山西医科大学' },
                        { value: 0, name: '山西师范大学' },
                        { value: 0, name: '中北大学' },
                        { value: 0, name: '太原科技大学' },
                        { value: 0, name: '山西大同大学' },

                        { value: 0, name: '山西大学' },
                        { value: 1, name: '太原理工大学' },
                        { value: 0, name: '山西农业大学' },
                        { value: 0, name: '山西医科大学' },
                        { value: 0, name: '山西师范大学' },
                        { value: 1, name: '中北大学' },
                        { value: 1, name: '太原科技大学' },
                        { value: 0, name: '山西大同大学' },

                        { value: 2, name: '山西大学' },
                        { value: 4, name: '太原理工大学' },
                        { value: 0, name: '山西农业大学' },
                        { value: 0, name: '山西医科大学' },
                        { value: 1, name: '山西师范大学' },
                        { value: 1, name: '中北大学' },
                        { value: 0, name: '太原科技大学' },
                        { value: 0, name: '山西大同大学' },

                        { value: 0, name: '山西大学' },
                        { value: 0, name: '太原理工大学' },
                        { value: 0, name: '山西农业大学' },
                        { value: 1, name: '山西医科大学' },
                        { value: 0, name: '山西师范大学' },
                        { value: 0, name: '中北大学' },
                        { value: 0, name: '太原科技大学' },
                        { value: 0, name: '山西大同大学' },

                        { value: 6, name: '山西大学' },
                        { value: 11, name: '太原理工大学' },
                        { value: 3, name: '山西农业大学' },
                        { value: 10, name: '山西医科大学' },
                        { value: 1, name: '山西师范大学' },
                        { value: 5, name: '中北大学' },
                        { value: 3, name: '太原科技大学' },
                        { value: 1, name: '山西大同大学' },

                        { value: 1, name: '山西大学' },
                        { value: 2, name: '太原理工大学' },
                        { value: 1, name: '山西农业大学' },
                        { value: 0, name: '山西医科大学' },
                        { value: 0, name: '山西师范大学' },
                        { value: 2, name: '中北大学' },
                        { value: 0, name: '太原科技大学' },
                        { value: 0, name: '山西大同大学' },

                        ]
                    }
                    ]
                };
                var option_zhexiantu2 = {

                	title: {
                		text: '重点实验室变化',
                		left: 60,
                		top:'3%',
                		textStyle: {
                			color: '#fff',
                			fontSize: 15
                		},

                	},

                	tooltip: {
                		trigger: 'axis',
                		axisPointer: {
                			lineStyle: {
                				color: '#57617B'
                			}
                		}
                	},
  //               	toolbox: {
  //               		show: true,
  //               		feature: {

  //               			dataView: {
  //               				show: true
  //               			}
  //               		},
  //               		iconStyle:{
  //               			normal:{
  //             borderColor:'#fff',//设置颜色
  //         }
  //     }
  // },
  // legend: {
  // 	top:10,
  // 	icon: 'rect',
  // 	itemWidth: 14,
  // 	itemHeight: 5,
  // 	itemGap: 13,
  // 	data: ['重点实验室变化'],
  // 	right: '4%',
  // 	textStyle: {
  // 		fontSize: 12,
  // 		color: '#F1F1F3'
  // 	}
  // },
  grid: {
  	top:'20%',
  	left: '3%',
  	right: '4%',
  	bottom: '3%',
  	containLabel: true
  },
  xAxis: [{
  	type: 'category',
  	boundaryGap: false,
  	axisLine: {
  		lineStyle: {
  			color: '#fff'
  		}
  	},
  	data: ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017']
  }],
  yAxis: [{
  	type: 'value',
  	name: '单位（个）',
  	axisTick: {
  		show: false
  	},
  	axisLine: {
  		lineStyle: {
  			color: '#fff'
  		}
  	},
  	axisLabel: {
  		margin: 10,
  		textStyle: {
  			fontSize: 14
  		}
  	},
  	splitLine: {
  		lineStyle: {
  			color: '#fff'
  		}
  	}
  }],
  series: [{
  	name: '重点学科',
  	type: 'line',
  	smooth: true,
  	symbol: 'circle',
  	symbolSize: 5,
  	showSymbol: false,
  	lineStyle: {
  		normal: {
  			width: 1
  		}
  	},
  	areaStyle: {
  		normal: {
  			color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
  				offset: 0,
  				color: 'rgba(241, 72, 71, 0.3)'
  			}, {
  				offset: 0.8,
  				color: 'rgba(241, 72, 71, 0)'
  			}], false),
  			shadowColor: 'rgba(0, 0, 0, 0.1)',
  			shadowBlur: 10
  		}
  	},
  	itemStyle: {
  		normal: {

  			color: 'rgb(219,50,51)',
  			borderColor: 'rgba(219,50,51,0.2)',
  			borderWidth: 12
  		}
  	},
  	data: [31, 31, 32, 32, 33, 35, 45, 46, 47, 50, 55, 59]
  }]
};
var option_xiangxingzhutu2 = {
	title: {
		text: '各高校重点实验室',
		left: 60,
		top:'3%',
		textStyle: {
			color: '#fff',
			fontSize: 15
		},
	},
	tooltip : {
		trigger: 'item',
		formatter: "{a} <br/>{b} : {c} ({d}%)"
	},
	legend: {
		orient: 'vertical',
		left: 10,
		top:'20%',
		textStyle: { 
			color:'#fff',
		},
		data:['太原理工大学','山西大学',  '山西农业大学', '山西医科大学', '山西师范大学', '山西财经大学', '中北大学', '太原科技大学'],
	},
	series : [
	{
		name: '各高校重点实验室',
		type: 'pie',
		radius : '55%',
		center: ['60%', '50%'],
		data:[
		{value:18, name:'太原理工大学'},
		{value:10, name:'山西大学'},
		{value:4, name:'山西农业大学'},
		{value:11, name:'山西医科大学'},
		{value:2, name:'山西师范大学'},
		{value:0, name:'山西财经大学'},
		{value:9, name:'中北大学'},
		{value:4, name:'太原科技大学'}
		],
		itemStyle: {
			emphasis: {
				shadowBlur: 10,
				shadowOffsetX: 0,
				shadowColor: 'rgba(0, 0, 0, 0.5)'
			}
		}
	}
	]
};

































