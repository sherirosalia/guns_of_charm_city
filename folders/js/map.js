$( document ).ready(function() {
    
    console.log("window loaded");
    
    // console.log(data[0]);
    let slider = data[0];
    let acccessToken='pk.eyJ1IjoiY2VyZWphcm9zaW5oYSIsImEiOiJja2FvdG9rd28yNmt3MnJzMGFncWhzMjN4In0.JXcxgGiO_b2euVW2xWxoYw'
    // base map style
    var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
        maxZoom: 20,
        id: "light-v10",
        accessToken: acccessToken
        
        });
        
    // add map location
    const map = L.map("map",
        {   center: [39.3464, -76.5475],
            zoom: 13,

        })
        lightmap.addTo(map)




    var sliderControl = null;
     

    //Create a marker layer (in the example done via a GeoJSON FeatureCollection)
    var testlayer = L.geoJson(slider, {
        onEachFeature: function (feature, layer) {
            const dateLong = feature.properties.CreatedDate.slice(0,10);
            var dateString = JSON.stringify(dateLong);
            var date = JSON.parse(dateString);  
            // console.log(date)          
            layer.bindPopup("<h1>" + feature.properties.FullAddress + "</h1><p>Other info: <br> Date: " + date + "</p>");
        }
    });

    var sliderControl = L.control.sliderControl({
        position: "topright",
        layer: testlayer,
        range: true,
        timeAttribute: "CreatedDate"
        

    });

    //Make sure to add the slider to the map ;-)
    map.addControl(sliderControl);

    //And initialize the slider
    sliderControl.startSlider();
  

}); // end of script/window onload
