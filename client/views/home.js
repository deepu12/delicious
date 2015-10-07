Template.home.helpers({
  restaurants : function(){
    return Restaurants.find();
  },
  title : function(){
    console.log(this._id);
    if(this.ownerId===Meteor.userId())
      return  "Add Menu";
    else
      return "Go To Menu";
  },
  isOwner : function(){
    var restaurant=Restaurants.findOne({_id:this._id});
    console.log("Image ID: ",restaurant.imageId);
    return restaurant.ownerId===Meteor.userId();
  },
  imgId : function(){
    var imgId = Images.findOne({_id:this.imageId});
    console.log("From Image Id helper",imgId);
    return imgId;
  }
});
