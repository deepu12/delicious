Restaurants.allow({
  'insert': function(userId, doc) {
    return userId;
  },
  'update': function(userId, doc, fields, modifier) {
    return userId === doc.userId;
  },
  'remove': function(userId, doc) {
    return false;
  }
});

Images.allow({
  'insert': function (userId, doc) {

    return true;
   },
});

Menu.allow({
   'insert' : function(userId, doc){
      return userId;
   },
   'update': function(userId, doc, fields, modifier) {
     return userId === doc.userId;
   },
   'remove': function(userId, doc) {
     return false;
   }
});
Review.allow({
   'insert' : function(userId,doc){
      return userId;
   },
   'update' : function(userId, doc, fields, modifier) {
      return userId === doc.userId;
   },
   'remove' : function(userId, doc){
      return false;
   }
});
Orders.allow({
   'insert' : function(userId,doc){
      return userId;
   },
   'update' : function(userId, doc, fields, modifier) {
      return userId === doc.userId;
   },
   'remove' : function(userId, doc) {
      return false;
   }
})
