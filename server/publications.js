Meteor.publish('items', function () { // why lang aurgument???
    return Items.find();
});
