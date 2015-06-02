Accounts.validateLoginAttempt( function(obj) {
    var allowed = obj.allowed;
    if( allowed === true ) {
        var user = obj.user;
        console.log( user.username );
        if (user.username === 'loyalgarlic') {
            throw new Meteor.Error(403, 'loyalgarlic 은 로그인 아니되옵니다');
        }
        return true;
    } else {
        return false;
    }

});

Accounts.validateNewUser( function(user) {
    if(user.username && user.username.length >=3){
        return true;
    }else{
        throw new Meteor.Error(403,'로그인 아이디는 3자리 이상입니다.');
    }
});

Accounts.validateNewUser( function (user){
    return user.username !== 'root';
});

