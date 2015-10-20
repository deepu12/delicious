Template.review.helpers({
   review : function(params){
      var rev = Review.find({restaurantId:this.restaurantId});
      console.log("Reviews from restaurantMenu helper : ",rev);
      return rev;
   }
});
