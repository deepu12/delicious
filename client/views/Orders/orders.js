Template.orders.helpers({
   order : function(params){
      var oItems=Items.find({restaurantId:this.restaurantId, buyerId : Meteor.userId(), checkout : false}).fetch();
      console.log("From Items collection ::::::::",oItems);
      var subtotal = oItems.oPrice * oItems.quantity;
      //console.log("SubTotal ::",subtotal);
      if(oItems.length){
         
      }
      return oItems;
   }
})
