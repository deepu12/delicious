Userorders = new Mongo.Collection("userorders");

Userorders.attachSchema(new SimpleSchema({

  username: {
    type: String,
    autoValue : function(){return Meteor.user().username}
  },
  contact : {
    type : Number,
    label : "Contact Number"
  },
  flatNo: {
    type: String,
    label: "Flat No. / House No."
  },
  apartment: {
    type: String,
    label: "Apartment"
  },
  userId : {
  	type : String,
  	autoValue : function(){return Meteor.userId()}
  },
  checkout: {
    type: String,
    autoValue:function(){
      var chk = "true";
      return chk;
   }
  },
  createdAt: {
    type : Date,
    autoValue:function(){return new Date();
    }
  },
  orderId : {
    type : String
  }
}));
