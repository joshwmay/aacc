var data1 = [{
    label: 'Harford Community College',
    y: 152.6
}, {
    label: 'Hagerstown Community College',
    y: 264.6
}, {
    label: 'Howard Community College',
    y: 301.2
}, {
    label: 'Baltimore City Community College',
    y: 308.2
}, {
    label: 'Cecil College',
    y: 309.6
}, {
    label: 'Carroll Community College',
    y: 313
}, {
    label: 'Allegany College of Maryland',
    y: 313.8
}, {
    label: 'Wor-Wic Community College',
    y: 319.6
}, {
    label: 'Chesapeake College',
    y: 320.6
}, {
    label: 'Garrett College',
    y: 332.8
}, {
    label: "Prince George's Community College",
    y: 350.0
}, {
    label: 'Community College of Baltimore County',
    y: 372.8
}, {
    label: 'College of Southern Maryland',
    y: 375.6
}, {
    label: 'Frederick Community College',
    y: 389.6
}, {
    label: 'Anne Arundel Community College',
    y: 411.8,
    indexLabel: "AACC",
}, {
    label: 'Montgomery College',
    y: 451.2
}];
var data2 = [{
    label: 'Chesapeake College',
    y: -8.9
}, {
    label: 'College of Southern Maryland',
    y: -4.8
}, {
    label: 'Baltimore City Community College',
    y: +2.4
}, {
    label: "Prince George's Community College",
    y: +4.3
}, {
    label: 'Cecil College',
    y: +4.7
}, {
    label: 'Hagerstown Community College',
    y: +5.1
}, {
    label: 'Garrett College',
    y: +5.2
}, {
    label: 'Wor-Wic Community College',
    y: +7.8
}, {
    label: 'Frederick Community College',
    y: +8.9
}, {
    label: 'Montgomery College',
    y: +8.9
}, {
    label: 'Anne Arundel Community College',
    y: +10.8,
    indexLabel: "AACC",
}, {
    label: 'Howard Community College',
    y: +12.5
}, {
    label: 'Harford Community College',
    y: +14.2
}, {
    label: 'Allegany College of Maryland',
    y: +23
}, {
    label: 'Community College of Baltimore County',
    y: +28.4
}, {
    label: 'Carroll Community College',
    y: +37.1
},

];
function chart1(data) {
  var cont1 = document.getElementById("chart1");
  var chart1 = new CanvasJS.Chart(cont1, {
    backgroundColor: null,
    animationEnabled: true,
    axisX: {
        labelFontColor: "",
        interval: 1,
        gridThickness: 0,
        tickLength: 0,
        lineColor: "white",
    },
    axisY: {
        maximum: 500,
        minimum: 0,
        interval: 100,
        gridThickness: 0,
        tickLength: 1,
        prefix: "$",
        lineColor: "white",
        labelFontColor: "white",
    },
    legend: {
        verticalAlign: "top",
        horizontalAlign: "right",
        dockInsidePlotArea: true,
        fontColor: "white"
    },
    toolTip: {
        enabled: true, //disable here
        animationEnabled: true, //disable here
        shared: true
    },
    data: [{
        name: "Avg Tuition 2017-2021",
        showInLegend: true,
        toolTipContent: 'School: {label} <br>Avg Cost: ${y} credit hour',
        legendMarkerType: "square",
        type: "column",
        color: "#E3611B",
        markerSize: 12,
        dataPoints: data
    }]
  });
  return chart1.render()
};
function chart2(data) {
    var cont2 = document.getElementById("chart2");
    
    var chart2 = new CanvasJS.Chart(cont2, {
        backgroundColor: null,
        animationEnabled: true,
        axisX: {
            labelFontColor: "",
            interval: 1,
            gridThickness: 0,
            tickLength: 0,
            lineColor: "white",
        },
        axisY: {
            maximum: 40,
            minimum: -20,
            interval: 20,
            gridThickness: 0,
            tickLength: 1,
            prefix: "",
            suffix: "%",
            includeZero: true,
            lineColor: "white",
            labelFontColor: "white",
        },
        legend: {
            verticalAlign: "top",
            horizontalAlign: "right",
            dockInsidePlotArea: true,
            fontColor: "white"
        },
        toolTip: {
            enabled: true, //disable here
            animationEnabled: true, //disable here
            shared: true
        },
        data: [{
            name: "% Change 2017-2021",
            showInLegend: true,
            toolTipContent: 'School: {label}<br>Avg Change: {y}%',
            legendMarkerType: "square",
            type: "line",
            color: "blue",
            markerSize: 4,
            dataPoints: data
        }]
    }); 
    return chart2.render()   

}
function mapper() { 
  var mymap = L.map('mapid').setView([39.10009657780947, -77.157878462514], 8);    
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
  }).addTo(mymap);
  var circle = L.circle([39.05002999594673, -76.51384918500835], 6000, {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 50
  }).addTo(mymap).bindPopup("<b><a href='https://www.aacc.edu/'>Anne Arundel Community College</a></b><br><b>Student Body:</b> 12,655<br>(#3 in Size amongst MD CC's & #8 All of MD)<br><b>$ Per Credit Hour:</b>  $411.80<br><b>Students 25 and Older:</b>  #5<br>");
  var circle = L.circle([39.3206170291295, -76.6613018002544], 6000, {
      color: 'blue',
      fillColor: 'lightblue',
      fillOpacity: 0.5
  }).addTo(mymap).bindPopup("<b><a href='https://www.bccc.edu/'>Baltimore City Community College</a></b><br><b>Student Body:</b> 4,909<br><b>$ Per Credit Hour:</b>  $308.20<br><b>Students 25 and Older:</b>  #1<br>");
  var circle = L.circle([39.53183213962793, -76.99109095421696], 6000, {
      color: 'blue',
      fillColor: 'lightblue',
      fillOpacity: 0.5
  }).addTo(mymap).bindPopup("<b><a href='https://www.allegany.edu/'>Allegany College of Maryland</a></b><br><b>Student Body:</b> 2,584<br><br>");
  var circle = L.circle([39.64116925792962, -75.95647399326049], 6000, {
      color: 'blue',
      fillColor: 'lightblue',
      fillOpacity: 0.5
  }).addTo(mymap).bindPopup("<b><a href='http://cecil.edu/'>Cecil College</a></b><br><b>Student Body:</b> 2,377<br><b>$ Per Credit Hour:</b>  $309.60<br><b>Students 25 and Older:</b>  #9<br>");
  var circle = L.circle([38.95275598286228, -76.08110479258522], 6000, {
      color: 'blue',
      fillColor: 'lightblue',
      fillOpacity: 0.5
  }).addTo(mymap).bindPopup("<b><a href='https://www.chesapeake.edu/'>Chesapeake College</a></b><br><b>Student Body:</b> 2,184<br><b>$ Per Credit Hour:</b>  $320.60<br><b>Students 25 and Older:</b>  #13<br>");
  var circle = L.circle([38.55961742722099, -77.00892890675182], 6000, {
      color: 'blue',
      fillColor: 'lightblue',
      fillOpacity: 0.5
  }).addTo(mymap).bindPopup("<b><a href='https://www.csmd.edu/'>College of Southern Maryland</a></b><br><b>Student Body:</b> 6,351<br><b>$ Per Credit Hour:</b>  $375.60<br><b>Students 25 and Older:</b>  #11<br>");
  var circle = L.circle([39.35364008477602, -76.4823566374394], 6000, {
      color: 'blue',
      fillColor: 'lightblue',
      fillOpacity: 0.5
  }).addTo(mymap).bindPopup("<b><a href='http://www.ccbcmd.edu/'>Community College of Baltimore County</a></b><br><b>Student Body:</b> 17,732<br>(#2 in Size amongst MD & CC's #6 All of MD)<br><b>$ Per Credit Hour:</b>  $372.80<br><b>Students 25 and Older:</b>  #2<br>");
  var circle = L.circle([39.451979960641104, -77.4184624490804], 6000, {
      color: 'blue',
      fillColor: 'lightblue',
      fillOpacity: 0.5
  }).addTo(mymap).bindPopup("<b><a href='http://www.frederick.edu/'>Frederick Community College</a></b><br><b>Student Body:</b> 6,129<br><b>$ Per Credit Hour:</b>  $389.60<br><b>Students 25 and Older:</b>  #12<br>");
  var circle = L.circle([39.56088682063832, -79.34275053559213], 6000, {
      color: 'blue',
      fillColor: 'lightblue',
      fillOpacity: 0.5
  }).addTo(mymap).bindPopup("<b><a href='https://www.garrettcollege.edu/'>Garret College</a></b><br><b>Student Body:</b> 651<br><b>$ Per Credit Hour:</b>  $332.80<br><b>Students 25 and Older:</b>  #16<br>");
  var circle = L.circle([39.63194874917637, -77.66902870304568], 6000, {
      color: 'blue',
      fillColor: 'lightblue',
      fillOpacity: 0.5
  }).addTo(mymap).bindPopup("<b><a href='http://www.hagerstowncc.edu/'>Hagerstown Community College</a></b><br><b>Student Body:</b> 3,848<br><b>$ Per Credit Hour:</b>  $264.60<br><b>Students 25 and Older:</b>  #8<br>");
  var circle = L.circle([39.56034703621479, -76.28449202024339], 6000, {
      color: 'blue',
      fillColor: 'lightblue',
      fillOpacity: 0.5
  }).addTo(mymap).bindPopup("<b><a href='https://www.harford.edu/'>Harford Community College</a></b><br><b>Student Body:</b> 5,705<br><b>$ Per Credit Hour:</b>  $152.60<br><b>Students 25 and Older:</b>  #10<br>");
  var circle = L.circle([39.21243733541452, -76.87831298955557], 6000, {
      color: 'blue',
      fillColor: 'lightblue',
      fillOpacity: 0.5
  }).addTo(mymap).bindPopup("<b><a href='http://www.howardcc.edu/'>Howard Community College</a></b><br><b>Student Body:</b> 9,110<br>(#5 in Size amongst MD CC's & #10 All of MD)<br><b>$ Per Credit Hour:</b>  $301.20<br><b>Students 25 and Older:</b>  #6<br>");
  var circle = L.circle([39.10009657780947, -77.157878462514], 6000, {
      color: 'blue',
      fillColor: 'lightblue',
      fillOpacity: 0.5
  }).addTo(mymap).bindPopup("<b><a href='https://www.montgomerycollege.edu/'>Montgomery College</a></b><br><b>Student Body:</b> 21,260<br>(#1 in Size amongst MD CC's & #5 All of MD)<br><b>$ Per Credit Hour:</b>  $451.20<br><b>Students 25 and Older:</b>  #7<br>");
  var circle = L.circle([38.88684458754917, -76.82660986257397], 6000, {
      color: 'blue',
      fillColor: 'lightblue',
      fillOpacity: 0.5
  }).addTo(mymap).bindPopup("<b><a href='https://www.pgcc.edu/'>Prince George's Community College</a></b><br><b>Student Body:</b> 11,788<br>(#4 in Size amongst MD CC's #9 All of MD)<br><b>$ Per Credit Hour:</b>  $350.00<br><b>Students 25 and Older:</b>  #3<br>");
  var circle = L.circle([38.374571849605964, -75.49990880489847], 6000, {
      color: 'blue',
      fillColor: 'lightblue',
      fillOpacity: 0.5
  }).addTo(mymap).bindPopup("<b><a href='http://www.worwic.edu/'>Wor-Wic Community College</a></b><br><b>Student Body:</b> 2,890<br><b>$ Per Credit Hour:</b>  $319.60<br><b>Students 25 and Older:</b>  #4<br>");
  var circle = L.circle([39.53177007829051, -76.99130553102033], 6000, {
      color: 'blue',
      fillColor: 'lightblue',
      fillOpacity: 0.5
  }).addTo(mymap).bindPopup("<b><a href='http://www.carrollcc.edu/'>Carroll Community College</a></b><br><b>Student Body:</b> 3,115<br><b>$ Per Credit Hour:</b>  $313.00<br><b>Students 25 and Older:</b>  #15<br>");
  return mymap  
}

