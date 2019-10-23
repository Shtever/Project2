/* eslint-disable indent */
/* eslint-disable no-irregular-whitespace */
/* eslint-disable prettier/prettier */
jQuery.ajaxPrefilter(function (options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});

start();

function start() {
    var queryURL =
        "https://api.ipdata.co?api-key=f754718a6a805ba8f15448bac5bf5e48e82b8c6b7b923fe91c9381eb";
    // Ajax call for lat/long based on user IP address //
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var apiLat = response.latitude;
        var apiLong = response.longitude;
        console.log("User IP");
        console.log("Latitude: " + apiLat);
        console.log("Longitude: " + apiLong);
        
        // initMap();

        var map;
        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: apiLat, lng: apiLong },
                zoom: 10
            });
        }




        
        // Ajax call to take lat/long and return address info
        // var queryURL2 = "https://maps.googleapis.com/maps/api/js?latlng=" + apiLat + "," + apiLong + "&key=AIzaSyCrdiVhj7Un_ACNVqMw9dozHxGNVglpwmo";
        // $.ajax({
        //     url: queryURL2,
        //     method: "GET"
        // }).then(function (response) {
        //             // // For loop through responses
        //             // for (var i = 0; i < response.length; i++) {
        //             //     var hoods = response[i].address_components.types;
        //             //     console.log(response);
        //             //     // if 'neighborhood' is included in type field, console log neighbrohood name
        //             //     if (hoods.includes("neighborhood")) {

        //             //         console.log(response[i].address_components.long_name);
        //                 }
        //             }
        // });
    });
};
