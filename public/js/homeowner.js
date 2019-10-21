$(document).ready(function() {
  // initializing variables
  var newCandy = $("#newCandy").val();
  var existingCandy = $("#candyInput").val();
  var candyAdd;
  var newNeighborhood = $("#newNeighborhood").val();
  var existingNeighborhood = $("#neighborhoodInput").val();
  var neighborhoodAdd;

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

  $("#sub-btn").on("click", add());

  function add(event) {
    event.preventDefault;

    newPost = {
      candy: candyAdd,
      neighborhood: neighborhoodAdd
    };
    console.log(newPost);
    $.post("/api/treats", newPost, function() {
      window.location.href = "/homeowner";
    });
  }
});
