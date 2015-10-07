Template.insertRestaurant.events({
  'click #file-upload': function(event, template){

	},

	'change #file-upload': function(event, template){
		readURL(event.currentTarget);

		var file = event.target.files[0];
		Images.insert(file, function(err, fileObj){
			if(err)
				console.log("merr " + err);
			else
				Session.set('srv_img', fileObj._id);
		});
	}
});

Template.insertRestaurant.helpers({
	imgSrc: function(){
		return Session.get('img_src');
	},
  imageId : function(){
    return Session.get('srv_img');
  }
})
