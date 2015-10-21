Template.checkout.helpers({
   orderCheck : function(params){
      var oItems=Items.find({restaurantId:this.restaurantId, buyerId : Meteor.userId(), checkout : false}).fetch();
      var total = 0;
      // for(i=0; leng=oItems.length; i++ ){
      //    total = total + oItems.subtotal;
      // }
          oItems.forEach(function (tot){
             total += (tot.subtotal);
             console.log("Loop Total: "+ total);
          });

          Session.set("ord-total", total);

      console.log("Total : ", total);
      Session.set("items", oItems);
      return oItems;
   },
   oTotal: function(){
      return Session.get("ord-total");
   }
});

Template.checkout.events({
   "click #chk-out" : function(event){
      var oitem= Session.get("items");
      var iTot = Session.get("ord-total")
      Orders.insert({'items': oitem, 'total':iTot}, function(error , result){
         Session.set("res", result);
      });
      var rest1=Session.get("res");
      console.log("RES:"+rest1);
      FlowRouter.go('/placeOrder/');
   }
})
