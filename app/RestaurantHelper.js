define(["app/entities/Restaurant"], function (Restaurant) {

	RestaurantHelper = {

		attachVisitListener: function () {
		  /** handle displaying form when visiting restaurant */
	      $(".visit-restaurant").click(function (event) {
	        var restaurant = new Restaurant();
	        restaurant.load(event.target.id, {
	          success: function (restaurant) {
	            var template = Handlebars.templates["restaurant_form"];
	            $("#new-restaurant-form").append(template(restaurant.attr));
	            $("#addRestaurantModal").modal("show");  
	          },
	          error: function (error) {
	          	alert("Unable to retrieve restaurants due to " + error.error + " " + error.description);
	          }
	        });
	      });  
		},

		addNewRestaurant: function (restaurant) {
			restaurant.save({
		        success: function (restaurant) {
		          $("#addRestaurantModal").modal("hide");

		          // load the restaurant template
		          var template = Handlebars.templates["restaurant"];
		          if (restaurant.attr.visited) {
		            $("#visited-restaurants").append(template(restaurant.attr));  
		          } else {
		            $("#desired-restaurants").append(template(restaurant.attr));
		            RestaurantHelper.attachVisitListener();
		          }
		          
		        },
		        error: function (error) {
		          alert("Unable to save restaurt due to " + error.error + " " + error.description);
		        }
	      });
		},

		updateRestaurant: function(restaurant, details) {
			$(details).each(function () {
				restaurant.set(this.name, this.value);
			});
			restaurant.save({
				success: function(restaurant) {
					location.reload();
				},
				error: function(error) {
					alert("Unable to save restaurt due to " + error.error + " " + error.description);	
				}
			});
			
		}

	}

	return RestaurantHelper;

});