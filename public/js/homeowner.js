$(document).ready(function () {
  function populateTreats () {
    var treats = [];
    $.get("/api/treats", function (data) {
      for (i in data) {
        if (
          treats.includes(data[i].candy) !== true &&
          data[i].neighborhood !== "nothing"
        ) {
          $("#candyInput").append(
            $(
              "<option value='" +
                data[i].candy +
                "'>" +
                data[i].candy +
                "</option>"
            )
          );
          treats.push(data[i].candy);
        }
      }
    });
  }
  populateTreats();

  function populateNeighborhoods () {
    $.get("/api/treats", function (data) {
      var hoods = [];
      for (i in data) {
        if (
          hoods.includes(data[i].neighborhood) !== true &&
          data[i].neighborhood !== "nothing"
        ) {
          $("#neighborhoodInput").append(
            $(
              "<option value='" +
                data[i].neighborhood +
                "'>" +
                data[i].neighborhood +
                "</option>"
            )
          );
          hoods.push(data[i].neighborhood);
        }
      }
    });
  }

  populateNeighborhoods();

  // initializing variables
  $("#sub-btn").on("click", function (event) {
    event.preventDefault();
    add(event);
  });

  function add(event) {
    event.preventDefault();
    var newCandy = $("#newCandy").val();
    var existingCandy = $("#candyInput").val();
    var candyAdd;
    var newNeighborhood = $("#newNeighborhood").val();
    var existingNeighborhood = $("#neighborhoodInput").val();
    var neighborhoodAdd;
    var addressAdd = $("#newAddress").val();

    if (!newCandy) {
      candyAdd = existingCandy;
      console.log(candyAdd);
    } else {
      candyAdd = newCandy;
      console.log(candyAdd);
    }

    if (!newNeighborhood) {
      neighborhoodAdd = existingNeighborhood;
      console.log(neighborhoodAdd);
    } else {
      neighborhoodAdd = newNeighborhood;
      console.log(neighborhoodAdd);
    }
    newHood = {
      neighborhood: neighborhoodAdd
    };
    $.post("/api/neighborhoods", newHood, function () {
      console.log("posted neighborhood!");
    }).then(function (data) {
      newPost = {
        candy: candyAdd,
        address: addressAdd,
        neighborhood: neighborhoodAdd,
        NeighborhoodId: data.id
      };
      console.log(newPost);
      $.post("/api/treats", newPost, function () {
        window.location.href = "/homeowner";
        console.log("posted treat!");
      });
    });
  }
});
