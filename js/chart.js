/* Bar chart */
const ctx = document.getElementById('myChart');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['شنبه', 'یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه' , 'جمعه'],
        datasets: [{
            label: 'فروش هفتگی',
            data: [12, 19, 3, 5, 10, 3, 16],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
/* Bar chart */


/* line chart */
new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
        labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
        datasets: [{
            data: [86,114,106,106,107,111,133,221,783,2478],
            label: "آفریقا",
            borderColor: "#3e95cd",
            fill: false
        }, {
            data: [282,350,411,502,635,809,947,1402,3700,5267],
            label: "آسیا",
            borderColor: "#8e5ea2",
            fill: false
        }, {
            data: [168,170,178,190,203,276,408,547,675,734],
            label: "اروپا",
            borderColor: "#3cba9f",
            fill: false
        }, {
            data: [40,20,10,16,24,38,74,167,508,784],
            label: "آمریکای لاتین",
            borderColor: "#e8c3b9",
            fill: false
        }, {
            data: [6,3,2,2,7,26,82,172,312,433],
            label: "آمریکای شمالی",
            borderColor: "#c45850",
            fill: false
        }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'جمعیت جهان در هر منطقه (به میلیون ها نفر)'
        }
    }
});
/* line chart */

/* pie chart */
new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
        labels: ["آفریقا", "آسیا", "اروپا", "آمریکای لاتین", "آمریکای شمالی"],
        datasets: [{
            label: "جمعیت (میلیون نفر)",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: [2478,5267,734,784,433]
        }]
    },
    options: {
        title: {
            display: true,
            text: 'پیش بینی جمعیت جهان (میلیون ها) در سال 2050'
        }
    }
});
/* pie chart */

/* Doughnut chart */
new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
        labels: ["آفریقا", "آسیا", "اروپا", "آمریکای لاتین", "آمریکای شمالی"],
        datasets: [
            {
                label: "جمعیت (میلیون نفر)",
                backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                data: [2478,5267,734,784,433]
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'پیش بینی جمعیت جهان (میلیون ها) در سال 2050'
        }
    }
});
/* Doughnut chart */
