Template.userList.helpers({
    listName : function(){
        return "사용자 목록";
    },
    list : function(){

        var arr = [
            {no:4, name:"김국진", email:"kkj@kor.com"}
            ,{no:3, name:"윤종신", email:'yjs@kor.com'}
            ,{no:2, name:'김구라', email: 'kgr@kor.com'}
            ,{no:1, name:'조규현', email: 'jkh@kor.com'}
        ];

        arr = _.sortBy( arr, function(obj){ return obj.name;});
        return arr
    }

});

Template.userListItem.events({
    'click button' : function(evt,tmpl){
        alert(this.no + this.name + this.email );

        $(evt.target).hide();

        var tdArr = tmpl.findAll('td');
        console.log('td들', tdArr);
    }

});

Template.userListItem.rendered = function(){

};