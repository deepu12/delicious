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
      return userId===doc.userId;
   },
   'update': function(userId, doc, fields, modifier) {
     return userId === doc.userId;
   },
   'remove': function(userId, doc) {
     return false;
   }
});
