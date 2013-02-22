(function(window, Kinvey) {

  Kinvey.init({
    'appKey': 'kid_TeD7v_VGAJ',
    'appSecret': '2128bcc817fd4ce0acb9da7d9c398c00'
  });

  $("#addRestaurantModal").modal({show: false});
  $("#addRestaurant").click(function (event) {
      var idString = "#" + event.target.id + "Modal";
      $(idString).modal("show");
  })

  var Restaurant = {};
  require(["js/entities/Restaurant"], function(_Restaurant){
    Restaurant = _Restaurant;
  });

  $("#new-restaurant-form").submit(function (event) {
    event.preventDefault();
    var form = $(this);
    var details = form.serializeArray();
    var argument = {};
    var restaurant = new Restaurant(argument);
    $(details).each(function() {
      argument[this.name] = this.value;
    })
    restaurant.save({
      success: function (resaurant) {
        alert("Saved restaurant!");
        form[0].reset();
      },
      error: function (error) {
        alert("Unable to save restaurt due to " + error);
      }
    });
  });
  
}(window, window.Kinvey));