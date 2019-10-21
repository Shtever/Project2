/* eslint-disable indent */
/* eslint-disable no-irregular-whitespace */
/* eslint-disable prettier/prettier */
start();

function start() {
    var queryURL =
        "https://api.ipdata.co?api-key=f754718a6a805ba8f15448bac5bf5e48e82b8c6b7b923fe91c9381eb";
    // Ajax call for lat/long based on user IP address //
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var lat = response.latitude;
        var long = response.longitude;
        console.log("IP Data API - To Generate Lat/Long from user IP:");
        console.log("Latitude: " + lat);
        console.log("Longitude: " + long);
        // Ajax call to take lat/long and return address info
        var queryURL2 = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + long + "&key=AIzaSyCrdiVhj7Un_ACNVqMw9dozHxGNVglpwmo";
        $.ajax({
            url: queryURL2,
            method: "GET"
        }).then(function (response) {
            // For loop through responses
            for (var i = 0; i < response.length; i++) {
                var hoods = response[i].address_components.types;
                console.log(response);
                // if 'neighborhood' is included in type field, console log neighbrohood name
                if (hoods.includes("neighborhood")) {

                    console.log(response[i].address_components.long_name);
                }
            }
        });
    });
}

