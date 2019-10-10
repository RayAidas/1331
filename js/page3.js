	var option_guanxitu1 = {
		title: {
			text: "山西省重点学科数据分析",
			subtext: "各学院专业关系-Acring",
			left: 40,
			top:'1%',
			textStyle: {
				color: '#fff',
				fontSize: 15
			},
		},
		color: ['#f06261','#62a56e', '#56bcbe', '#6b89ae', '#7dcc85','#ff9a20','#149985','#699ba1'],
		tooltip: {},
		legend: [{
			textStyle:{
				color:'#fff'
			},
			formatter: function(name) {
				return echarts.format.truncateText(name, 40, '14px Microsoft Yahei', '…');
			},
			tooltip: {
				show: true
			},
			selectedMode: 'false',
			bottom: 20,
			data: ['山西大学', '太原理工大学', '山西农业大学', '山西医科大学', '山西师范大学', '山西财经大学', '中北大学', '太原科技大学']
		}],
		// toolbox: {
		// 	show: true,
		// 	feature: {
		// 		dataView: { show: true, readOnly: true },
		// 		restore: { show: true },

		// 	},
		// 	iconStyle:{
		// 		normal:{
  //             borderColor:'#fff',//设置颜色
  //         }
  //     }
  // },
  animationDuration: 3000,
  animationEasingUpdate: 'quinticInOut',
  series: [{
  	name: '山西省重点学科',
  	type: 'graph',
  	layout: 'force',

  	force: {
  		repulsion: 50
  	},

  	data: [{
  		"name": "山西省重点学科",
				// "x": 0,
				// y: 0,
				"symbolSize": 40,
				"draggable": "true",
				"value": 166

			}, {
				"name": "山西大学",
				"value": 36,
				"symbolSize": 36,
				"category": "山西大学",
				"draggable": "true"
			}, {
				"name": "山西大学-国家重点学科",
				"symbolSize": 2,
				"category": "山西大学",
				"draggable": "true",
				"value": 2
			}, {
				"name": "山西大学-省攀升计划",
				"symbolSize": 3,
				"category": "山西大学",
				"draggable": "true",
				"value": 3
			}, {
				"name": "山西大学-省学科群建设",
				"symbolSize": 1,
				"category": "山西大学",
				"draggable": "true",
				"value": 1
			}, {
				"name": "山西大学-省重点学科",
				"value": 10,
				"symbolSize": 10,
				"category": "山西大学",
				"draggable": "true"
			}, {
				"name": "山西大学-省重点建设",
				"symbolSize": 16,
				"category": "山西大学",
				"draggable": "true",
				"value": 16
			}, {
				"name": "山西大学-省重点扶持",
				"symbolSize": 4,
				"category": "山西大学",
				"draggable": "true",
				"value": 4
			},
			{
				"name": "太原理工大学",
				"symbolSize": 35,
				"category": "太原理工大学",
				"draggable": "true",
				"value": 35
			},
			{
				"name": "太原理工大学-国家重点学科",
				"symbolSize": 2,
				"category": "太原理工大学",
				"draggable": "true",
				"value": 2
			}, {
				"name": "太原理工大学-国家培育",
				"symbolSize": 1,
				"category": "太原理工大学",
				"draggable": "true",
				"value": 1
			}, {
				"name": "太原理工大学-省攀升计划",
				"symbolSize": 3,
				"category": "太原理工大学",
				"draggable": "true",
				"value": 3
			}, {
				"name": "太原理工大学-省学科群建设",
				"value": 3,
				"symbolSize": 3,
				"category": "太原理工大学",
				"draggable": "true"
			}, {
				"name": "太原理工大学-省重点学科",
				"symbolSize": 15,
				"category": "太原理工大学",
				"draggable": "true",
				"value": 15
			}, {
				"name": "太原理工大学-省重点建设",
				"symbolSize": 10,
				"category": "太原理工大学",
				"draggable": "true",
				"value": 10
			}, {
				"name": "太原理工大学-省重点扶持",
				"symbolSize": 1,
				"category": "太原理工大学",
				"draggable": "true",
				"value": 1
			}, {
				"name": "山西农业大学",
				"symbolSize": 15,
				"category": "山西农业大学",
				"draggable": "true",
				"value": 15
			}, {
				"name": "山西农业大学-国家培育",
				"symbolSize": 1,
				"category": "山西农业大学",
				"draggable": "true",
				"value": 1
			}, {
				"name": "山西农业大学-省攀升计划",
				"value": 1,
				"symbolSize": 1,
				"category": "山西农业大学",
				"draggable": "true"
			}, {
				"name": "山西农业大学-省学科群建设",
				"symbolSize": 1,
				"category": "山西农业大学",
				"draggable": "true",
				"value": 1
			}, {
				"name": "山西农业大学-省重点学科",
				"symbolSize": 4,
				"category": "山西农业大学",
				"draggable": "true",
				"value": 4
			}, {
				"name": "山西农业大学-省重点建设",
				"symbolSize": 5,
				"category": "山西农业大学",
				"draggable": "true",
				"value": 5
			}, {
				"name": "山西农业大学-省重点扶持",
				"symbolSize": 3,
				"category": "山西农业大学",
				"draggable": "true",
				"value": 3
			}, {
				"name": "山西医科大学",
				"symbolSize": 13,
				"category": "山西医科大学",
				"draggable": "true",
				"value": 13
			}, {
				"name": "山西医科大学-国家重点学科",
				"symbolSize": 1,
				"category": "山西医科大学",
				"draggable": "true",
				"value": 1
			}, {
				"name": "山西医科大学-省攀升计划",
				"value": 1,
				"symbolSize": 1,
				"category": "山西医科大学",
				"draggable": "true"
			}, {
				"name": "山西医科大学-省学科群建设",
				"symbolSize": 1,
				"category": "山西医科大学",
				"draggable": "true",
				"value": 1
			}, {
				"name": "山西医科大学-省重点学科",
				"symbolSize": 5,
				"category": "山西医科大学",
				"draggable": "true",
				"value": 5
			}, {
				"name": "山西医科大学-省重点建设",
				"symbolSize": 4,
				"category": "山西医科大学",
				"draggable": "true",
				"value": 4
			}, {
				"name": "山西医科大学-省重点扶持",
				"symbolSize": 1,
				"category": "山西医科大学",
				"draggable": "true",
				"value": 1
			}, {
				"name": "山西师范大学",
				"symbolSize": 10,
				"category": "山西师范大学",
				"draggable": "true",
				"value": 10
			}, {
				"name": "山西师范大学-省学科群建设",
				"symbolSize": 1,
				"category": "山西师范大学",
				"draggable": "true",
				"value": 1
			}, {
				"name": "山西师范大学-省重点学科",
				"symbolSize": 2,
				"category": "山西师范大学",
				"draggable": "true",
				"value": 2
			}, {
				"name": "山西师范大学-省重点建设",
				"symbolSize": 4,
				"category": "山西师范大学",
				"draggable": "true",
				"value": 4
			}, {
				"name": "山西师范大学-省重点扶持",
				"symbolSize": 3,
				"category": "山西师范大学",
				"draggable": "true",
				"value": 3
			}, {
				"name": "山西财经大学",
				"value": 11,
				"symbolSize": 11,
				"category": "山西财经大学",
				"draggable": "true"
			}, {
				"name": "山西财经大学-省重点学科",
				"symbolSize": 3,
				"category": "山西财经大学",
				"draggable": "true",
				"value": 3
			}, {
				"name": "山西财经大学-省重点建设",
				"symbolSize": 6,
				"category": "山西财经大学",
				"draggable": "true",
				"value": 6
			}, {
				"name": "山西财经大学-省重点扶持",
				"symbolSize": 2,
				"category": "山西财经大学",
				"draggable": "true",
				"value": 2
			}, {
				"name": "中北大学",
				"symbolSize": 13,
				"category": "中北大学",
				"draggable": "true",
				"value": 13
			}, {
				"name": "中北大学-国家培育",
				"symbolSize": 1,
				"category": "中北大学",
				"draggable": "true",
				"value": 1
			}, {
				"name": "中北大学-省攀升计划",
				"value": 2,
				"symbolSize": 2,
				"category": "中北大学",
				"draggable": "true"
			}, {
				"name": "中北大学-省学科群建设",
				"symbolSize": 1,
				"category": "中北大学",
				"draggable": "true",
				"value": 1
			}, {
				"name": "中北大学-省重点学科",
				"symbolSize": 4,
				"category": "中北大学",
				"draggable": "true",
				"value": 4
			}, {
				"name": "中北大学-省重点建设",
				"symbolSize": 5,
				"category": "中北大学",
				"draggable": "true",
				"value": 5
			}, {
				"name": "太原科技大学",
				"symbolSize": 10,
				"category": "太原科技大学",
				"draggable": "true",
				"value": 10
			}, {
				"name": "太原科技大学-省学科群建设",
				"symbolSize": 2,
				"category": "太原科技大学",
				"draggable": "true",
				"value": 2
			}, {
				"name": "太原科技大学-省重点学科",
				"symbolSize": 2,
				"category": "太原科技大学",
				"draggable": "true",
				"value": 2
			}, {
				"name": "太原科技大学-省重点建设",
				"value": 3,
				"symbolSize": 3,
				"category": "太原科技大学",
				"draggable": "true"
			}, {
				"name": "太原科技大学-省重点扶持",
				"symbolSize": 3,
				"category": "太原科技大学",
				"draggable": "true",
				"value": 3
			}, {
				"name": "长治医学院",
				"symbolSize": 1,
				"category": "长治医学院",
				"draggable": "true",
				"value": 1
			}, {
				"name": "长治医学院-省重点建设",
				"symbolSize": 1,
				"category": "长治医学院",
				"draggable": "true",
				"value": 1
			}, {
				"name": "山西中医学院",
				"symbolSize": 1,
				"category": "长治医学院",
				"draggable": "true",
				"value": 1
			}, {
				"name": "山西中医学院-省重点建设",
				"symbolSize": 1,
				"category": "山西中医学院",
				"draggable": "true",
				"value": 1
			}, {
				"name": "山西大同大学",
				"symbolSize": 5,
				"category": "山西大同大学",
				"draggable": "true",
				"value": 5
			}, {
				"name": "山西大同大学-省重点建设",
				"symbolSize": 3,
				"category": "山西大同大学",
				"draggable": "true",
				"value": 3
			}, {
				"name": "山西大同大学-省重点扶持",
				"symbolSize": 2,
				"category": "山西大同大学",
				"draggable": "true",
				"value": 2
			}, {
				"name": "太原师范学院",
				"symbolSize": 6,
				"category": "太原师范学院",
				"draggable": "true",
				"value": 6
			}, {
				"name": "太原师范学院-省重点建设",
				"symbolSize": 2,
				"category": "太原师范学院",
				"draggable": "true",
				"value": 2
			}, {
				"name": "太原师范学院-省重点扶持",
				"symbolSize": 4,
				"category": "太原师范学院",
				"draggable": "true",
				"value": 4
			}, {
				"name": "忻州师范学院",
				"value": 2,
				"symbolSize": 2,
				"category": "忻州师范学院",
				"draggable": "true"
			}, {
				"name": "忻州师范学院-省重点扶持",
				"symbolSize": 2,
				"category": "忻州师范学院",
				"draggable": "true",
				"value": 2
			}, {
				"name": "运城学院",
				"symbolSize": 1,
				"category": "运城学院",
				"draggable": "true",
				"value": 1
			}, {
				"name": "运城学院-省重点扶持",
				"symbolSize": 1,
				"category": "运城学院",
				"draggable": "true",
				"value": 1
			}, {
				"name": "晋中学院",
				"symbolSize": 1,
				"category": "晋中学院",
				"draggable": "true",
				"value": 1
			}, {
				"name": "晋中学院-省重点扶持",
				"symbolSize": 1,
				"category": "晋中学院",
				"draggable": "true",
				"value": 1
			}, {
				"name": "长治学院",
				"symbolSize": 2,
				"category": "长治学院",
				"draggable": "true",
				"value": 2
			}, {
				"name": "长治学院-省重点扶持",
				"symbolSize": 1,
				"category": "长治学院",
				"draggable": "true",
				"value": 1
			}, {
				"name": "长治学院-省学科群培育",
				"symbolSize": 1,
				"category": "长治学院",
				"draggable": "true",
				"value": 1
			}, {
				"name": "太原工业学院",
				"symbolSize": 1,
				"category": "太原工业学院",
				"draggable": "true",
				"value": 1
			}, {
				"name": "太原工业学院-省重点扶持",
				"symbolSize": 1,
				"category": "太原工业学院",
				"draggable": "true",
				"value": 1
			}, {
				"name": "吕梁学院",
				"symbolSize": 1,
				"category": "吕梁学院",
				"draggable": "true",
				"value": 1
			}, {
				"name": "吕梁学院-省重点扶持",
				"symbolSize": 1,
				"category": "吕梁学院",
				"draggable": "true",
				"value": 1
			}, {
				"name": "山西传媒学院",
				"symbolSize": 2,
				"category": "山西传媒学院",
				"draggable": "true",
				"value": 2
			}, {
				"name": "山西传媒学院-省学科群培育",
				"symbolSize": 1,
				"category": "山西传媒学院",
				"draggable": "true",
				"value": 1
			}, {
				"name": "山西传媒学院-省重点建设",
				"value": 1,
				"symbolSize": 1,
				"category": "山西传媒学院",
				"draggable": "true"
			}
			],
			links: [{
				"source": "山西省重点学科",
				"target": "山西大学"
			}, {
				"source": "山西大学",
				"target": "山西大学-国家重点学科"
			}, {
				"source": "山西大学",
				"target": "山西大学-省攀升计划"
			}, {
				"source": "山西大学",
				"target": "山西大学-省学科群建设"
			}, {
				"source": "山西大学",
				"target": "山西大学-省重点学科"
			}, {
				"source": "山西大学",
				"target": "山西大学-省重点建设"
			}, {
				"source": "山西大学",
				"target": "山西大学-省重点扶持"
			}, {
				"source": "山西省重点学科",
				"target": "太原理工大学"
			}, {
				"source": "太原理工大学",
				"target": "太原理工大学-国家重点学科"
			}, {
				"source": "太原理工大学",
				"target": "太原理工大学-国家培育"
			}, {
				"source": "太原理工大学",
				"target": "太原理工大学-省攀升计划"
			}, {
				"source": "太原理工大学",
				"target": "太原理工大学-省学科群建设"
			}, {
				"source": "太原理工大学",
				"target": "太原理工大学-省重点学科"
			}, {
				"source": "太原理工大学",
				"target": "太原理工大学-省重点建设"
			}, {
				"source": "太原理工大学",
				"target": "太原理工大学-省重点扶持"
			}, {
				"source": "山西省重点学科",
				"target": "山西农业大学"
			}, {
				"source": "山西农业大学",
				"target": "山西农业大学-国家培育"
			}, {
				"source": "山西农业大学",
				"target": "山西农业大学-省攀升计划"
			}, {
				"source": "山西农业大学",
				"target": "山西农业大学-省学科群建设"
			}, {
				"source": "山西农业大学",
				"target": "山西农业大学-省重点学科"
			}, {
				"source": "山西农业大学",
				"target": "山西农业大学-省重点建设"
			}, {
				"source": "山西农业大学",
				"target": "山西农业大学-省重点扶持"
			}, {
				"source": "山西省重点学科",
				"target": "山西医科大学"
			}, {
				"source": "山西医科大学",
				"target": "山西医科大学-国家重点学科"
			}, {
				"source": "山西医科大学",
				"target": "山西医科大学-省攀升计划"
			}, {
				"source": "山西医科大学",
				"target": "山西医科大学-省学科群建设"
			}, {
				"source": "山西医科大学",
				"target": "山西医科大学-省重点学科"
			}, {
				"source": "山西医科大学",
				"target": "山西医科大学-省重点建设"
			}, {
				"source": "山西医科大学",
				"target": "山西医科大学-省重点扶持"
			}, {
				"source": "山西省重点学科",
				"target": "山西师范大学"
			}, {
				"source": "山西师范大学",
				"target": "山西师范大学-省学科群建设"
			}, {
				"source": "山西师范大学",
				"target": "山西师范大学-省重点学科"
			}, {
				"source": "山西师范大学",
				"target": "山西师范大学-省重点建设"
			}, {
				"source": "山西师范大学",
				"target": "山西师范大学-省重点扶持"
			}, {
				"source": "山西省重点学科",
				"target": "山西财经大学"
			}, {
				"source": "山西财经大学",
				"target": "山西财经大学-省重点学科"
			}, {
				"source": "山西财经大学",
				"target": "山西财经大学-省重点建设"
			}, {
				"source": "山西财经大学",
				"target": "山西财经大学-省重点扶持"
			}, {
				"source": "山西省重点学科",
				"target": "中北大学"
			}, {
				"source": "中北大学",
				"target": "中北大学-国家培育"
			}, {
				"source": "中北大学",
				"target": "中北大学-省攀升计划"
			}, {
				"source": "中北大学",
				"target": "中北大学-省学科群建设"
			}, {
				"source": "中北大学",
				"target": "中北大学-省重点学科"
			}, {
				"source": "中北大学",
				"target": "中北大学-省重点建设"
			}, {
				"source": "山西省重点学科",
				"target": "太原科技大学"
			}, {
				"source": "太原科技大学",
				"target": "太原科技大学-省学科群建设"
			}, {
				"source": "太原科技大学",
				"target": "太原科技大学-省重点学科"
			}, {
				"source": "太原科技大学",
				"target": "太原科技大学-省重点建设"
			}, {
				"source": "太原科技大学",
				"target": "太原科技大学-省重点扶持"
			}, {
				"source": "山西省重点学科",
				"target": "长治医学院"
			}, {
				"source": "长治医学院",
				"target": "长治医学院-省重点建设"
			}, {
				"source": "山西省重点学科",
				"target": "山西中医学院"
			}, {
				"source": "山西中医学院",
				"target": "山西中医学院-省重点建设"
			}, {
				"source": "山西省重点学科",
				"target": "山西大同大学"
			}, {
				"source": "山西大同大学",
				"target": "山西大同大学-省重点建设"
			}, {
				"source": "山西大同大学",
				"target": "山西大同大学-省重点扶持"
			}, {
				"source": "山西省重点学科",
				"target": "太原师范学院"
			}, {
				"source": "太原师范学院",
				"target": "太原师范学院-省重点建设"
			}, {
				"source": "太原师范学院",
				"target": "太原师范学院-省重点扶持"
			}, {
				"source": "山西省重点学科",
				"target": "忻州师范学院"
			}, {
				"source": "忻州师范学院",
				"target": "忻州师范学院-省重点扶持"
			}, {
				"source": "山西省重点学科",
				"target": "运城学院"
			}, {
				"source": "运城学院",
				"target": "运城学院-省重点扶持"
			}, {
				"source": "山西省重点学科",
				"target": "晋中学院"
			}, {
				"source": "晋中学院",
				"target": "晋中学院-省重点扶持"
			}, {
				"source": "山西省重点学科",
				"target": "长治学院"
			}, {
				"source": "长治学院",
				"target": "长治学院-省学科群培育"
			}, {
				"source": "长治学院",
				"target": "长治学院-省重点扶持"
			}, {
				"source": "山西省重点学科",
				"target": "太原工业学院"
			}, {
				"source": "太原工业学院",
				"target": "太原工业学院-省重点扶持"
			}, {
				"source": "山西省重点学科",
				"target": "吕梁学院"
			}, {
				"source": "吕梁学院",
				"target": "吕梁学院-省重点扶持"
			}, {
				"source": "山西省重点学科",
				"target": "山西传媒学院"
			}, {
				"source": "山西传媒学院",
				"target": "山西传媒学院-省学科群培育"
			}, {
				"source": "山西传媒学院",
				"target": "山西传媒学院-省重点建设"
			}],
			categories: [{
				'name': '山西大学'
			}, {
				'name': '太原理工大学'
			}, {
				'name': '山西农业大学'
			}, {
				'name': '山西医科大学'
			}, {
				'name': '山西师范大学'
			}, {
				'name': '山西财经大学'
			}, {
				'name': '中北大学'
			}, {
				'name': '太原科技大学'
			}, {
				'name': '长治医学院'
			}, {
				'name': '山西中医学院'
			}, {
				'name': '山西大同大学'
			}, {
				'name': '太原师范学院'
			}, {
				'name': '忻州师范学院'
			}, {
				'name': '运城学院'
			}, {
				'name': '晋中学院'
			}, {
				'name': '长治学院'
			}, {
				'name': '太原工业学院'
			}, {
				'name': '吕梁学院'
			}, {
				'name': '山西传媒学院'
			}],
			focusNodeAdjacency: true,
			roam: true,
			zoom: 1.5,
			label: {
				normal: {

					show: true,
					position: 'top',

				}
			},
			lineStyle: {
				normal: {
					color: 'source',
					curveness: 0,
					type: "solid"
				}
			}
		}]
	};
	var option_zhexiantu1 = {

		title: {
			text: '重点学科变化',
			left: 60,
			top:'3%',
			textStyle: {
				color: '#fff',
				fontSize: 15
			},
		},
		// toolbox: {
		// 	show: true,
		// 	feature: {

		// 		dataView: {
		// 			show: true
		// 		}
		// 	},
		// 	iconStyle:{
		// 		normal:{
  //             borderColor:'#fff',//设置颜色
  //         }
  //     }
  // },
  tooltip: {
  	trigger: 'axis',
  	axisPointer: {
  		lineStyle: {
  			color: '#57617B'
  		}
  	}
  },
  // legend: {
  // 	top:10,
  // 	icon: 'rect',
  // 	itemWidth: 14,
  // 	itemHeight: 5,
  // 	itemGap: 13,
  // 	data: ['重点学科'],
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
  				color: 'rgba(0, 136, 212, 0.3)'
  			}, {
  				offset: 0.8,
  				color: 'rgba(0, 136, 212, 0)'
  			}], false),
  			shadowColor: 'rgba(0, 0, 0, 0.1)',
  			shadowBlur: 10
  		}
  	},
  	itemStyle: {
  		normal: {
  			color: 'rgb(0,136,212)',
  			borderColor: 'rgba(0,136,212,0.2)',
  			borderWidth: 12

  		}
  	},
  	data: [60, 70, 80, 100, 110, 120, 110, 125, 130, 140, 150, 166]
  }]
};
// var data = genData(50);
var option_xiangxingzhutu1 = {
	title: {
		text: '各高校重点学科数',
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
            name: '各高校重点学科数',
            type: 'pie',
            radius : '55%',
            center: ['60%', '50%'],
            data:[
                {value:35, name:'太原理工大学'},
                {value:36, name:'山西大学'},
                {value:15, name:'山西农业大学'},
                {value:13, name:'山西医科大学'},
                {value:10, name:'山西师范大学'},
                {value:11, name:'山西财经大学'},
                {value:13, name:'中北大学'},
                {value:108, name:'太原科技大学'}
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