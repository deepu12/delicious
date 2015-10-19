FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("appLayout", {content: "home"});
  }
});
FlowRouter.route('/insertRestaurant',{
	action : function(){
		BlazeLayout.render("appLayout", { content : "insertRestaurant"});
	}
});
FlowRouter.route('/insertMenu/:restaurantId',{
  action : function(params){
    BlazeLayout.render("appLayout",{ content : "insertMenu" , params : params})
  }
});
FlowRouter.route('/review/:restId',{
  action : function(params){
    BlazeLayout.render("appLayout",{content : "review", params : params})
  }
});
FlowRouter.route('/aboutRestaurant/:restaurantId',{
  action : function(params){
    BlazeLayout.render("appLayout",{content : "about", params : params})
  }
});
FlowRouter.route('/edit/:restaurantId',{
   action : function(params){
      BlazeLayout.render("appLayout", {content : "edit", params : params})
   }
});
FlowRouter.route('/editMenu/:menuId',{
   action : function(params){
      BlazeLayout.render("appLayout", {content : "editMenu", params : params})
   }
});

var restaurantSection = FlowRouter.group({
    prefix: "/restaurantMenu/:restaurantId"
});
restaurantSection.route('/', {
   action : function(params){
     BlazeLayout.render("appLayout",{content : "restaurantMenu", params : params})
   }
});

restaurantSection.route('/', {
   action : function(params){
     BlazeLayout.render("appLayout",{content : "menu", params : params})
   }
});
restaurantSection.route('/', {
   action : function(params){
     BlazeLayout.render("appLayout",{content : "info", params : params})
   }
});
restaurantSection.route('/', {
   action : function(params){
     BlazeLayout.render("appLayout",{content : "review", params : params})
   }
})
