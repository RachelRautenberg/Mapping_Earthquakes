// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([30,30],2);

// // Add GeoJSON data
// let sanFranAirpot = {
//     "type":"FeatureCollection","features":
//     [{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"
//         },
//     "geometry":{
//         "type":"Point",
//         "coordinates":[-122.375,37.61899948120117]}}
// ]};

// // Grabbing GepJSON data
// L.geoJSON(sanFranAirpot, {
//     // Turn each feature into a marker
//     onEachFeature: function(feature, layer) {
//         console.log(layer);
//         layer.bindPopup()
//     }
// }).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: mapBox_API
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Accessing the airpot GeoJSON URL
let airportData = "https://raw.githubusercontent.com/RachelRautenberg/Mapping_Earthquakes/main/majorAirports.json";

// // Skill Drill 13.5.2
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-preview-night-v2/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: "navigation-preview-night-v2",
//     accessToken: mapBox_API
// });

// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

// // Grabbing GepJSON data
// L.geoJSON(sanFranAirpot, {
//     // Turn each feature into a marker
//     pointToLayer: function(feature, latlng) {
//         console.log(feature);
//         return L.marker(latlng)
//         .bindPopup("<h2>" + feature.properties.name + "</h2>" + "<h3>" + feature.properties.city + ", " + feature.properties.country, "</h3>")
//     }
// }).addTo(map);

// Grabbing our GeoJSON data
d3.json(airportData).then(function(data) {
    console.log(data);
    // Creating a GeoJSON layer with the retrieved data
    L.geoJSON(data, {
        pointToLayer: function(feature, layer) {
            return L.marker(layer)
            .bindPopup("<h2> Airport Code: " + feature.properties.faa + "</h2>" + "<hr>" +"<h3> Airport Name: " + feature.properties.name + "</h3>");
        }
    }).addTo(map)
    // Skill Drill 15.5.3
});

