/* eslint-disable indent */
/* eslint-disable no-irregular-whitespace */
/* eslint-disable prettier/prettier */
// jQuery.ajaxPrefilter(function (options) {
//             if (options.crossDomain && jQuery.support.cors) {
//                 options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
//             }
//         });


start();
function start() {
    var queryURL = "https://api.ipdata.co/?api-key=725b995622aa411b7cb5686057f3295744cb3b2f561ed730abde434e"

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
        mapboxgl.accessToken = 'pk.eyJ1Ijoic2h0ZXZldG0iLCJhIjoiY2syM2V5c2huMHdiazNmcWMzbHd3ZXl5ZiJ9.rnLws1iCGFFsUGsted9fRw';
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/shtevetm/ck22m86cxexwf1cqrbhj27e98',
            center: [apiLong, apiLat], // starting position [lng, lat]
            zoom: 13 // starting zoom
        });



        // var map;
        // function initMap() {
        //     map = new google.maps.Map(document.getElementById('map'), {
        //         center: { lat: apiLat, lng: apiLong },
        //         zoom: 10
        //     });
        // }





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