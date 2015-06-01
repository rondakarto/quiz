Meteor.publish( "getAllUsers", function(param) {
    console.log(param);
    return Users.find();
});