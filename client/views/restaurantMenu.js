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
});

Template.restaurantMenu.events({
   "click #add-button" : function(event){
      console.log("Menu Id : ",this._id);
      var item = Menu.findOne({_id : this._id});
      console.log("Events  : ",item);
      

   }
});

Template.restaurantMenu.onRendered(function(){

   $('ul.tabs').tabs();
});
