start();

function start() {
  var queryURL =
    "https://api.ipdata.co?api-key=f754718a6a805ba8f15448bac5bf5e48e82b8c6b7b923fe91c9381eb";
  // Ajax call for lat/long based on user IP address //
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    var lat = response.latitude;
    var long = response.longitude;
    console.log("IP Data API - To Generate Lat/Long from user IP:");
    console.log("Latitude: " + lat);
    console.log("Longitude: " + long);

    // eslint-disable-next-line prettier/prettier
    var queryURL2 = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + long + "&key=AIzaSyCrdiVhj7Un_ACNVqMw9dozHxGNVglpwmo";
    $.ajax({
      url: queryURL2,
      method: "GET"
    }).then(function(response) {
      console.log(response);
    });
  });
}
