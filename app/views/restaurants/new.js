define(["app/entities/Restaurant"], 
	function (Restaurant) {
	
	/*** Handles form submission */
  $("#new-restaurant-form").submit(function (event) {
    event.preventDefault();
    var form = $(this);
    var details = form.serializeArray();
    var argument = {};
    var restaurant = new Restaurant(argument);
    $(details).each(function() {
      argument[this.name] = this.value;
    });
    restaurant.save({
      success: function (resaurant) {
        alert("Saved restaurant!");
        $("#addRestaurantModal").modal("hide");

        // load the restaurant template
        var template = Handlebars.templates["restaurant"];
        if (restaurant.attr.visited) {
          $("#visited-restaurants").append(template(restaurant.attr));  
        } else {
          $("#desired-restaurants").append(template(restaurant.attr));
        }
        form[0].reset();
      },
      error: function (error) {
        alert("Unable to save restaurt due to " + error.error + " " + error.description);
      }
    });
  });

});