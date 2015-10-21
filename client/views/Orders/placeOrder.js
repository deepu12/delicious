Template.placeOrder.helpers({
   orders : function(){
      var orderId = Session.get("res");
      console.log("Order Id in placeOrder.js:"+orderId);

      var ord = Orders.findOne(orderId);
      console.log("Order Objects: "+ord);
      return ord;
   }
})
