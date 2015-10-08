Items = new Meteor.Collection("items");

Meteor.methods({
   'addItem' : function(menuId){
   console.log("Add Item : ",this._id);
   }
});
