Items = new Meteor.Collection("items");

Meteor.methods({
   'addItem' : function(menuId,restaurantId){
   console.log("Restaurant Id ::: ",restaurantId);
   console.log("Add Item : ",menuId);
   var item = Menu.findOne({_id : menuId});

   var oItem = {
      'restaurantId' : restaurantId,
      'buyerId' : Meteor.userId(),
      'menuId' : item._id,
      'oItem' : item.item,
      'oFlavour' : item.flavour,
      'oPrice' : item.price,
      'quantity' : 1,
      'checkout' : false,
      'subtotal' : item.price * 1
   };
   //Items.insert(oItem);
   // Items.upsert({items._id,buyerId,restaurantId},
   // {
   //    $set : {
   //       'restaurantId' : restaurantId,
   //       'buyerId' : Meteor.userId(),
   //       'menuId' : items._id,
   //       'oItem' : items.item,
   //       'oFlavour' : items.flavour,
   //       'oPrice' : items.price,
   //       'quantity' : 1,
   //       'checkout' : false,
   //       'subtotal' : items.price * 1
   //    }
   // });
   if  (!(items=Items.findOne({restaurantId : restaurantId, buyerId : Meteor.userId(), menuId : item._id , checkout : false })))
   {
   //console.log("The item not found",items);
      var items=Items.insert(oItem);
      }
   else {
      Items.update(items._id, {
         $set :{
            'quantity' : items.quantity+1,
            'subtotal' : items.oPrice * items.quantity

         }
      })
   }
   }
});
