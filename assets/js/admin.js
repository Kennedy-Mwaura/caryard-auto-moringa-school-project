    // Data
    const usersMazda = 243;
    const usersLandRover = 70;
    const usersMercedesBenz = 100;
    const usersAudi= 60;
    const usersIsuzu= 120;

    //pie
    var ctxP = document.getElementById("pieChart").getContext('2d');
    var myPieChart = new Chart(ctxP, {
      type: 'pie',
      data: {
        labels: ["Mazda", "Land-rover", "Mercedes-Benz", "Audi", "Isuzu"],
        datasets: [{
          data: [usersMazda, usersLandRover, usersMercedesBenz, usersAudi, usersIsuzu],
          backgroundColor: ["#9c27b0", "#ad1457", "#0277bd", "#303f9f ", "#009688"],
          hoverBackgroundColor: ["#a34cb3", "#a85076", "#679bb9", "#6d74a1", "#28a89b"],
          borderWidth: 4,
          borderColor: '#eee'
        }]
      },
      options: {
        responsive: true,
        legend: {
          position: 'bottom',
          labels: {
            padding: 20,
            boxWidth: 10
          }
        },
        plugins: {
          datalabels: {
            formatter: (value, ctx) => {
              let sum = 0;
              let dataArr = ctx.chart.data.datasets[0].data;
              dataArr.map(data => {
                sum += data;
              });
              let percentage = (value * 100 / sum).toFixed(2) + "%";
              return percentage;
            },
            color: 'white',
            labels: {
              title: {
                font: {
                  size: '10'
                }
              }
            }
          }
        },
        tooltips: {
          callbacks: {
            label: function (tooltipItem, data) {
              return data.labels[tooltipItem.index] + ' users ' + ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
            }
          }
        }
      }
    });

    // Table
    document.getElementById("cell-mazda").innerHTML = usersMazda;
    document.getElementById("cell-landrover").innerHTML = usersLandRover;
    document.getElementById("cell-mercedesbenz").innerHTML = usersMercedesBenz;
    document.getElementById("cell-audi").innerHTML = usersAudi;
    document.getElementById("cell-isuzu").innerHTML = usersIsuzu;
