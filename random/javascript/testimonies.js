// This targets the testimony you want to delete then deletes it from DB when you click the button.
$(".delStory").on("click", function(event) {
    var id = $(this).data("testimonyid");
    
    $.ajax("/story/" + id, {
      type: "DELETE"
    }).then(
      function() {
        location.reload();// reloads the page with changes
      }
    );
  });

  // This creates a new testimony, gathers the info from form and stores it in an object
  $("#createTestimony").on("submit", function(event) {
    event.preventDefault();

    // puts info in an object to send to DB
    var newPlan = {
      name: $("#createTestimony [name=name]").val().trim(),
      residence: $("#createTestimony [name=residence]").val().trim(),
      story: $("#createTestimony [name=story]").val().trim()
    };

    $.ajax("/story", {
      type: "POST",
      data: newPlan
    }).then(
      function() {
        location.reload();// reloads the page with changes
      }
    );
  });

  
   