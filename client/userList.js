Template.userList.helpers({
    listName : function(){
        return "사용자 목록";
    },
    list : function( param ){
        console.log ( this.userList );
        return this.userList;
    }

});

Template.userList.rendered = function(){
    //Meteor.subscribe("getAllUsers", {no:1} );
}