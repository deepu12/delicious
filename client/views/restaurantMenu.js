Template.restaurantMenu.helpers({


});

Template.restaurantMenu.onCreated(function(){
   Meteor.subscribe('items');
});

Template.restaurantMenu.events({
   "click #add-button" : function(event, template){
      console.log("RestaurantId : ",template.data.restaurantId);

      console.log("Menu Id : ",this._id);

      Meteor.call("addItem",this._id,template.data.restaurantId);
   },
   "click #add-btn" : function(event, template){
      console.log("RestaurantId : ",template.data.restaurantId);

      console.log("Item Id : ",this._id);

      Meteor.call("addQuant",this._id);
   },
   "click #dec-btn" : function(event, template){
      console.log("RestaurantId : ",template.data.restaurantId);

      console.log("Item Id : ",this._id);

      Meteor.call("decQuant",this._id);
   }

});

Template.restaurantMenu.onRendered(function(){
   $('ul.tabs').tabs();

});
