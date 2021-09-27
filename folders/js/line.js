
$( document ).ready(function() {
    
    console.log("line.js script loaded");

function makeplot() {
    Plotly.d3.csv("folders/data/years_by_count.csv", function(data){ processData(data) } );

};

function processData(allRows) {

  console.log(allRows);
  var x = [];
  var y = [];

  for (var i=0; i<allRows.length; i++) {
    row = allRows[i];
    x.push( row['year'] );
    y.push( row['RowID'] );
  }
  console.log( 'X',x, 'Y',y);
  makePlotly( x, y);
}

function makePlotly( x, y,  ){
  var plotDiv = document.getElementById('line');
  var traces = [{
    x: x,
    y: y,
  }];

  Plotly.newPlot('line', traces,
    {title: 'Charm City Crimes over Time'});
};
  makeplot();

});