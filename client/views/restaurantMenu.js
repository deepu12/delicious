Template.restaurantMenu.helpers({
  menu : function(params){
    console.log(this.restaurantId);
    var items=Menu.find({restaurantId:this.restaurantId}).fetch();
    console.log("From Restaurant menu",items)
    return items;
   },
   review : function(params){
      var rev = Review.find({restaurantId:this.restaurantId});
      console.log("Reviews from restaurantMenu helper : ",rev);
      return rev;
   },
   aboutRes : function(params){
     console.log("RestaurantId : and Image Id ",this.restaurantId);
     var res = Restaurants.findOne({_id:this.restaurantId});
     console.log("Image Id ",res);
     return res;
   },
   order : function(params){
      var oItems=Items.find({restaurantId:this.restaurantId, buyerId : Meteor.userId()}).fetch();
      console.log("From Items collection ::::::::",oItems);
      return oItems;
   }
});

Template.restaurantMenu.onCreated(function(){
   Meteor.subscribe('items');
});

Template.restaurantMenu.events({
   "click #add-button" : function(event, template){
      console.log("RestaurantId : ",template.data.restaurantId);
      console.log("Menu Id : ",this._id);
      Meteor.call("addItem",this._id,template.data.restaurantId);
   }
});

Template.restaurantMenu.onRendered(function(){

   $('ul.tabs').tabs();
});
