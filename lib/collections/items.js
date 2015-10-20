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
   if(!(items=Items.findOne({restaurantId : restaurantId, buyerId : Meteor.userId(), menuId : item._id , checkout : false })))
   {
      var items=Items.insert(oItem);
   }
   else {
      Items.update(items._id, {
         $set :{
            'quantity' : items.quantity+1,
            'subtotal' : items.oPrice * (items.quantity+1),
         },
      })
   }
   },
   'addQuant' : function(itemId){
      console.log("Item Id ::: ",itemId);
      if(items=Items.findOne({_id : itemId}))
      {
         Items.update(items._id, {
            $inc : { quantity : 1},
            $set :{
               'subtotal' : items.oPrice * (items.quantity+1)
            }
         });
      }
      else {
         console.log("ERROR AT ITEMS.JS")
      }
   },
   'decQuant' : function(itemId){
      console.log("Item Id ::: ",itemId);
      if(items=Items.findOne({_id : itemId}))
      {
         if(items.quantity > 1){
            Items.update(items._id, {
               $set :{
                  'quantity' : items.quantity-1,
                  'subtotal' : items.oPrice * (items.quantity-1)
               }
            })
         }else{
            Items.update(items._id, {
               $set : {
                  'checkout' : "cancel"
               }
         })
      }
    }else {
         console.log("ERROR AT ITEMS.JS")
      }
   }
});
