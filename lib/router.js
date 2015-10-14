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
