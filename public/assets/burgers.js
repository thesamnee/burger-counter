$(function() {
  $(".devourBtn").on("click", function(event) {
    let id = $(this).data("id");
    let nowDevoured = $(this).data("nowDevoured");

    let newState = {
      devoured: nowDevoured
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newState
    }).then(
      function() {
        console.log("changed state to", true);
        location.reload();
      }
    );
  });

  $("#create-form").on("submit", function(event) {
    event.preventDefault();

    let newBurger = {
      name: $("#burgerInput").val().trim(),
      devoured: false
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        location.reload();
      }
    );
  });
});
