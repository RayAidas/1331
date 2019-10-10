var option_guanxitu4 = {
	animationDurationUpdate: 1500,
	animationEasingUpdate: 'quinticInOut',
	title: {
		text: '省产业技术联盟',
		left: 85,
			top:'1%',
			textStyle: {
				color: '#fff',
				fontSize: 15
			},
	},


	series: [{
		type: 'graph',
		tooltip: {},
		ribbonType: true,
		layout: 'circular',

		circular: {
			rotateLabel: false
		},
		symbolSize: 30,
		roam: true,
		focusNodeAdjacency: true,

		label: {
			normal: {
				show: true,
				position: 'top',
				fontWeight: 'normal',

				//				formatter: '{b}',

				textStyle: {
					fontSize: 16,
					fontFamily: '宋体'
				}

			}
		},

		edgeSymbol: ['circle'],
		edgeSymbolSize: [4, 10],
		edgeLabel: {
			normal: {
				show: true,
				textStyle: {
					fontSize: 13,
					fontWeight: 'bold',
					fontFamily: '宋体'
				}
			}
		},

		itemStyle: {
			normal: {
				label: {
					rotate: true,
					show: true,
					textStyle: {
						color: '#fff',
						fontWeight: 'bold'
					}
				},
				color: ["#393f51", "#393f51", "#393f51", "#393f51", "#393f51", "#393f51", "#393f51", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7"] /* 内的颜色#393f51，外的颜色#85d6f7 */
			},
			emphasis: {
				label: {
					show: true
					// textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
				}
			}
		},

		data: [{
				name: '山西晋猪产业技术创新战略联盟',
				symbolSize: 12,
				itemStyle: {
					normal: {
						color: '#0bb69f'
					}
				}
			},
			{
				name: '山西超重力环保产业技术创新战略联盟',
				symbolSize: 12,
				itemStyle: {
					normal: {
						color: '#80a511'
					}
				}
			}, {
				name: '山西省物联网产业技术联盟',
				symbolSize: 12,
				itemStyle: {
					normal: {
						color: '#80a511'
					}
				}
			}, {
				name: '山西农业大学',
				symbolSize: 40,
				itemStyle: {
					normal: {
						color: '#0bb69f'
					}
				}
			}, {
				name: '中北大学',
				symbolSize: 40,
				itemStyle: {
					normal: {
						color: '#80a511'
					}
				}
			}, {
				name: '山西省增材制造产业技术联盟',
				symbolSize: 12,
				itemStyle: {
					normal: {
						color: '#80a511'
					}
				}
			}, {
				name: '山西省兽药产业技术创新战略联盟',
				symbolSize: 12,
				itemStyle: {
					normal: {
						color: '#0bb69f'
					}
				}
			}, {
				name: '山西省老陈醋产业技术创新战略联盟',
				symbolSize: 12,
				itemStyle: {
					normal: {
						color: '#0bb69f'
					}
				}
			}, {
				name: '山西食用菌产业技术创新战略联盟',
				symbolSize: 12,
				itemStyle: {
					normal: {
						color: '#0bb69f'
					}
				}
			}

		],
		// links: [],
		links: [{
				source: '山西超重力环保产业技术创新战略联盟',
				target: '中北大学',
				name: '',
				tooltip: {
					trigger: 'item',
					formatter: function(params, ticket, callback) {
						return params.data.name;
					}
				},
				symbolSize: [5, 20],
				label: {
					normal: {
						formatter: function(params, ticket, callback) {
							params.name = params.data.name;
							return params.name;
						},
						show: true
					}
				},
				lineStyle: {
					normal: {
						width: 1.0,
						curveness: 0.2,
						color: '#f56e12'
					}
				}
			}, {
				source: '山西省物联网产业技术联盟',
				target: '中北大学',
				name: '',
				tooltip: {
					trigger: 'item',
					formatter: function(params, ticket, callback) {
						return params.data.name;
					}
				},
				symbolSize: [5, 20],
				label: {
					normal: {
						formatter: function(params, ticket, callback) {
							params.name = params.data.name;
							return params.name;
						},
						show: true
					}
				},
				lineStyle: {
					normal: {
						width: 1.0,
						curveness: 0.2,
						color: '#f56e12'
					}
				}
			}, {
				source: '山西省增材制造产业技术联盟',
				target: '中北大学',
				name: '',
				tooltip: {
					trigger: 'item',
					formatter: function(params, ticket, callback) {
						return params.data.name;
					}
				},
				symbolSize: [5, 20],
				label: {
					normal: {
						formatter: function(params, ticket, callback) {
							params.name = params.data.name;
							return params.name;
						},
						show: true
					}
				},
				lineStyle: {
					normal: {
						width: 1.0,
						curveness: 0.2,
						color: '#f56e12'
					}
				}
			}, {
				source: '山西省老陈醋产业技术创新战略联盟',
				target: '山西农业大学',
				name: '',
				tooltip: {
					trigger: 'item',
					formatter: function(params, ticket, callback) {
						return params.data.name;
					}
				},
				symbolSize: [5, 20],
				label: {
					normal: {
						formatter: function(params, ticket, callback) {
							params.name = params.data.name;
							return params.name;
						},
						show: true
					}
				},
				lineStyle: {
					normal: {
						width: 1.0,
						curveness: 0.2,
						color: '#f56e12'
					}
				}
			}, {
				source: '山西食用菌产业技术创新战略联盟',
				target: '山西农业大学',
				name: '',
				tooltip: {
					trigger: 'item',
					formatter: function(params, ticket, callback) {
						return params.data.name;
					}
				},
				symbolSize: [5, 20],
				label: {
					normal: {
						formatter: function(params, ticket, callback) {
							params.name = params.data.name;
							return params.name;
						},
						show: true
					}
				},
				lineStyle: {
					normal: {
						width: 1.0,
						curveness: 0.2,
						color: '#f56e12'
					}
				}
			}, {
				source: '山西晋猪产业技术创新战略联盟',
				target: '山西农业大学',
				name: '',
				tooltip: {
					trigger: 'item',
					formatter: function(params, ticket, callback) {
						return params.data.name;
					}
				},
				symbolSize: [5, 20],
				label: {
					normal: {
						formatter: function(params, ticket, callback) {
							params.name = params.data.name;
							return params.name;
						},
						show: true
					}
				},
				lineStyle: {
					normal: {
						width: 1.0,
						curveness: 0.2,
						color: '#f5c312'
					}
				}
			}, {
				source: '山西省兽药产业技术创新战略联盟',
				target: '山西农业大学',
				name: '',
				tooltip: {
					trigger: 'item',
					formatter: function(params, ticket, callback) {
						return params.data.name;
					}
				},
				symbolSize: [5, 20],
				label: {
					normal: {
						formatter: function(params, ticket, callback) {
							params.name = params.data.name;
							return params.name;
						},
						show: true
					}
				},
				lineStyle: {
					normal: {
						width: 1.0,
						curveness: 0.2,
						color: '#f5c312'
					}
				}
			}

		]
	}]
};