Template.restaurantHead.helpers({
   restInfo : function(){
      console.log("From Rest Head; Id: ",this.restaurantId);
      return Restaurants.findOne(this.restaurantId);
   }
})
