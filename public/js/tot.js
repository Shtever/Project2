$(document).ready(function () {
    function populateTreats() {
        var treats = [];
        $.get("/api/treats", function (data) {
            for (i in data) {
                if (treats.includes(data[i].candy) !== true) {
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

    function populateNeighborhoods() {
        $.get("/api/treats", function (data) {
            var hoods = [];
            for (i in data) {
                if (hoods.includes(data[i].neighborhood) !== true) {
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
    $("#sub-btn-kids").on("click", function (event) {
        event.preventDefault();
        look(event);
    });

    function look(event) {
        event.preventDefault();
        $("#candy-list").empty();
        var candySearch = $("#candyInput").val();
        var neighborhoodSearch = $("#neighborhoodInput").val();

        hood = {
            neighborhood: neighborhoodSearch
        };
        cand = {
            candy: candySearch
        };
        // console.log(hood);

        if ((neighborhoodSearch !== "nothing") && (candySearch === "nothing")) {
            $.get("/api/treats", function (data) {
                // console.log(data);
                for (i in data) {
                    // console.log(data[i].neighborhood, hood.neighborhood);

                    if (data[i].neighborhood === hood.neighborhood) {
                        var selection = data[i].candy;
                        $("#candy-list").append($("<li>" + selection + "</li>"));
                        $("#addHere").html($('<h3 id="addHere">available candies</h3>'))
                    }
                    // else {
                    //     $("#addHere").html("that neighborhood doesnt exist yet")
                    // }
                }
            });
        }
        if ((candySearch !== "nothing") && (neighborhoodSearch === "nothing")) {
            $.get("/api/treats", function (data) {
                // console.log(data);
                for (i in data) {
                    // console.log(data[i].candy, cand.candy);

                    if (data[i].candy === cand.candy) {
                        var selection = data[i].neighborhood;
                        $("#candy-list").append($("<li>" + selection + "</li>"));
                        $("#addHere").html($('<h3 id="addHere">find your candy in these neighborhoods</h3>'))
                    }
                    // else {
                    //     $("#addHere").html("that candy doesnt exist yet")
                    // }
                }
            });
        }
        if ((candySearch !== "nothing") && (neighborhoodSearch !== "nothing")) {
            $.get("/api/treats", function (data) {
                // console.log(data);
                for (i in data) {
                    // console.log(data[i]);
                    var bunch = [];
                    if (data[i].neighborhood === hood.neighborhood) {
                        bunch.push(data[i]);
                        for (j in bunch) {
                            console.log(bunch[j])
                            if (bunch[j].candy === candySearch) {
                                $("#addHere").html($('<h3 id="addHere">There are ' + candySearch + ' in ' + neighborhoodSearch + ' </h3>'))
                            }
                        }

                    }
                    else if ((data[i].candy !== cand.candy) && (data[i].neighborhood === hood.neighborhood)) {
                        $("#addHere").html($('<h3 id="addHere">There ain`t ' + candySearch + ' in ' + neighborhoodSearch + ' </h3>'))
                    }
                    else if ((data[i].candy === cand.candy) && (data[i].neighborhood !== hood.neighborhood)) {
                        $("#addHere").html($('<h3 id="addHere">There ain`t ' + candySearch + ' in ' + neighborhoodSearch + ' </h3>'))
                    }
                }
            });
        }
    }
});
