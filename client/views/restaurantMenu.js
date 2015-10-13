Template.restaurantMenu.helpers({
  menu : function(params){
    console.log(this.restaurantId);
    var items=Menu.find({restaurantId:this.restaurantId}).fetch();
    console.log("From Restaurant menu",items)
    return items;
},
   order : function(params){
      var oItems=Items.find({restaurantId:this.restaurantId, buyerId : Meteor.userId()}).fetch();
      console.log("From Items collection ::::::::",oItems);
      var subtotal = oItems.oPrice * oItems.quantity;
      return oItems;
   }
});

Template.restaurantMenu.onCreated(function(){
   Meteor.subscribe('items');
});

Template.restaurantMenu.events({
   "click #add-button" : function(event, template){
      console.log("RestaurantId : ",template.data.restaurantId);

      console.log("Menu Id : ",this._id);

      Meteor.call("addItem",this._id,template.data.restaurantId);
   }
});

Template.restaurantMenu.onRendered(function(){

   $('ul.tabs').tabs();

   $(".button").on("click", function() {

  var $button = $(this);
  var oldValue = $button.parent().find("input").val();

  if ($button.text() == "+") {
	  var newVal = parseFloat(oldValue) + 1;
	} else {
   //Don't allow decrementing below zero
    if (oldValue > 0) {
      var newVal = parseFloat(oldValue) - 1;
    } else {
      newVal = 0;
    }
  }

  $button.parent().find("input").val(newVal);
//   var id = $button.attr("id");
// $.ajax({
//
//   url: "/restaurantMenu/{{restaurantId}}=" + id + "&newvalue=" + newVal,
//   success: function() {
//     $button.parent().find("input").val(newVal);
 // }
//});
});
});

Template.restaurantMenu.onCreated(function(){
   $("form div").append('<div class="inc button" style="width : 20px; height : 20px">+</div><div class="dec button" style="width : 20px; height : 20px">-</div>');

});
