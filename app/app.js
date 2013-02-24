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

  /** Load necessary JS views */
  require(["app/views/restaurants/new",
    "app/views/restaurants/index"], 
    function(_Restaurant){
  });

}(window, window.Kinvey));