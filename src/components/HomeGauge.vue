<template>
  <div id="chartdiv"></div>
</template>



<script>
export default {
  name: 'HomeGauge',
  props: {
    msg: String
  },
  mounted () {
    
//     am4core.ready(function() {
// // Themes begin
// am4core.useTheme(am4themes_dark);
// am4core.useTheme(am4themes_animated);
// //am4core.useTheme(am4themes_myTheme);
// // Themes end

// // create chart
// var chart = am4core.create("chartdiv", am4charts.GaugeChart);
// chart.innerRadius = am4core.percent(82);

// /**
//  * Normal axis
//  */


// /**
//  * Axis for ranges
//  */

// var colorSet = new am4core.ColorSet();

// var axis2 = chart.xAxes.push(new am4charts.ValueAxis());
// axis2.min = 0;
// axis2.max = 100;
// axis2.strictMinMax = true;
// axis2.renderer.labels.template.disabled = true;
// axis2.renderer.ticks.template.disabled = true;
// axis2.renderer.grid.template.disabled = true;

// var range0 = axis2.axisRanges.create();
// range0.value = 0;
// range0.endValue = 50;
// range0.axisFill.fillOpacity = 1;
// range0.axisFill.fill = "red";

// var range1 = axis2.axisRanges.create();
// range1.value = 50;
// range1.endValue = 100;
// range1.axisFill.fillOpacity = 1;
// range1.axisFill.fill = "green";

// /**
//  * Label
//  */

// var label = chart.radarContainer.createChild(am4core.Label);
// label.isMeasured = false;
// label.fontSize = 20;
// label.x = am4core.percent(50);
// label.y = am4core.percent(100);
// label.horizontalCenter = "middle";
// label.verticalCenter = "bottom";
// label.text = "50%";



// /**
//  * Hand
//  */

// var hand = chart.hands.push(new am4charts.ClockHand());
// hand.axis = axis2;
// hand.innerRadius = am4core.percent(30);
// hand.startWidth = 10;
// hand.pin.disabled = true;
// hand.value = 50;
// hand.fill = "white";
// hand.stroke = "black";

// hand.events.on("propertychanged", function(ev) {
//   range0.endValue = ev.target.value;
//   range1.value = ev.target.value;
//   label.text = axis2.positionToValue(hand.currentPosition).toFixed(1);
//   axis2.invalidate();
//   label.fill = hand.value <= 50 ? "green" : "red";
// });


// setInterval(function() {
//   var value = Math.round(Math.random() * 100);
//   var animation = new am4core.Animation(hand, {
//     property: "value",
//     to: value
//   }, 1000, am4core.ease.cubicOut).start();
// }, 2000);
// });
  },
  beforeDestroy () {
    if(this.chart) {
      this.chart.dispose();
    }
  },
  methods: {

  }
}


</script>

// <script>

am4core.ready(function() {
// Themes begin
am4core.useTheme(am4themes_dark);
am4core.useTheme(am4themes_animated);
//am4core.useTheme(am4themes_myTheme);
// Themes end

// create chart
var chart = am4core.create("chartdiv", am4charts.GaugeChart);
chart.innerRadius = am4core.percent(82);

/**
 * Normal axis
 */


/**
 * Axis for ranges
 */

var colorSet = new am4core.ColorSet();

var axis2 = chart.xAxes.push(new am4charts.ValueAxis());
axis2.min = 0;
axis2.max = 100;
axis2.strictMinMax = true;
axis2.renderer.labels.template.disabled = true;
axis2.renderer.ticks.template.disabled = true;
axis2.renderer.grid.template.disabled = true;

var range0 = axis2.axisRanges.create();
range0.value = 0;
range0.endValue = 50;
range0.axisFill.fillOpacity = 1;
range0.axisFill.fill = "red";

var range1 = axis2.axisRanges.create();
range1.value = 50;
range1.endValue = 100;
range1.axisFill.fillOpacity = 1;
range1.axisFill.fill = "green";

/**
 * Label
 */

var label = chart.radarContainer.createChild(am4core.Label);
label.isMeasured = false;
label.fontSize = 20;
label.x = am4core.percent(50);
label.y = am4core.percent(100);
label.horizontalCenter = "middle";
label.verticalCenter = "bottom";
label.text = "50%";



/**
 * Hand
 */

var hand = chart.hands.push(new am4charts.ClockHand());
hand.axis = axis2;
hand.innerRadius = am4core.percent(30);
hand.startWidth = 10;
hand.pin.disabled = true;
hand.value = 50;
hand.fill = "white";
hand.stroke = "black";

hand.events.on("propertychanged", function(ev) {
  range0.endValue = ev.target.value;
  range1.value = ev.target.value;
  label.text = axis2.positionToValue(hand.currentPosition).toFixed(1);
  axis2.invalidate();
  label.fill = hand.value <= 50 ? "green" : "red";
});


setInterval(function() {
  var value = Math.round(Math.random() * 100);
  var animation = new am4core.Animation(hand, {
    property: "value",
    to: value
  }, 1000, am4core.ease.cubicOut).start();
}, 2000);
});
</script>

<style scoped>
#chartdiv {
  width: 100%;
  height: 200px;
  margin-top: -50px;
  margin-bottom: -50px;
}

</style>

// Non-scoped style
<style>

#chartdiv > div > svg > g > g:nth-child(2) > g:nth-child(2) > g > g:nth-child(3){
  display: none;
}
</style>