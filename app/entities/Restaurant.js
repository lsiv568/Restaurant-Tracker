define([], function () {

return Kinvey.Entity.extend({
    // Overwrite the constructor to automatically link all instances to the restaurants collection.
    constructor: function(attributes) {
        Kinvey.Entity.prototype.constructor.call(this, attributes, "restaurants");
    },
    getName: function() {
        return this.get("name");
    },
    getDate: function() {
        return this.get("date");
    },
    getAttendees: function() {
        return this.get("attendees");
    },
    getLocation: function() {
      return this.get("location");
    },
    getRating: function() {
      return this.get("rating");
    },
    getNotes: function() {
      return this.get("notes");
    }
});

});