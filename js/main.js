// $(document).ready(function() {
// 	$("ul li").click(function() {
// 		$(this).addClass("active").siblings().removeClass('active');
// 		$("#tab_list>div").eq($("ul li").index(this)).addClass("show").siblings().removeClass('show');
// 	});
// });

window.onload = function() {
	var oUl1 = document.getElementById("ul1");
	var aLi = oUl1.getElementsByTagName("li");
	var oDiv = document.getElementById("tab_list");
	var aDiv = oDiv.querySelectorAll("#tab_list>div");
	for(var i = 0; i < aLi.length; i++) {
		aLi[i].index = i;
		aLi[i].onclick = function() {
			for(var i = 0; i < aLi.length; i++) {
				aLi[i].className = "";  
			}
			this.className = "active";
			for(var j = 0; j < aDiv.length; j++) {
				aDiv[j].className = "hide";
			}
			aDiv[this.index].className = "show";
			switch(this.index) {
			case 0:
			echarts.init(document.getElementById("box11_top")).setOption(option_map);
			echarts.init(document.getElementById("box12_top1")).setOption(option_sandiantu1);
			echarts.init(document.getElementById("box1_22")).setOption(option_sandiantu2);
			echarts.init(document.getElementById("box1_3")).setOption(option_xiangxingzhutu);
			break;
			case 1:

			break;
			case 2:
			echarts.init(document.getElementById("box3_left")).setOption(option_guanxitu1);
			echarts.init(document.getElementById("box3_right2")).setOption(option_zhexiantu1);
			echarts.init(document.getElementById("box3_right1")).setOption(option_xiangxingzhutu1);


			break;
			case 3:
			echarts.init(document.getElementById("box4_left")).setOption(option_bingtu2);
			echarts.init(document.getElementById("box4_right1")).setOption(option_zhexiantu2);
			echarts.init(document.getElementById("box4_right2")).setOption(option_xiangxingzhutu2);
			break;
			case 4:

			var myChart_bingtu3 = echarts.init(document.getElementById("box5_left"));
			myChart_bingtu3.on('click', function(params) {
				// if(params.componentSubType != 'pie') {
				// 	weekDay = params.dataIndex;
				// 	option_bingtu3.series[4].data[0].value = data[0].value[weekDay];
				// 	option_bingtu3.series[4].data[1].value = data[1].value[weekDay];
				// 	option_bingtu3.series[4].data[2].value = data[2].value[weekDay];
				// 	option_bingtu3.series[4].data[3].value = data[3].value[weekDay];
				// 	var weekDayData = ['太原理工大学', '山西大学', '山西农业大学', '山西医科大学', '山西师范大学', '山西财经大学', '中北大学', '太原科技大学'];
				// 	weekDayData[weekDay] = {
				// 		value: weekDayData[weekDay],
				// 		textStyle: {
				// 			fontSize: 25,
				// 		}
				// 	};
				// 	option_bingtu3.angleAxis.data = weekDayData;
				// 	myChart_bingtu3.setOption(option_bingtu3);
				// }
			});
			myChart_bingtu3.setOption(option_bingtu3);

			echarts.init(document.getElementById("box5_right1")).setOption(option_zhexiantu3);
			echarts.init(document.getElementById("box5_right2")).setOption(option_xiangxingzhutu3);
			break;
			case 5:
			echarts.init(document.getElementById("box6_left")).setOption(option_zhuzhuangtu1);
			echarts.init(document.getElementById("box6_right1")).setOption(option_leidatu1);
			echarts.init(document.getElementById("box6_right2")).setOption(option_zhexiantu4);
			break;
			case 6:
			echarts.init(document.getElementById("box7")).setOption(option_zhuzhuangtu2);
				//				echarts.init(document.getElementById("leidatu2"), 'dark').setOption(option_leidatu2);
				//				echarts.init(document.getElementById("zhexiantu5"), 'dark').setOption(option_zhexiantu5);
				//				echarts.init(document.getElementById("xiangxingzhutu5"), 'dark').setOption(option_xiangxingzhutu5);
				break;
				case 7:
				//				echarts.init(document.getElementById("zhuzhuangtu3"), 'dark').setOption(option_zhuzhuangtu3);
				//				echarts.init(document.getElementById("leidatu3"), 'dark').setOption(option_leidatu3);
				//				echarts.init(document.getElementById("zhexiantu6"), 'dark').setOption(option_zhexiantu6);
				//				echarts.init(document.getElementById("xiangxingzhutu6"), 'dark').setOption(option_xiangxingzhutu6);
				echarts.init(document.getElementById("box8")).setOption(option_guanxitu4);
				break;
				case 8:
				echarts.init(document.getElementById("box9")).setOption(option_map1);
				break;

				default:
				break;
		}
		
			}
		}
	}