(function(window, Kinvey) {

  Kinvey.init({
    'appKey': 'kid_TeD7v_VGAJ',
    'appSecret': '2128bcc817fd4ce0acb9da7d9c398c00'
  });

  /** Handles displaying add restaurant form modal dialog */
  $("#addRestaurantModal").modal({show: false});
  $("#addRestaurant").click(function (event) {
      var idString = "#" + event.target.id + "Modal";
      var template = Handlebars.templates["restaurant_form"];
      $("#new-restaurant-form").append(template({}));
      $(idString).modal("show");
  });

  // Remove all form data when modal is hidden
  $("#addRestaurantModal").on("hidden", function () {
    $("#new-restaurant-form").empty();  
  })

  /** Load necessary JS views */
  require(["app/views/restaurants/new",
    "app/views/restaurants/index"], 
    function(){

  });

}(window, window.Kinvey));