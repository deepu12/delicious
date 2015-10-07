readURL = function(input){
	if(input.files && input.files[0]){
		var reader = new FileReader();
		var file = input.files[0];

		reader.onload = function(e){
			Session.set('img_src', e.target.result);
		}

		reader.readAsDataURL(file);
	}
}
