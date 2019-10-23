$(document).ready(function() {
  function populateTreats () {
    $.get("/api/treats", function (data) {
      for (i in data) {
        $("#candyInput").append(
          $(
            "<option value='" +
              data[i].candy +
              "'>" +
              data[i].candy +
              "</option>"
          )
        );
      }
    });
  }
  populateTreats();

  function populateNeighborhoods () {
    $.get("/api/treats", function (data) {
      for (i in data) {
        $("#neighborhoodInput").append(
          $(
            "<option value='" +
              data[i].neighborhood +
              "'>" +
              data[i].neighborhood +
              "</option>"
          )
        );
      }
    });
  }

  populateNeighborhoods();
    // initializing variables
    $("#sub-btn-kids").on("click", function (event) {
        event.preventDefault();
        look(event);
    });

    function look(event) {
        event.preventDefault();
        var candySearch = $("#candyInput").val();
        var neighborhoodSearch = $("#neighborhoodInput").val();

        hood = {
            neighborhood: neighborhoodSearch
        };
        cand = {
            candy: candySearch
        };
        console.log(hood);

        if (neighborhoodSearch !== "nothing") {
            $.get("/api/treats", function (data) {
                console.log(data);
                for (i in data) {
                    console.log(data[i].neighborhood, hood.neighborhood);

                    if (data[i].neighborhood === hood.neighborhood) {
                        var selection = data[i].candy;
                        $("#addHere").html("candy", selection + "<br></br>");
                    } else {
                        $("#addHere").html("that neighborhood doesnt exist yet")
                    }
                }
            });
        }
        if (candySearch !== "nothing") {
            $.get("/api/treats", function (data) {
                console.log(data);
                for (i in data) {
                    console.log(data[i].candy, cand.candy);

                    if (data[i].candy === cand.candy) {
                        var selection = data[i].neighborhood;
                        $("#addHere").html("neighborhood", selection + "<br></br>");
                    } else {
                        $("#addHere").html("that candy doesnt exist yet")
                    }
                }
            });
        }

    }
});
