define([], function () {
	
  var template = Handlebars.templates["restaurant"];
  /** Load all data in Restaurant collection */
  var restaurants = new Kinvey.Collection("restaurants");
  restaurants.fetch({
    success: function (listOfRestaurants) {
      $(listOfRestaurants).each(function(index, restaurant) {
        $("#visited-restaurants").append(template(restaurant.attr));
      });  
    },
    error: function (error) {
      alert("Unable to retrieve restaurants due to " + error.error + " " + error.description);
    }
  });

});