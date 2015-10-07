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
  'insert': function () {
    // add custom authentication code here
    return true;
  }
});
