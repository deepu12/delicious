Template.home.helpers({
  restaurants : function(){
    //return Restaurants.find();
    var restaurant=Restaurants.find();
     if(restaurant.ownerId === Meteor.userId())
        return restOwner=Restaurants.find({ownerId : Meteor.userId()});
     else
        return restaurant;
  },
  isOwner : function(){
    var restaurant=Restaurants.findOne({_id:this._id});
    //console.log("Image ID: ",restaurant.imageId);
    return restaurant.ownerId === Meteor.userId();
  },
  imgId : function(){
    var imgId = Images.findOne({_id:this.imageId});
    console.log("From Image Id helper",imgId);
    return imgId;
  }
});
