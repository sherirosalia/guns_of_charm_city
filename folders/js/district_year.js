$( document ).ready(function() {
    
    console.log("district barchart loaded");


var years = ['2008', '2009', '2010','2011','2012','2013','2014', '2015', '2016','2017', '2018', '2019', '2020', '2021']
      
      Plotly.d3.csv('folders/data/dist.csv', (err, rows) => {
        var data = years.map(y => {
          var d = rows.filter(r => r.year === y)
          
          return {
            type: 'bar',
            name: y,
            x: d.map(r => r.District),
            y: d.map(r => r.count)
          }
        })
        
        Plotly.newPlot('graph', data)
      })

});