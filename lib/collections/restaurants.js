Restaurants = new Mongo.Collection("restaurants");
Restaurants.initEasySearch('location');
Restaurants.initEasySearch('name');
Restaurants.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Name",
    max: 50
  },
  description : {
    type : String,
    label : "Description",
    max : 150
  },
  location: {
    type: String,
    label: "City"
  },
  phoneNumber: {
    type: Number,
    label: "Phone Number",
    min: 0
  },
  address : {
  	type : String,
  	label : "Address",
  	optional : true
  },
  ownerId: {
    type: String,
    autoValue:function(){ return this.userId }
  },
  imageId : {
    type : String,
    autoform: {
      type: "hidden",
      label: false
    }
  },
  createdAt: {
    type : Date,
    autoValue:function(){return new Date()}
  },

}));

Restaurants.allow({
  'insert': function(userId, doc) {
    return userId;
  },
  'update': function(userId, doc, fields, modifier) {
    return userId == doc.ownerId;
  },
  'remove': function(userId, doc) {
    return false;
  }
});
