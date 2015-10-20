// AutoForm.hooks(['insertRestaurant', 'edit'], {
  // onSuccess: function(operation, result, template) {
   //  FlashMessages.sendSuccess('Success!');
  // }
// });

AutoForm.hooks({
  insertRestaurant: {
    onSubmit: function (insertRestaurant) {
      if (customHandler(insertRestaurant)) {
      //   this.done();
        FlowRouter.go('/');
      } else {
        this.done(new Error("Submission failed"));
      }
      return false;
    }
  },
  edit : {
     onSubmit : function (updateRestaurant){
        if (customHandler(updateRestaurant)){
          this.done();
           FlowRouter.go('/');
        } else {
           this.done(new Error("Update Failed"));
        }
        return false;
     }
 }
});
