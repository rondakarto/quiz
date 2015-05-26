Template.userList.helpers({
    listName : function(){
        return "사용자 목록";
    },
    list : function(){

        return Users.find( {}, {sort:{no:-1}});
    }

});

