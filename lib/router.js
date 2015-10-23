FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("appLayout", {content: "home"});
  }
});
FlowRouter.route('/insertRestaurant',{
   triggersEnter: [checkLoggedIn],
	action : function(){
		BlazeLayout.render("appLayout", { content : "insertRestaurant"});
	}
});
FlowRouter.route('/insertMenu/:restaurantId',{
   triggersEnter: [checkLoggedIn],
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
   triggersEnter: [checkLoggedIn],
   action : function(params){
      BlazeLayout.render("appLayout", {content : "edit", params : params})
   }
});
FlowRouter.route('/editMenu/:menuId',{
   triggersEnter: [checkLoggedIn],
   action : function(params){
      BlazeLayout.render("appLayout", {content : "editMenu", params : params})
   }
});
FlowRouter.route('/signin',{
   triggersEnter : [redirectIfLoggedIn],
   action : function(){
      BlazeLayout.render("signin", {content : "signin"})
   }
});
FlowRouter.route('/checkout/:restaurantId',{
   triggersEnter : [checkLoggedIn],
   action : function(params){
      BlazeLayout.render("appLayout", {content : "checkout", params : params})
   }
});

FlowRouter.route('/placeOrder',{
   triggersEnter : [checkLoggedIn],
   action : function(){
      BlazeLayout.render("appLayout", { content : "placeOrder"})
   }
});

FlowRouter.route('/placeOrder/success',{
   triggersEnter : [checkLoggedIn],
   action : function(){
      BlazeLayout.render("appLayout", { content : "orderSuccess"})
   }
});

var restaurantSection = FlowRouter.group({
    prefix: "/restaurantMenu/:restaurantId"
});
restaurantSection.route('/', {
   triggersEnter: [checkLoggedIn],
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
});

function checkLoggedIn (ctx, redirect) {
  if (!Meteor.userId()) {
    redirect('/signin')
  }
}

function redirectIfLoggedIn (ctx, redirect) {
  if (Meteor.userId()) {
    redirect('/')
  }
}
