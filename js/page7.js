var dataMap = {};
var timeLineData = [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017];
function dataFormatter(obj) {
	var myData = ['太原理工大学', '山西大学', '山西农业大学', '山西医科大学', '山西师范大学', '山西财经大学', '中北大学', '太原科技大学'];
	for (var school = myData[0]; school <= myData.length; school++) {
		var max = 0;
		var sum = 0;
		var temp = obj[school];
		for (var i = 0, l = temp.length; i < l; i++) {
			max = Math.max(max, temp[i]);
			sum += temp[i];
			obj[school][i] = {
				name : timeLineData[i],
				value : temp[i]
			}
		}
		obj[school + 'max'] = Math.floor(max / 100) * 100;
		obj[school + 'sum'] = sum;
	}
	return obj;
}

dataMap.databeast = dataFormatter({
	'太原理工大学':[389,111,227,100,280,121,200,380,363,300,100,280,121],
	'山西大学':[259,315,210,350,128,388,350,129,396,350,350,128,388],
	'山西农业大学':[262,139,328,300,255,233,300,173,388,300,300,255,233],
	'山西医科大学':[324,375,292,250,254,309,250,101,108,250,250,254,309],
	'山西师范大学':[232,204,241,200,313,133,200,310,325,200,200,313,133],
	'山西财经大学':[176,352,110,150,143,308,150,393,120,150,150,143,308],
	'中北大学':[196,163,130,100,360,297,100,386,180,100,100,360,297],
	'太原科技大学':[214,258,185,150,343,283,150,296,292,150,150,343,283]
});
dataMap.databeauty = dataFormatter({
	'太原理工大学':[389,111,227,100,280,121,200,380,363,300,100,280,121],
	'山西大学':[259,315,210,350,128,388,350,129,396,350,350,128,388],
	'山西农业大学':[262,139,328,300,255,233,300,173,388,300,300,255,233],
	'山西医科大学':[324,375,292,250,254,309,250,101,108,250,250,254,309],
	'山西师范大学':[232,204,241,200,313,133,200,310,325,200,200,313,133],
	'山西财经大学':[176,352,110,150,143,308,150,393,120,150,150,143,308],
	'中北大学':[196,163,130,100,360,297,100,386,180,100,100,360,297],
	'太原科技大学':[214,258,185,150,343,283,150,296,292,150,150,343,283]
});
dataMap.datasum=dataFormatter({
	'太原理工大学':[778,222,454,200,560,242,400,760,726,600,200,560,242],
	'山西大学':[518,630,420,700,256,776,700,258,792,700,256,776],
	'山西农业大学':[524,278,656,600,510,466,600,346,576,600,300,510,466],
	'山西医科大学':[648,750,584,500,508,618,500,202,216,500,500,508,618],
	'山西师范大学':[464,408,482,400,626,266,400,620,650,400,200,626,266],
	'山西财经大学':[352,704,220,300,286,616,300,786,240,300,300,286,616],
	'中北大学':[396,326,260,200,720,594,200,772,360,200,200,720,594],
	'太原科技大学':[428,516,370,300,686,566,300,592,584,300,300,586,566]

});
var option_zhuzhuangtu2 = {
	baseOption: {
		color:['#dd6b66','#759ba0','#8dc1a9'],
		title:{
			left: 10,
			top:'1%',
			textStyle: {
				color: '#fff',
				fontSize: 15
			},
		},
		timeline: {
			axisType: 'category',

			autoPlay: true,

			playInterval: 1000,

			data:['太原理工大学', '山西大学', '山西农业大学', '山西医科大学', '山西师范大学', '山西财经大学', '中北大学', '太原科技大学'],
		},
		calculable : true,
		tooltip:{
			trigger: 'axis',
		},
		legend:{
			top:10,
			textStyle: { 
    		color:'#fff',
    	}
		},
		xAxis: [
		{
			'type':'category',
			'axisLabel':{'interval':0},
			'data':timeLineData,
			splitLine: {show: false},
			axisLine: {
				lineStyle: {
					color: '#fff'
				}
			},
		}
		],
		yAxis: [
		{
			type: 'value',
			axisLine: {
				lineStyle: {
					color: '#fff'
				}
			},
		}
		],
		series: [
		{name: '教育部', type: 'bar'},
		{name: '省级', type: 'bar'},
		{name: 'sum',type:'line'}


		]
	},
	options: [
	{
		title: {text: '太原理工大学工程技术研究中心统计'},
		series: [
		{data: dataMap.databeast['太原理工大学']},
		{data: dataMap.databeauty['太原理工大学']},
		{data:dataMap.datasum['太原理工大学']},

		]
	},
	{
		title : {text: '山西大学工程技术研究中心统计'},
		series : [
		{data: dataMap.databeast['山西大学']},
		{data: dataMap.databeauty['山西大学']},
		{data:dataMap.datasum['山西大学']},

		]
	},
	{
		title : {text: '山西农业大学工程技术研究中心统计'},
		series : [
		{data: dataMap.databeast['山西农业大学']},
		{data: dataMap.databeauty['山西农业大学']},
		{data:dataMap.datasum['山西农业大学']},

		]
	}, {
		title : {text: '山西医科大学工程技术研究中心统计'},
		series : [
		{data: dataMap.databeast['山西医科大学']},
		{data: dataMap.databeauty['山西医科大学']},
		{data:dataMap.datasum['山西医科大学']},

		]
	}, {
		title : {text: '山西师范大学工程技术研究中心统计'},
		series : [
		{data: dataMap.databeast['山西师范大学']},
		{data: dataMap.databeauty['山西师范大学']},
		{data:dataMap.datasum['山西师范大学']},

		]
	}, {
		title : {text: '山西财经大学工程技术研究中心统计'},
		series : [
		{data: dataMap.databeast['山西财经大学']},
		{data: dataMap.databeauty['山西财经大学']},
		{data:dataMap.datasum['山西财经大学']},

		]
	}, {
		title : {text: '中北大学工程技术研究中心统计'},
		series : [
		{data: dataMap.databeast['中北大学']},
		{data: dataMap.databeauty['中北大学']},
		{data:dataMap.datasum['中北大学']},

		]
	}, {
		title : {text: '太原科技大学工程技术研究中心统计'},
		series : [
		{data: dataMap.databeast['太原科技大学']},
		{data: dataMap.databeauty['太原科技大学']},
		{data:dataMap.datasum['太原科技大学']},

		]
	},
	]
}