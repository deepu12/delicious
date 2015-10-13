Template.info.helpers({
   aboutRes : function(params){
     console.log("RestaurantId : and Image Id ",this.restaurantId);
     var res = Restaurants.findOne({_id:this.restaurantId});
     console.log("Image Id ",res);
     return res;
  }
})
