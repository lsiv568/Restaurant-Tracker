define(["app/entities/Restaurant", "app/RestaurantHelper"], 
	function (Restaurant, RestaurantHelper) {

    /*** Handles form submission */
    $("#new-restaurant-form").submit(function (event) {
      event.preventDefault();
      var form = $(this);
      var details = form.serializeArray();
      var argument = {};
      var restaurant = {};
      if (form.children(":first").hasClass("visiting")) {
        restaurant = new Restaurant();
        restaurant.load($("#vist-button").data("id"), {
          success: function (restaurant) {
            RestaurantHelper.updateRestaurant(restaurant, details);  
          },
          error: function (error) {
            alert("Unable to retrieve restaurants due to " + error.error + " " + error.description);
          }
        });  
        
      } else {
        restaurant = new Restaurant(argument);
        $(details).each(function() {
          argument[this.name] = this.value;
        });
        RestaurantHelper.addNewRestaurant(restaurant); 
      }
      form[0].reset();
    });

});