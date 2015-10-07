Locations = new Mongo.Collection("location");
Locations.attachSchema(new SimpleSchema({

	location : {
		type : String,
		label : "City",
		max : 30

	},

	locality : {
		type : String,
		label : "Area"
	}

}));
