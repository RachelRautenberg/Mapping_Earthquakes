// Add console.log to check to see if our code is working.
console.log("working");

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: mapBox_API
});

let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: mapBox_API
});

// add layers
let baseMaps = {
    "Streets": streets,
    "Satellite": satelliteStreets
};

// Create the map object with a center and zoom level.
let map = L.map('mapid', {
    center: [39.5, -98.5],
    zoom: 3,
    layers: [streets]
    });

// Pass map layers into layer control
L.control.layers(baseMaps).addTo(map);


// Retrieve the earthquake GeoJSON data
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
    // Creating a GeoJSON layer with the retrieved data
    L.geoJSON(data).addTo(map);
});

// d3.json(torontoHoods).then(function(data) {
//     console.log(data);
//     L.geoJSON(data, {
//         style: {
//             color: "blue",
//             fillColor: "yellow",
//             fillOpacity: 0.3,
//             weight: 1
//           },
//           onEachFeature: function(feature, layer) {
//             layer.bindPopup("<h3> Neighborhood: " + feature.properties.AREA_NAME + "</h3>");
//     }}).addTo(map);
// });