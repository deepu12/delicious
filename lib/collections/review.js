Review = new Mongo.Collection("review");

Review.attachSchema(new SimpleSchema({
   comment: {
     type: String,
     label: "Comment",
     max: 150
   },
   userId: {
     type: String,
     autoValue:function(){ return this.userId }
   },
   userName : {
      type :String,
      autoValue : function(){
         var user = Meteor.user();
         username = user.username;
         return username;
         }
   },
   createdAt: {
     type : String,
     autoValue : function(){
        var date = new Date();
        return moment(date).format("ddd, MMM Do YYYY");
     }
   },
   restaurantId : {
      type : String
   },
}));
