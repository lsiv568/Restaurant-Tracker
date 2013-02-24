define(["app/entities/Restaurant"], 
	function (Restaurant) {
	
	/*** Handles form submission */
  $("#new-restaurant-form").submit(function (event) {
    event.preventDefault();
    var form = $(this);
    var details = form.serializeArray();
    debugger;
    var argument = {};
    var restaurant = new Restaurant(argument);
    $(details).each(function() {
      argument[this.name] = this.value;
    });
    restaurant.save({
      success: function (resaurant) {
        alert("Saved restaurant!");
        $("#addRestaurantModal").modal("hide");
        form[0].reset();
      },
      error: function (error) {
        alert("Unable to save restaurt due to " + error.error + " " + error.description);
      }
    });
  });

});