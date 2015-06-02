Template.login.events({
    'click button[name=Login]' : function (evt,tmpl) {
        var id = tmpl.find('input[name=username]').value;
        var pwd = tmpl.find('input[name=password]').value;

        Meteor.loginWithPassword( id, pwd, function(err){
            if(err){
                alert('로그인이 실패하였습니다. \n' + err )
            } else {
                alert('로그인 되었습니다.');
                Router.go('userList');
            }
        })
    }
    ,
    'click button[name=Signup]' : function ( evt, tmpl ) {
        Router.go('/signup');
    }
});