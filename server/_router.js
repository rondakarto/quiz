Router.route('/rest/userList', function(){
    var request = this.request;
    var response = this.response;
    var rtn = {userList : Users.find().fetch()};
    this.response.end(JSON.stringify(rtn));
}, {where:'server'});