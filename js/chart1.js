var ctx = document.getElementById('myChart').getContext('2d');
var sprintColor = 'rgb(255, 194, 14)';
var competitorColor = 'rgb(118, 134, 146)';

var pricing = {
	"Sprint": [50, 90, 90, 90, 90],
	"Verizon": [80, 140, 160, 180, 200],
	"AT&T Unlimited Plus": [80, 135, 155, 175, 195],
	"T Mobile One Plan": [80, 120, 170, 200, 230]
}

var dataSets = [];
var max;
function buildDataSet(){
	dataSets = [];
	max = 0;
	// if we use the for loop we'll have the ability to compare datasets through the legend
	//for (x=1; x <= pricing[Object.keys(pricing)[0]].length; x++){
		var dataVals = [];
		var colVals = [];
		var x = dataSetIndex;
		var priceIndex = x - 1;
		
		$.each(pricing, function(i){
			dataVals.push(pricing[i][priceIndex]);
			var col = (i == "Sprint") ? sprintColor : competitorColor;
			colVals.push(col);
			if (pricing[i][priceIndex] > max) max = pricing[i][priceIndex];
		});	
		dataSets.push({
			label: (priceIndex + 1) + " Line" + (priceIndex > 0 ? 's' : ''),
			backgroundColor: colVals,
			borderColor: 'transparent',
			data: dataVals,
			hidden: (x == dataSetIndex ? false : true)
		});
	//}
	// if using for loop
	var newmax = (Math.ceil(max/50) * 50);
	max = (newmax == max) ? newmax+50 : newmax;
	return dataSets;
}
var dataSetIndex = 1;

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: Object.keys(pricing),
        datasets: buildDataSet()
    },
    options: {
			showAllTooltips: true,
			legend: {
				labels: {
					boxWidth: 0
				},
				// toggle display labels - allows side by side viewing of datasets
				display: false
			},
			animation: {
				onComplete: function(chart){
				}
			},
			tooltips: {
				mode: 'point',
				titleFontSize: 14,
				titleFontFamily: 'Helvetica',
				titleFontStyle: 'normal',
				titleMarginBottom: 2,
				cornerRadius: 0,
				backgroundColor: 'rgb(0,0,0)',
				xPadding: 24,
				yAlign: 'bottom',
				xAlign: 'center',
				callbacks: {
					title: function(tooltipItem){
						return '$' + tooltipItem[0].yLabel;
					},
					label: function(tooltipItem, data){
						return false;
					},
				}
			},
			scales: {
				yAxes: [{
					ticks: {
						min: 0,
						max: max,
						callback: function(value, index, values) {
							return '$' + value;
						}
					}
				}]
			}
		}
});


// the plugin to enable persistant tooltips
Chart.pluginService.register({
	beforeRender: function (chart) {
		if (chart.config.options.showAllTooltips) {
			// create an array of tooltips
			// we can't use the chart tooltip because there is only one tooltip per chart
			chart.pluginTooltips = [];
			chart.config.data.datasets.forEach(function (dataset, i) {
				chart.getDatasetMeta(i).data.forEach(function (sector, j) {
					chart.pluginTooltips.push(new Chart.Tooltip({
						_chart: chart.chart,
						_chartInstance: chart,
						_data: chart.data,
						_options: chart.options.tooltips,
						_active: [sector]
					}, chart));
				});
			});

			// turn off normal tooltips
			chart.options.tooltips.enabled = false;
		}
	},
	afterDraw: function (chart, easing) {
		if (chart.config.options.showAllTooltips) {
			// we don't want the permanent tooltips to animate, so don't do anything till the animation runs atleast once
			if (!chart.allTooltipsOnce) {
				if (easing !== 1)
					return;
				chart.allTooltipsOnce = true;
			}

			// turn on tooltips
			chart.options.tooltips.enabled = true;
			Chart.helpers.each(chart.pluginTooltips, function (tooltip) {
				tooltip.initialize();
				tooltip.update();
				// we don't actually need this since we are not animating tooltips
				tooltip.pivot();
				tooltip.transition(easing).draw();
			});
			chart.options.tooltips.enabled = false;
		}
	}
});

// hack to get the tooltips to invoke on 1st load 
setTimeout(function(){
	$('#toggler').val(1).change();
}, 1);

$('#toggler').change(function(){
	dataSetIndex = parseInt($(this).val());
	myChart.data.datasets = buildDataSet(dataSetIndex);
	myChart.options.scales.yAxes[0].ticks.max = max;
	myChart.update();
});

$('.update-range').click(function(e){
	e.preventDefault();
	$('#toggler').val(parseInt($(this).val())).change();
});