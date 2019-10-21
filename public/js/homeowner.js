$(document).ready(function () {
  // initializing variables
  $("#sub-btn").on("click", function(event){
    event.preventDefault()
    add(event);
  });

  function add(event) {
    var newCandy = $("#newCandy").text();
    var existingCandy = $("#candyInput").text();
    var candyAdd;
    var newNeighborhood = $("#newNeighborhood").text();
    var existingNeighborhood = $("#neighborhoodInput").text();
    var neighborhoodAdd;

    console.log(newCandy);
    console.log(newNeighborhood);
    event.preventDefault;
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

    newPost = {
      candy: candyAdd,
      neighborhood: neighborhoodAdd
    };
    console.log(newPost);
    $.post("/api/treats", newPost, function () {
      // window.location.href = "/homeowner";
      console.log("posted!");
    });
  }
});
