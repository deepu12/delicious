Template.menu.helpers({
   menu : function(params){
     console.log("menu restId: "+this.restaurantId);
     var restId = null;
     if(this.restaurantId)
         restId = this.restaurantId;
   //   if(this.menuId){
   //      var item = Menu.findOne(this.menuId);
   //      restId = item.restaurantId;
   //   }
     var items=Menu.find({restaurantId:restId}).fetch();
     console.log("From Restaurant menu",items)
     return items;
  },
  isOwner : function(params){
     console.log("owner restId: "+this.restaurantId);
     var res=Restaurants.findOne(this.restaurantId);
     return res.ownerId === Meteor.userId();
 }
});

Template.menu.onCreated(function(){
   //document.getElementById("prc-to-chk").disabled = false;
})
