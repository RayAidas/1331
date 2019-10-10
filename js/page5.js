// var weekDay = 0;
// var data = [{
// 	name: '国家自然基金创新群体',
// 	value: [0, 1, 0, 0, 0, 0, 0, 0]
// }, {
// 	name: '教育部',
// 	value: [2, 2, 0, 0, 1, 0, 1, 0]
// }, {
// 	name: '省级科技厅',
// 	value: [15, 4, 7, 6, 1, 0, 7, 3]
// }, {
// 	name: '省级教育厅',
// 	value: [12, 6, 0, 3, 2, 2, 2, 2]
// }]

var option_bingtu3 = {
  title:{
    text:'重点创新团队',
    left: 65,
    top:'1%',
    textStyle: {
      color: '#fff',
      fontSize: 15
    }
  },
  tooltip : {
    trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['太原理工大学','山西大学',  '山西农业大学', '山西医科大学', '山西师范大学', '山西财经大学', '中北大学', '太原科技大学']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis:  {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          },
        },
        yAxis: {
          type: 'category',
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          },
          data: ['太原理工大学','山西大学',  '山西农业大学', '山西医科大学', '山西师范大学', '山西财经大学', '中北大学', '太原科技大学']
        },
        series: [
        {
          name: '科技厅',
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'insideRight'
            }
          },
          data: [4,15,7,6,1,0,7,3]
        },{
          name: '国家自然基金创新群体',
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'insideRight'
            }
          },
          data: [1,0,0,0,0,0,0,0]
        },
        {
          name: '教育部',
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'insideRight'
            }
          },
          data: [2,2,0,0,1,0,1,0]
        },

        {
          name: '教育厅',
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'insideRight'
            }
          },
          data: [6,12,0,3,2,2,2,2]
        },
        ]
  }

  var option_zhexiantu3 = {
   title: {
    text: '重点创新团队变化',
    left: 60,
    top:'3%',
    textStyle: {
      color: '#fff',
      fontSize: 15
    },
  },
  // toolbox: {
  //   show: true,
  //   feature: {

  //    dataView: {
  //     show: true
  //   }
  // },
  // iconStyle:{
  //  normal:{
  //             borderColor:'#fff',//设置颜色
  //           }
  //         }
  //       },
  tooltip: {
   trigger: 'axis',
   axisPointer: {
    lineStyle: {
     color: '#57617B'
   }
 }
},

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
  name: '重点创新团队',
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
   color: 'rgba(137, 189, 27, 0.3)'
 }, {
   offset: 0.8,
   color: 'rgba(137, 189, 27, 0)'
 }], false),
  shadowColor: 'rgba(0, 0, 0, 0.1)',
  shadowBlur: 10
}
},
itemStyle: {
 normal: {
  color: 'rgb(137,189,27)',
  borderColor: 'rgba(137,189,2,0.27)',
  borderWidth: 12

}
},
data: [9, 15, 18, 22, 25, 26, 27, 28, 29, 30, 60, 79]
}]
};

var option_xiangxingzhutu3 = {
  title: {
    text: '各高校重点创新团队数',
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
    name: '各高校重点创新团队数',
    type: 'pie',
    radius : '55%',
    center: ['60%', '50%'],
    data:[
    {value:29, name:'太原理工大学'},
    {value:13, name:'山西大学'},
    {value:7, name:'山西农业大学'},
    {value:9, name:'山西医科大学'},
    {value:4, name:'山西师范大学'},
    {value:2, name:'山西财经大学'},
    {value:10, name:'中北大学'},
    {value:5, name:'太原科技大学'}
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


