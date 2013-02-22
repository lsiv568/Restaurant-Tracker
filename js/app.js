(function(window, Kinvey) {

  Kinvey.init({
    'appKey': 'kid_TeD7v_VGAJ',
    'appSecret': '2128bcc817fd4ce0acb9da7d9c398c00'
  });

  var Restaurant = {};
  require(["js/entities/Restaurant"], function(_Restaurant){
    Restaurant = _Restaurant;
  });

  $("#new-restaurant-form").submit(function (event) {
    event.preventDefault();
    var details = $(this).serializeArray();
    var argument = {};
    $(details).each(function() {
      argument[this.name] = this.value;
    })
    var restaurant = new Restaurant(argument);
    restaurant.save({
      success: function (resaurant) {
        alert("Saved restaurant with id " + restaurant.getId());
      },
      error: function (error) {
        alert("Unable to save restaurt due to " + error);
      }
    });
  });
  
}(window, window.Kinvey));