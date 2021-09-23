// District,RowID
dataList=[]
d3.csv('districtsCount.csv', function(info){
        console.log(info);
        let xValues=info['District'];
        let yValues=info['RowID']

        var dataDict = {
                x: xValues,
                y: yValues,
                
              };
        
        dataList.push(dataDict);
  

})
// Plotly.newPlot('myDiv', data);

console.log(dataList)