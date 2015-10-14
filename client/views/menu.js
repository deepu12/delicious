Template.menu.helpers({
   menu : function(params){
     console.log(this.restaurantId);
     var items=Menu.find({restaurantId:this.restaurantId}).fetch();
     console.log("From Restaurant menu",items)
     return items;
  }
});

Template.menu.onCreated(function(){
   //document.getElementById("prc-to-chk").disabled = false;
})
