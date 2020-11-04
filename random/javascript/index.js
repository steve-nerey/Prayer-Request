// every time the page resets the prayer request and buttons will show and hide the update form.
var allText = $('.allText');
var updateForm = $('#updateForm');
$(updateForm).hide();
$(allText).show();

// This targets the prayer request you want to delete then deletes it from DB when you click the button.
$(".delPrayer").on("click", function (event) {
  var id = $(this).data("prayerid"); // this I.D.'s the correct request for delete

  $.ajax("/request/" + id, {
    type: "DELETE"
  }).then(
    function () {
      location.reload(); // reloads the page with changes
    }
  );
});

// This creates a new prayer request gathers the info from form and stores it in an object
$("#createPrayer").on("submit", function (event) {
  event.preventDefault();

// puts info in an object to send to DB
  var newRequest = {
    name: $("#createPrayer [name=name]").val().trim(),
    residence: $("#createPrayer [name=residence]").val().trim(),
    request: $("#createPrayer [name=request]").val().trim()
  };

  $.ajax("/request", {
    type: "POST",
    data: newRequest
  }).then(
    function () {
      location.reload();// reloads the page with changes
    }
  );
});

// This targets a prayer request to update it. It gathers the info from form and stores it in the DB
$(".updateRequest").on("click", function (event) {
  $(allText).hide(); // hides all entries and buttons
  $(updateForm).show(); // show the new form to update
  var id = $(this).data("prayerid"); // this I.D.'s the corect request for update
  
  // This updates a prayer request. It gathers the info from form and stores it in an object
  $("#updatePrayer").on("submit", function (event) {
    event.preventDefault();

    // puts info in an object to send to DB
    var updatedRequest = {
      request: $("#updatePrayer [name=request]").val().trim()
    };

    $.ajax("/request/" + id, {
      type: "PUT",
      data: updatedRequest
    }).then(
      function () {
        location.reload();// reloads the page with changes
      }
    );
  });
});

