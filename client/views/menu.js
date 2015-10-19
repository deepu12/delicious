Template.menu.helpers({
   menu : function(params){
     console.log(this.restaurantId);
     var items=Menu.find({restaurantId:this.restaurantId}).fetch();
     console.log("From Restaurant menu",items)
     return items;
  },
  isOwner : function(params){
     var owner=Menu.find({ownerId:Meteor.userId()});
     return owner;
 }
});

Template.menu.onCreated(function(){
   //document.getElementById("prc-to-chk").disabled = false;
})
