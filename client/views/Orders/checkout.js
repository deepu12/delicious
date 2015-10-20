Template.checkout.helpers({
   orderCheck : function(params){
      var oItems=Items.find({restaurantId:this.restaurantId, buyerId : Meteor.userId(), checkout : false}).fetch();
      var total = 0;
      // for(i=0; leng=oItems.length; i++ ){
      //    total = total + oItems.subtotal;
      // }
          oItems.forEach(function (tot){
             total += oItems.subtotal;
             console.log("Loop Total: ", total);
          })

      console.log("Total : ", total);
      return oItems;
   }
})
