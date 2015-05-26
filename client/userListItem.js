Template.userListItem.events({
    'click button[name=star]' : function(evt,tmpl){
        alert(this.no + this.name + this.email );

        $(evt.target).hide();

        var tdArr = tmpl.findAll('td');
        console.log('td들', tdArr);
    },

    'click button[name=remove]' : function(evt,tmpl){
        Users.remove({_id:this._id});
    }

});

Template.userListItem.rendered = function(){

};