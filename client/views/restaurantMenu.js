Template.restaurantMenu.helpers({
  menu : function(params){
    console.log(this.restaurantId);
    var items=Menu.find({restaurantId:this.restaurantId});
    console.log("From Restaurant menu",items)
    return items;
  }
});

Template.restaurantMenu.events({
   "click #add-button" : function(event,template){
      
   }
})
