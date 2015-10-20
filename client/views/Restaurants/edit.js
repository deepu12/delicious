Template.edit.helpers({
   restaurant : function(){
      return Restaurants.findOne(this.restaurantId);
   },
   imgId : function(){
     var imgId = Images.findOne({_id:this.imageId});
     console.log("From Image Id helper",imgId);
     return imgId;
   }
});
