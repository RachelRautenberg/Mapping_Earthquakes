// Add console.log to check to see if our code is working.
console.log("working");

// // We create the dark view tile layer that will be an option for our map.
// let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: mapBox_API
// });

// // We create the dark view tile layer that will be an option for our map.
// let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: mapBox_API
// });

// // Create a base layer that holds both maps
// let baseMaps = { 
//     Dark: dark,
//     Light: light
// }

// // Create the map object with a center and zoom level..
// let map = L.map("mapid", {
//     center: [44, -80],
//     zoom: 2,
//     layers: [light]
//   });

// // Pass our map layers into our layers control and add the layers
// L.control.layers(baseMaps).addTo(map);

// // Accessing the airpot GeoJSON URL
// let torontoData = "https://raw.githubusercontent.com/RachelRautenberg/Mapping_Earthquakes/main/torontoRoutes.json";

// // Grabbing GeoJSON data
// d3.json(torontoData).then(function(data) {
//     console.log(data);
//     // Create GeoJSON layer
//     L.geoJSON(data).addTo(map);
// });

// Skill Drill 15.5.5
// code sourced from: https://www.lostcreekdesigns.co/writing/mapbox-styles-cheatsheet/
// We create the dark view tile layer that will be an option for our map.
let night = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-preview-night-v4/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: mapBox_API
});

// We create the dark view tile layer that will be an option for our map.
let day = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-preview-day-v4/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: mapBox_API
});

// Create a base layer that holds both maps
let baseMaps = { 
    Night: night,
    Day: day
}

// Create the map object with a center and zoom level..
let map = L.map("mapid", {
    center: [44, -80],
    zoom: 2,
    layers: [night]
  });

// Pass our map layers into our layers control and add the layers
L.control.layers(baseMaps).addTo(map);

// Accessing the airpot GeoJSON URL
let torontoData = "https://raw.githubusercontent.com/RachelRautenberg/Mapping_Earthquakes/main/torontoRoutes.json";


// Create a syle for the lines
let myStyle = {
    color: "#ffffa1",
    weight: 2
}

// Grabbing GeoJSON data
d3.json(torontoData).then(function(data) {
    console.log(data);
    // Create GeoJSON layer
    L.geoJSON(data, {
        style: myStyle,
        onEachFeature: function(feature, layer) {
            layer.bindPopup("<h2> Airline: " + feature.properties.airline + "</h2><hr><h3> Destination: " + feature.properties.dst + "</h3>");
        }
    }).addTo(map);
});