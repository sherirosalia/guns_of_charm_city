
// console.log(acccessToken)
// Create the tile layer that will be the background of our map
var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 20,
  id: "light-v10",
  accessToken: acccessToken
  
});

const map = L.map("map",
        {   center: [39.2904, -76.6122],
            zoom: 13,

        })
lightmap.addTo(map)


let markerLayer = L.layerGroup()
    .addTo(map);

let popUpInfo = []
let demographics;

d3.csv('gunOffenders.csv', function(data){
    // console.log(data.GeoLocation)
    let lat = data['Latitude'];
    let lon = data['Longitude'];
    let race = data['Race'];
    let gender = data['Gender'];
    // let age = data['Age'];
    let incident_date=new Date(data['CreatedDate']);
    var date = incident_date.toDateString();
    // console.log(date);
    // popUpInfo.push('Date: ' + incident_date + 'Age: ' + age);
    // console.log(data)
    // popupContent="hello"
   
    L.marker([lat, lon]).addTo(markerLayer)
        .bindPopup(`<h3>Gun Offenses:</h3>
            <p>Race: ${data['Race']} <br>
            Gender: ${data['Gender']}<br>
            Date: ${date} <br> 
            Name: ${data['FirstName']} ${data['LastName'] }<br>
            Address: ${data['FullAddress']}</p>`)
        .openPopup();


    
   

    // .bindPopup(incident_date)
    // .openPopup();
    // var popup = L.popup()
    // .setLatLng([lat, lon])
    // .setContent("I am a standalone popup.")
    // .openOn(map);

    // L.marker(popup).addTo(markerLayer)

})

// console.log(popUpInfo)