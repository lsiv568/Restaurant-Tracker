define([], function () {
	
  // load the restaurant template
  var template = Handlebars.templates["restaurant"];
  
  /** Load all data in Restaurant collection */
  var restaurants = new Kinvey.Collection("restaurants");
  restaurants.fetch({
    success: function (listOfRestaurants) {
      $(listOfRestaurants).each(function(index, restaurant) {
        // if the restaurant has been visited add it to the 
        // visited restaurants column, otherwise, it's a desired 
        // restaurant so we add it to desired column
        if (restaurant.attr.visited) {
          $("#visited-restaurants").append(template(restaurant.attr));  
        } else {
          $("#desired-restaurants").append(template(restaurant.attr));
        }
      });  
    },
    error: function (error) {
      alert("Unable to retrieve restaurants due to " + error.error + " " + error.description);
    }
  });

});