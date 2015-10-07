Template.about.helpers({
  aboutRes : function(params){
    console.log("RestaurantId : and Image Id ",this.restaurantId);
    var res = Restaurants.findOne({_id:this.restaurantId});
    console.log("Image Id ",res.imageId);
    return res;
  },
  imgId : function(){
    var imgId = Images.findOne({_id:this.imageId});
    console.log("From about Restaurant helper",imgId);
    return imgId;
  }

});
