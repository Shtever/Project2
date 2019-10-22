$(document).ready(function () {
  // initializing variables
  $("#sub-btn").on("click", function(event){
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

    newPost = {
      candy: candyAdd,
      address: addressAdd,
      neighborhood: neighborhoodAdd
    };
    console.log(newPost);
    $.post("/api/treats", newPost, function () {
      window.location.href = "/homeowner";
      console.log("posted treat!");
    });
    newHood = {
      neighborhood: neighborhoodAdd
    };
    $.post("/api/neighborhoods", newHood, function(){
      console.log("posted neightborhood!");
    });
  }
});
