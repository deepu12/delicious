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
FlowRouter.route('/menu',{
  action : function(){
    BlazeLayout.render("appLayout",{content : "menu"})
  }
});
FlowRouter.route('/restaurantMenu/:restaurantId',{
  action : function(params){
    BlazeLayout.render("appLayout",{content : "restaurantMenu", params : params})
  }
});
FlowRouter.route('/review',{
  action : function(){
    BlazeLayout.render("appLayout",{content : "review"})
  }
});
FlowRouter.route('/aboutRestaurant/:restaurantId',{
  action : function(params){
    BlazeLayout.render("appLayout",{content : "about", params : params})
  }
})
