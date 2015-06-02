Template.signup.events({
    'click button[name=Save]' : function( evt, tmpl) {

        var info = {
            username : tmpl.find('input[name=username]').value
            ,password : tmpl.find('input[name=password]').value
            ,email : tmpl.find('input[name=email]').value
            ,profile : {
                nickname : tmpl.find('input[name=nickname]').value
            }
        };

        Accounts.createUser(info, function(err){
            if(err){
                alert(err);
            }else{
                alert("등록되었습니다.");
                Router.go('/login');
            }
        })
    },
    'click button[name=Cancel]' : function( evt,tmpl ) {
        Router.go('/login');
    }
});