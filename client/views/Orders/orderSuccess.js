Template.orderSuccess.helpers({
   ordId : function(){
      var id = Session.get("res");
      var orderRes=Orders.findOne(id);
      return orderRes;
   },
   userDet : function(){
      var id = Session.get("res");
      return Userorders.findOne({orderId : id});
   }
})