// function startPage() {    
//     var passwordInput = document.getElementById('code');
//     var passStatus = document.getElementById('pass-status');
//     var click = document.getElementById('enter');
//     if (passwordInput.type == 'password' & passwordInput.value === "pleasehire") {
//         passwordInput.type = 'text';
//         var Slides = {
//             container: $('#slides'),
//             totalSlides: '',
//             translateAmount: 0,
//             currentSlide: 0,
//             slideWidth: '100px',
//             slideHeight: '500px',
//             init: function(totalSlides) {
//                 var each;
//                 if (!totalSlides) throw new Error('Please pass the total number of slides.');
//                 Slides.totalSlides = totalSlides;
//                 Slides.loadContent();
//                 each = Slides.container.children('div');
//                 Slides.slideWidth = each.width() + (parseInt(each.css('margin-right'), 10));
//                 Slides.keyPress();
//             },
//             loadContent: function() {
//                 Slides.container.hide();
//                 for (var i = 0; i < Slides.totalSlides; i++) {
//                     $('<div id="#slide-' + i + '"></div>')
//                         .load('slides/' + i + '.html')
//                         .appendTo(Slides.container);
//                 }
//                 Slides.container.show();
//             },
//             keyPress: function() {
//                 $(document.body).keydown(function(e) {
//                     if (e.keyCode === 39 || e.keyCode === 37) {
//                         e.preventDefault();
//                         (e.keyCode === 39) ? Slides.next(): Slides.prev();
//                     }
//                 });
//             },
//             next: function() {
//                 Slides.translateAmount -= Slides.slideWidth;
//                 Slides.updateHash(++Slides.currentSlide);
//                 Slides.animate();
//             },
//             prev: function() {
//                 if (Slides.translateAmount === 0) return;
//                 Slides.translateAmount += Slides.slideWidth;
//                 Slides.updateHash(--Slides.currentSlide);
//                 Slides.animate();
//             },
//             animate: function() {
//                 Slides
//                     .container
//                     .children()
//                     .css('-webkit-transform', 'translateX(' + Slides.translateAmount + 'px)');
//             },
//             updateHash: function(direction) {
//                 location.hash = '#slide-' + Slides.currentSlide;
//             }
//         };
//         Slides.init(6);
//     } else {
//         passwordInput.type = 'password';
//     }
// }
// function nxt() {
//     Slides.translateAmount -= Slides.slideWidth;
//     Slides.updateHash(++Slides.currentSlide);
//     Slides.animate();
// };
// function prv() {
//     if (Slides.translateAmount === 0) return;
//     Slides.translateAmount += Slides.slideWidth;
//     Slides.updateHash(--Slides.currentSlide);
//     Slides.animate();
// };
window.addEventListener("load", () => { 
    var data1 = [{
        label: 'Harford Community College',
        y: 152.6
    }, {
        label: 'Hagerstown Community College',
        y: 264.6
    }, {
        label: 'Howard Community College',
        y: 301.2
    }, {
        label: 'Baltimore City Community College',
        y: 308.2
    }, {
        label: 'Cecil College',
        y: 309.6
    }, {
        label: 'Carroll Community College',
        y: 313
    }, {
        label: 'Allegany College of Maryland',
        y: 313.8
    }, {
        label: 'Wor-Wic Community College',
        y: 319.6
    }, {
        label: 'Chesapeake College',
        y: 320.6
    }, {
        label: 'Garrett College',
        y: 332.8
    }, {
        label: "Prince George's Community College",
        y: 350.0
    }, {
        label: 'Community College of Baltimore County',
        y: 372.8
    }, {
        label: 'College of Southern Maryland',
        y: 375.6
    }, {
        label: 'Frederick Community College',
        y: 389.6
    }, {
        label: 'Anne Arundel Community College',
        y: 411.8,
        indexLabel: "AACC",
    }, {
        label: 'Montgomery College',
        y: 451.2
    }];
    var data2 = [{
        label: 'Chesapeake College',
        y: -8.9
    }, {
        label: 'College of Southern Maryland',
        y: -4.8
    }, {
        label: 'Baltimore City Community College',
        y: +2.4
    }, {
        label: "Prince George's Community College",
        y: +4.3
    }, {
        label: 'Cecil College',
        y: +4.7
    }, {
        label: 'Hagerstown Community College',
        y: +5.1
    }, {
        label: 'Garrett College',
        y: +5.2
    }, {
        label: 'Wor-Wic Community College',
        y: +7.8
    }, {
        label: 'Frederick Community College',
        y: +8.9
    }, {
        label: 'Montgomery College',
        y: +8.9
    }, {
        label: 'Anne Arundel Community College',
        y: +10.8,
        indexLabel: "AACC",
    }, {
        label: 'Howard Community College',
        y: +12.5
    }, {
        label: 'Harford Community College',
        y: +14.2
    }, {
        label: 'Allegany College of Maryland',
        y: +23
    }, {
        label: 'Community College of Baltimore County',
        y: +28.4
    }, {
        label: 'Carroll Community College',
        y: +37.1
    },
    
    ];
    chart1(data1);
    chart2(data2);
    mapper();
    startPage();
 })