Router.route('/userList',{
        template : 'userList',
        waitOn:function(){
            return [Meteor.subscribe('getAllUsers')];
        },
        data : function(){
            return {
                userList : Users.find({},{sort:{no:1}}).fetch()
            };
        }
    }
);

Router.route('/userInput', {
    template : 'userInput'
});