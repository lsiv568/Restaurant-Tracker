(function(window, Kinvey) {

  Kinvey.init({
    'appKey': 'kid_TeD7v_VGAJ',
    'appSecret': '2128bcc817fd4ce0acb9da7d9c398c00'
  });

  /** Handles displaying add restaurant form modal dialog */
  $("#addRestaurantModal").modal({show: false});
  $("#addRestaurant").click(function (event) {
      var idString = "#" + event.target.id + "Modal";
      $(idString).modal("show");
  })

  /** Loads Restaurant.js entity via require and stores it in Restaurant */
  var Restaurant = {};
  require(["js/entities/Restaurant"], function(_Restaurant){
    Restaurant = _Restaurant;
  });

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
        form[0].reset();
      },
      error: function (error) {
        alert("Unable to save restaurt due to " + error.error + " " + error.description);
      }
    });
  });

  // var source = $("#restaurant-data").html();
  // var template = Handlebars.compile(source);
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

}(window, window.Kinvey));