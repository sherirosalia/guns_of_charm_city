$( document ).ready(function() {
    
    console.log("window loaded");
    
        // add map location
        const map = L.map("map",
        {   center: [39.3464, -76.5475],
            zoom: 13,

        })
        
    
    // console.log(data[0]);
    let slider = data[0];
    let acccessToken='pk.eyJ1IjoiY2VyZWphcm9zaW5oYSIsImEiOiJja3ViY2xrdW8wcGMzMnBvMnVkYnIzem9oIn0.4DvP31zPvz6IhpuApq1BZA'

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: acccessToken
    }).addTo(map);
        





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
        timeAttribute: "CreatedDate",
        values: [200, 800]
        

    });

    

    //Make sure to add the slider to the map ;-)
    map.addControl(sliderControl);

    //And initialize the slider
    sliderControl.startSlider();

    // THIS IS A HACK TO GET THE SLIDER TO DISPLAY A RANGE OF MARKERS ON LOAD
    // HELPFUL STACK OVERFLOW: https://stackoverflow.com/questions/1288824/trigger-a-jquery-ui-slider-event
    $('#leaflet-slider').trigger('slide');
    // a.ui-slider-handle.ui-state-default.ui-corner-all.ui-state-active
    // $('.ui-slider-handle.ui-state-default.ui-corner-all').click()
    slider = $("#leaflet-slider");
    // console.log(slider)

    slider.slider('option', 'slide').call(slider, null, {value: 200, values:[200,800]});

    // $("#leaflet-slider").slider('values',1,300)

}); // end of script/window onload
