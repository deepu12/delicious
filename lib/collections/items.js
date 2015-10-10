Items = new Meteor.Collection("items");

Meteor.methods({
   'addItem' : function(menuId,restaurantId){
   console.log("Restaurant Id ::: ",restaurantId);
   console.log("Add Item : ",menuId);
   var items = Menu.findOne({_id : menuId});

   var oItem = {
      'restaurantId' : restaurantId,
      'buyerId' : Meteor.userId(),
      'menuId' : items._id,
      'oItem' : items.item,
      'oFlavour' : items.flavour,
      'oPrice' : items.price,
      'quantity' : 1,
      'checkout' : false,
      'subtotal' : items.price * 1
   };
   Items.insert(oItem);
   return oItem;
   }
});
