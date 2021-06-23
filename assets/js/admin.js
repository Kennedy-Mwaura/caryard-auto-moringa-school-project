  
$('.apireq').click( function() {
  $.ajax({
            url : "http://localhost:8002/api/orders/",
            dataType: "json",
            success : function (data) {    
  
                    $('#date').text( data[0].date);
                    $('#id').text( data[0].id);
                    $('#id1').text( data[1].id);
                    $('#id2').text( data[2].id);
                    $('#id3').text( data[3].id);
                    $('#date1').text( data[1].date);
                    $('#date2').text( data[2].date);
                    $('#date3').text( data[3].date);
                    $('#priority').text( data[0].priority);
                    $('#priority1').text( data[1].priority);
                    $('#priority2').text( data[2].priority);
                    $('#priority3').text( data[3].priority);
                    $('#amount').text( data[0].amount);
                    $('#amount1').text( data[1].amount);
                    $('#amount2').text( data[2].amount);
                    $('#amount3').text( data[3].amount);
                    $('#customer').text( data[0].customer);
                    $('#customer1').text( data[1].customer);
                    $('#customer2').text( data[2].customer);
                    $('#customer3').text( data[3].customer);
                    $('#car').text( data[0].car);
                    $('#car1').text( data[1].car);
                    $('#car1').text( data[2].car);
                    $('#car1').text( data[3].car);
                    let id = data[0].id;
                    let id1 = data[1].id;
                    let id2 = data[2].id;
                    let id3 = data[3].id;
                    let customer = data[0].customer;
                    let customer1 = data[1].customer;
                    let customer2 = data[2].customer;
                    let car = data[0].car;
                    let car1 = data[1].car;
                    let car2 = data[2].car;
                    let car3 = data[3].car;
                    let amount = data[0].amount;
                    let amount1 = data[1].amount;
                    let amount2 = data[2].amount;
                    let amount3 = data[3].amount;
                    link = document.getElementById("id");
                    link.setAttribute("href","http://localhost:8002/api/orders/" + id);
                    link1= document.getElementById("id1");
                    link1.setAttribute("href","http://localhost:8002/api/orders/" + id1);
                    link2= document.getElementById("id2");
                    link2.setAttribute("href","http://localhost:8002/api/orders/" + id2);
                    link3= document.getElementById("id3");
                    link3.setAttribute("href","http://localhost:8002/api/orders/" + id3);
                    clink = document.getElementById("clink");
                    clink.setAttribute("href", "http://localhost:8002/api/customers/" + customer);
                    clink1= document.getElementById("clink1");
                    clink1.setAttribute("href", "http://localhost:8002/api/customers/" + customer1);
                    clink2= document.getElementById("clink2");
                    clink2.setAttribute("href", "http://localhost:8002/api/customers/" + customer2);
                    clink3= document.getElementById("clink3");
                    clink3.setAttribute("href", "http://localhost:8002/api/customers/" + customer3);
                  }
                });
            });   
    // Data
let audi = []
$('.getstats').click( function() {
      $.ajax({
                url : "http://localhost:8002/api/cars/",
                dataType: "json",
                success : function (data) {   
                  for (let x in data) {
                    if (data[x].company == 'audi'){
              
                      audi.push(data[x])
                      console.log(audi)
                    
                    }
            

                  }
                }
              });
            }); 
    const usersMazda = 24;
    const usersLandRover = 7;
    const usersMercedesBenz = 10;
    let usersAudi= 6;
    const usersIsuzu= 12;

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
