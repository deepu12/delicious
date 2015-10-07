Menu = new Mongo.Collection("menu");
Menu.attachSchema(new SimpleSchema({

	category: {
		type : String,
		label : "Category",
	},
	item : {
		type : String,
		label : "Item Name",
		max : 40
	},
	flavour : {
		type : String,
		label : "Flavour",
		max : 30,
		optional : true
	},
	price : {
		type : Number,
		label : "Price",
		min : 0
	},
	ownerId : {
		type : String,
		autoValue : function(){return this.userId}
	},
	createdAt : {
		type : Date,
		autoValue : function(){return new Date()}
	},
	restaurantId : {
		type : String,
	}

}));
