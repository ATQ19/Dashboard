var xValues = ["مقبول", "مرفوض", "بإنتظار موافقة"];
var yValues = [22, 18, 14];
var barColors = [
  "#4318FF",
  "#6AD2FF",
  "#FF506F"
];

new Chart("myChart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
    }
  }
});






var xValues = ["مسودة", "تحت الاجراء", "بإنتظار الدفع"];
var yValues = [44, 33, 55];
var barColors = [
  "#4318FF",
  "#6AD2FF",
  "#FF506F",
];

new Chart("Chart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
    }
  }
});