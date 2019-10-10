	var option_zhuzhuangtu1 = {
		title: {
			text: '协同创新中心-柱状图分析',
			left: 50,
			top:'1%',
			textStyle: {
				color: '#fff',
				fontSize: 15
			},
		},
		color:['#f14847','#6e91ff'],
		tooltip: {
			trigger: 'axis',
		axisPointer: { // 坐标轴指示器，坐标轴触发有效
			type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
		}
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
 //              borderColor:'#fff',//设置颜色
 //          }
 //      }
 //  },

 legend: {
 	top :10,
 	data: ['A类', 'B类'],
 	align: 'right',
 	right: 30,
 	textStyle: { 
 		color:'#fff',
 	}
 },
 grid: {
 	left: '3%',
 	right: '4%',
 	bottom: '3%',
 	containLabel: true
 },
 xAxis: [{
 	axisLine: {
 		show:true,
 		lineStyle: {
 			color: '#fff'
 		}
 	},
 	type: 'category',
//		nameLocation: 'end',
//		nameRotate:90,
data: ['山西大学', '太原理工', '山西农业', '山西医科', '山西师范', '山西财经', '中北', '太原科技', '山西中医', '太原师范', '山西传媒']
}],
yAxis: [{
	splitLine: { show: true },
	axisTick: { show: true },
	axisLine: {
		show:true,
		lineStyle: {
			color: '#fff'
		}
	},
	type: 'value',
	name: '数量(个)',
	axisLabel: {
		formatter: '{value}'
	}
}],
series: [{
	name: 'A类',
	type: 'bar',
	data: [1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0]
}, {
	name: 'B类',
	type: 'bar',
	data: [4, 2, 3, 1, 2, 1, 2, 1, 1, 1, 1]
}]
};
var option_leidatu1 = {
	title: {
		text: '协同创新中心变化',
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
 //              borderColor:'#fff',//设置颜色
 //          }
 //      }
 //  },
 tooltip: {},
 legend: {
 	top: 20,
 	itemWidth: 12,
 	itemHeight: 12,
 	data: ['A类', 'B类'],
 	textStyle: {
 		color: '#fff'
 	}
 },
 radar: {
 	radius: '60%',
 	splitNumber: 8,
 	axisLine: {
 		lineStyle: {
 			color: '#fff',
 			opacity: .2
 		}
 	},
 	splitLine: {
 		lineStyle: {
 			color: '#fff',
 			opacity: .2
 		}
 	},
 	splitArea: {
 		areaStyle: {
 			color: 'rgba(127,95,132,.3)',
 			opacity: 1,
 			shadowBlur: 45,
 			shadowColor: 'rgba(0,0,0,.5)',
 			shadowOffsetX: 0,
 			shadowOffsetY: 15,
 		}
 	},
 	indicator: [{
 		name: '山西大学',
 		max: 5
 	}, {
 		name: '太原理工大学',
 		max: 5
 	}, {
 		name: '山西农业大学',
 		max: 5
 	}, {
 		name: '山西医科大学',
 		max: 5
 	}, {
 		name: '山西师范大学',
 		max: 5
 	}, {
 		name: '山西财经大学',
 		max: 5
 	}, {
 		name: '中北大学',
 		max: 5
 	}, {
 		name: '太原科技大学',
 		max: 5
 	}, {
 		name: '山西中医学院',
 		max: 5
 	}, {
 		name: '太原师范学院',
 		max: 5
 	}, {
 		name: '山西传媒学院',
 		max: 5
 	}]
 },
 series: [{
 	name: 'A类 VS B类',
 	type: 'radar',
 	symbolSize: 0,
 	areaStyle: {
 		normal: {
 			shadowBlur: 13,
 			shadowColor: 'rgba(0,0,0,.2)',
 			shadowOffsetX: 0,
 			shadowOffsetY: 10,
 			opacity: 1
 		}
 	},
 	data: [{
 		value: [4, 2, 3, 1, 2, 1, 2, 1, 1, 1, 1],
 		name: 'B类',
 	}, {
 		value: [1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
 		name: 'A类',
 	}, ]
 }],
 color: ['#ef4b4c', '#b1eadb'],
 backgroundColor: {
 	type: 'radial',
		// x: 0.4,
		// y: 0.4,
		// r: 0.35,
		colorStops: [{
			offset: 0,
			color: '#895355' // 0% 处的颜色
		}, {
			offset: .4,
			color: '#593640' // 100% 处的颜色
		}, {
			offset: 1,
			color: 'rgba(0,0,0,0)' // 100% 处的颜色
		}],
		globalCoord: false // 缺省为 false
	}
};
var option_zhexiantu4 = {
	title:{
		text:'协同创新中心',
		left: 60,
		top:'3%',
		textStyle: {
			color: '#fff',
			fontSize: 15
		},
	},
	angleAxis: {

		axisLine: {
			lineStyle: {
				color: '#fff'
			}
		},

	},
	radiusAxis: {
		type: 'category',
		axisLine: {
			lineStyle: {
				color: '#fff'
			}
		},
		data:['A类','B类'],
		z: 10
	},
	polar: {
	},
	series: [{
		type: 'bar',
		data: [1, 13],
		coordinateSystem: 'polar',
		name: '太原理工大学',
		stack: 'a'
	}, {
		type: 'bar',
		data: [1,6],
		coordinateSystem: 'polar',
		name: '山西大学',
		stack: 'a'
	},{
		type: 'bar',
		data: [0,3],
		coordinateSystem: 'polar',
		name: '山西农业大学',
		stack: 'a'
	},{
		type: 'bar',
		data: [0,1],
		coordinateSystem: 'polar',
		name: '山西医科大学',
		stack: 'a'
	},{
		type: 'bar',
		data: [0,2],
		coordinateSystem: 'polar',
		name: '山西师范大学',
		stack: 'a'
	},{
		type: 'bar',
		data: [0,1],
		coordinateSystem: 'polar',
		name: '山西财经大学',
		stack: 'a'
	},{
		type: 'bar',
		data: [0,2],
		coordinateSystem: 'polar',
		name: '中北大学',
		stack: 'a'
	},{
		type: 'bar',
		data: [1,1],
		coordinateSystem: 'polar',
		name: '太原科技大学',
		stack: 'a'
	},{
		type: 'bar',
		data: [0,1],
		coordinateSystem: 'polar',
		name: '山西中医学院',
		stack: 'a'
	},{
		type: 'bar',
		data: [0,1],
		coordinateSystem: 'polar',
		name: '太原师范学院',
		stack: 'a'
	}],
	grid: {
		containLabel: true,
		left: 200,
		bottom: 20
	},
	legend: {
		orient:'vertical',
		left:'2%',
		top:'20%',
		textStyle: { 
			color:'#fff',
		}
	},
}
